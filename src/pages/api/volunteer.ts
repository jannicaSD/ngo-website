import dbConnect from "../../lib/dbConnect"; 
import Volunteer from "../../models/Volunteer";
import { volunteerSchema } from "../../lib/validation";
import { resend } from "../../lib/resend";

export default async function handler(req, res) {
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

    // 4. Send Email Notifications via Resend (Non-blocking or caught separately so it doesn't break form submission if email fails)
    try {
      // A. Send notification email to NGO
      await resend.emails.send({
        from: process.env.NGO_SENDER_EMAIL || "Parakletus <onboarding@resend.dev>",
        to: "volunteer@parakletus.com",
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
      await resend.emails.send({
        from: process.env.NGO_SENDER_EMAIL || "Parakletus <onboarding@resend.dev>",
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
      // Note: We log the email error but allow the request to succeed since data is safely saved in MongoDB.
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