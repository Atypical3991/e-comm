// models/Cart.ts
import mongoose, { Schema, Document } from "mongoose";

interface ICart extends Document {
  userId: string;
  items: { productId: number; quantity: number }[];
}

const CartSchema = new Schema<ICart>(
  {
    userId: { type: String, required: true, unique: true },
    items: [
      {
        productId: { type: Number, required: true },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Cart ||
  mongoose.model<ICart>("Cart", CartSchema);
