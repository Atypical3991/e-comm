import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  firstname: string;
  lastname: string;
  mobile: string; // store as full string with country code (e.g. "+1 5551234567")
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema<IUser> = new Schema<IUser>(
  {
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    mobile: { type: String, required: true, unique: true, trim: true }, // enforce uniqueness for mobile too
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },
  },
  { timestamps: true } // auto add createdAt & updatedAt
);

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
