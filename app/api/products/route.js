import connectDB from "@/lib/db";
import product from "@/models/product";

export async function GET() {
    await connectDB();
    const products = await product.find();
    return Response.json(products)
} 