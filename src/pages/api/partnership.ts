import dbConnect from "../../lib/dbConnect"; 
import Partnership from "../../models/Partnership";
import { partnershipSchema } from "../../lib/validation";
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
    const validationResult = partnershipSchema.safeParse(req.body);

    if (!validationResult.success) {
      const errorMessage = validationResult.error.issues[0].message;
      return res.status(400).json({ success: false, error: errorMessage });
    }

    const validData = validationResult.data;

    // 2. Connect to MongoDB
    await dbConnect();

    // 3. Save to Database
    const newPartnership = await Partnership.create(validData);

    // 4. Send Email Notifications via Resend
       // 4. Send Email Notifications
    try {
      // Notify NGO
      await sendEmail({
        to: process.env.ADMIN_VOLUNTEER_EMAIL!,
        subject: `New Partnership Inquiry: ${validData.organizationName}`,
        html: `
          <h2>New Partnership Inquiry</h2>

          <p><strong>Organization:</strong> ${validData.organizationName}</p>
          <p><strong>Contact Person:</strong> ${validData.contactPerson}</p>
          <p><strong>Email:</strong> ${validData.email}</p>
          <p><strong>Phone:</strong> ${validData.phone}</p>
          <p><strong>Interest:</strong> ${validData.partnershipInterest}</p>

          <p><strong>Message:</strong></p>
          <p>${validData.message}</p>
        `,
      });

      // Auto reply
      await sendEmail({
        to: validData.email,
        subject: "We've received your partnership inquiry - Parakletus",
        html: `
          <h2>Thank you, ${validData.contactPerson}!</h2>

          <p>We have received your partnership inquiry.</p>

          <p>
            Our team will review your request and contact you shortly.
          </p>

          <br />

          <p>Regards,</p>
          <strong>Parakletus Team</strong>
        `,
      });
    } catch (emailError) {
      console.error("Resend Email Error:", emailError);
    }

    // 5. Return Success Response
    return res.status(201).json({
      success: true,
      message: "Partnership inquiry submitted successfully!",
      partnershipId: newPartnership._id,
    });

  } catch (error) {
    console.error("Partnership API Error:", error);

    return res.status(500).json({
      success: false,
      error: "Internal Server Error.",
    });
  }
}