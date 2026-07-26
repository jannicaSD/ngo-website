import mongoose from "mongoose";

const PartnershipSchema = new mongoose.Schema(
  {
    organizationName: {
      type: String,
      required: [true, "Organization name is required"],
      trim: true,
      maxlength: [120, "Organization name cannot exceed 120 characters"],
    },
    contactPerson: {
      type: String,
      required: [true, "Contact person name is required"],
      trim: true,
      maxlength: [100, "Contact person name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    partnershipInterest: {
      type: String,
      required: [true, "Please select an area of partnership interest"],
      enum: [
        "Partnership Interest...", 
        "Corporate Sponsorship", 
        "Joint Project", 
        "Church/NGO Collaboration"
      ],
    },
    message: {
      type: String,
      required: [true, "Collaboration message is required"],
      maxlength: [2000, "Message cannot exceed 2000 characters"],
    },
    status: {
      type: String,
      enum: ["pending", "reviewed", "accepted", "declined"],
      default: "pending",
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

export default mongoose.models.Partnership || mongoose.model("Partnership", PartnershipSchema);