import dbConnect from "../../lib/dbConnect"; 
import Volunteer from "../../models/Volunteer";
import { volunteerSchema } from "../../lib/validation";
import { sendEmail } from "../../lib/resend";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: `Method '${req.method}' Not Allowed` });
  }

  try {
    // 1. Validate payload using Zod schema
    const validationResult = volunteerSchema.safeParse(req.body);

    if (!validationResult.success) {
      const errorMessage = validationResult.error.issues[0].message;
      return res.status(400).json({ success: false, error: errorMessage });
    }

    const validData = validationResult.data;

    // 2. Connect to MongoDB
    await dbConnect();

    // 3. Save to Database
    const newVolunteer = await Volunteer.create(validData);

    // 4. Send Email Notifications via Resend helper
    try {
      // A. Send notification email to NGO admin
      await sendEmail({
        to: process.env.ADMIN_VOLUNTEER_EMAIL || "volunteer@parakletus.com",
        subject: `New Volunteer Application: ${validData.name} (${validData.areaOfInterest})`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #16a34a;">New Volunteer Submission</h2>
            <p>You have received a new application through the website form:</p>
            <hr style="border: none; border-top: 1px solid #eee;" />
            <p><strong>Name:</strong> ${validData.name}</p>
            <p><strong>Email:</strong> ${validData.email}</p>
            <p><strong>Phone:</strong> ${validData.phone}</p>
            <p><strong>Profession:</strong> ${validData.profession}</p>
            <p><strong>Area of Interest:</strong> ${validData.areaOfInterest}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f9f9f9; padding: 10px 15px; border-left: 4px solid #16a34a; margin: 0;">
              ${validData.message}
            </blockquote>
          </div>
        `,
      });

      // B. Send auto-reply confirmation email to the applicant
      await sendEmail({
        to: validData.email,
        subject: "We've received your volunteer application - Parakletus",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #16a34a;">Thank you for applying, ${validData.name}!</h2>
            <p>We have successfully received your application for <strong>${validData.areaOfInterest}</strong>.</p>
            <p>Our team is reviewing your profile and will get back to you shortly.</p>
            <br/>
            <p>Warm regards,</p>
            <p><strong>Parakletus Team</strong></p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Resend Email Dispatch Error:", emailError);
      // Note: Request still succeeds since data is safely stored in MongoDB.
    }

    // 5. Return Success Response
    return res.status(201).json({
      success: true,
      message: "Volunteer application submitted successfully!",
      volunteerId: newVolunteer._id,
    });

  } catch (error) {
    console.error("Volunteer API Error:", error);
    return res.status(500).json({ success: false, error: "Internal Server Error." });
  }
}