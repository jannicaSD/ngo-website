import { z } from "zod";

// 1. Volunteer Form Validation Schema
export const volunteerSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(100, { message: "Name cannot exceed 100 characters" })
    .trim(),
  
  email: z
    .string()
    .email({ message: "Please provide a valid email address" })
    .trim()
    .toLowerCase(),
  
  phone: z
    .string()
    .min(7, { message: "Please provide a valid phone number" })
    .max(20, { message: "Phone number is too long" })
    .trim(),
  
  profession: z
    .string()
    .min(2, { message: "Profession is required" })
    .max(100, { message: "Profession cannot exceed 100 characters" })
    .trim(),
  
  areaOfInterest: z
    .enum(["Community Outreach", "Legal Assistance", "Education Programs"], {
      message: "Please select a valid area of interest",
    }),
  
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" })
    .max(1500, { message: "Message cannot exceed 1500 characters" })
    .trim(),
});

export type VolunteerFormData = z.infer<typeof volunteerSchema>;


// 2. Partnership Form Validation Schema
export const partnershipSchema = z.object({
  organizationName: z
    .string()
    .min(2, { message: "Organization name must be at least 2 characters long" })
    .max(120, { message: "Organization name cannot exceed 120 characters" })
    .trim(),

  contactPerson: z
    .string()
    .min(2, { message: "Contact person name is required" })
    .max(100, { message: "Contact person name cannot exceed 100 characters" })
    .trim(),
  
  email: z
    .string()
    .email({ message: "Please provide a valid email address" })
    .trim()
    .toLowerCase(),
  
  phone: z
    .string()
    .min(7, { message: "Please provide a valid phone number" })
    .max(20, { message: "Phone number is too long" })
    .trim(),
  
  partnershipInterest: z
    .enum([
      "Corporate Sponsorship", 
      "Joint Project", 
      "Church/NGO Collaboration"
    ], {
      message: "Please select a valid partnership interest",
    }),
  
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" })
    .max(2000, { message: "Message cannot exceed 2000 characters" })
    .trim(),
});

export type PartnershipFormData = z.infer<typeof partnershipSchema>;