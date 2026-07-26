import mongoose from "mongoose";

const VolunteerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
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
    profession: {
      type: String,
      required: [true, "Profession is required"],
      trim: true,
    },
    areaOfInterest: {
      type: String,
      required: [true, "Please select an area of interest"],
      enum: [
        "Select an opportunity...", 
        "Community Outreach", 
        "Legal Assistance", 
        "Education Programs"
      ],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      maxlength: [1500, "Message cannot exceed 1500 characters"],
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

export default mongoose.models.Volunteer || mongoose.model("Volunteer", VolunteerSchema);