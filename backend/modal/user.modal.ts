
import mongoose, { Document, Model, Schema } from "mongoose";


export type UserRole = "Recruiter" | "job seeker";


export interface IUser extends Document {
  Name: string;
  email: string;
  password: string;
  role: UserRole;
  imageUrl?: string;
  lastlogin: Date;
  isverified: boolean;
  resetpasswordToken?: string;
  resetpasswordExpiresAt?: Date;
  verificationToken?: string;
  verificationTokenExpiresAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}


const userSchema: Schema<IUser> = new Schema(
  {
    Name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters"],
      maxlength: [50, "Name must be less than 50 characters"],
      match: [/^[A-Za-z\s]+$/, "Name can only contain letters and spaces"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters"],
      match: [
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])/,
        "Password must include uppercase, lowercase, and a special character",
      ],
    },

    role: {
      type: String,
      enum: ["Recruiter", "job seeker"],
      default: "Recruiter",
    },

    imageUrl: {
      type: String,
    },

    lastlogin: {
      type: Date,
      default: Date.now,
    },

    isverified: {
      type: Boolean,
      default: false,
    },

    resetpasswordToken: {
      type: String,
    },

    resetpasswordExpiresAt: {
      type: Date,
    },

    verificationToken: {
      type: String,
    },

    verificationTokenExpiresAt: {
      type: Date,
    },
  },
  { timestamps: true }
);


const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;