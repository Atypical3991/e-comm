// app/api/cart/route.ts
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Cart from "../models/Cart";
import dbConnect from "../lib/dbConnect";
import { authOptions } from "../auth/[...nextauth]/route"; // ✅ import from here

export async function POST(req: Request) {
  await dbConnect();
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { productId } = await req.json();
  const userId = session.user?.id || session.user?.email; // depends on your setup

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = await Cart.create({
      userId,
      items: [{ productId, quantity: 1 }],
    });
  } else {
    console.log("ProductID:", productId);
    console.log("Cart found:", cart);
    const item = cart.items.find((i) => i.productId == productId);
    if (item) {
      item.quantity += 1;
    } else {
      cart.items.push({ productId, quantity: 1 });
    }
    await cart.save();
  }

  return NextResponse.json(cart);
}
