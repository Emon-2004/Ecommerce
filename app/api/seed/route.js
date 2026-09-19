import connectDB from "@/lib/db";

import product from "@/models/product";

export async function GET() {
    await connectDB();
    const products = await product.find();
    await product.deleteMany();

    await product.insertMany(
        [
            {
                title: "Blue Sneakers",
                description: "Comfortable and stylish blue sneakers for everyday wear.",
                price: 59.99,
                category: "Footwear",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Red T-Shirt",
                description: "A vibrant red t-shirt made from soft cotton.",
                price: 19.99,
                category: "Apparel",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Wireless Headphones",
                description: "High-quality wireless headphones with noise cancellation.",
                price: 129.99,
                category: "Electronics",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Smart Watch",
                description: "Modern smartwatch with fitness tracking and notifications.",
                price: 89.99,
                category: "Electronics",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Leather Backpack",
                description: "Durable leather backpack suitable for school and travel.",
                price: 74.99,
                category: "Bags",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Classic Jeans",
                description: "Comfortable blue denim jeans with a classic fit.",
                price: 44.99,
                category: "Apparel",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Running Shoes",
                description: "Lightweight running shoes designed for daily workouts.",
                price: 69.99,
                category: "Footwear",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Coffee Mug",
                description: "Ceramic coffee mug perfect for hot drinks.",
                price: 12.99,
                category: "Home",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Mechanical Keyboard",
                description: "Responsive mechanical keyboard designed for gaming and typing.",
                price: 79.99,
                category: "Electronics",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Gaming Mouse",
                description: "Ergonomic gaming mouse with adjustable DPI settings.",
                price: 39.99,
                category: "Electronics",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Cotton Hoodie",
                description: "Warm and comfortable cotton hoodie for casual wear.",
                price: 34.99,
                category: "Apparel",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Sunglasses",
                description: "Stylish sunglasses with UV protection for sunny days.",
                price: 24.99,
                category: "Accessories",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Desk Lamp",
                description: "Adjustable LED desk lamp suitable for studying and working.",
                price: 29.99,
                category: "Home",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Bluetooth Speaker",
                description: "Portable Bluetooth speaker with clear and powerful sound.",
                price: 49.99,
                category: "Electronics",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Sports Cap",
                description: "Lightweight sports cap with breathable fabric.",
                price: 15.99,
                category: "Accessories",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Travel Water Bottle",
                description: "Reusable stainless steel water bottle for travel and fitness.",
                price: 22.99,
                category: "Sports",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Yoga Mat",
                description: "Soft and non-slip yoga mat for exercise and stretching.",
                price: 27.99,
                category: "Sports",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Office Chair",
                description: "Ergonomic office chair with comfortable back support.",
                price: 149.99,
                category: "Furniture",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Table Clock",
                description: "Simple digital table clock with a clear display.",
                price: 18.99,
                category: "Home",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Notebook",
                description: "Premium ruled notebook for writing notes and ideas.",
                price: 8.99,
                category: "Stationery",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Ballpoint Pen Set",
                description: "Set of smooth-writing ballpoint pens for everyday use.",
                price: 6.99,
                category: "Stationery",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Laptop Stand",
                description: "Adjustable aluminum laptop stand for a comfortable workspace.",
                price: 35.99,
                category: "Accessories",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "USB-C Cable",
                description: "Durable fast-charging USB-C cable for modern devices.",
                price: 11.99,
                category: "Electronics",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Power Bank",
                description: "Portable power bank with high-capacity battery backup.",
                price: 32.99,
                category: "Electronics",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Casual Sandals",
                description: "Comfortable sandals designed for casual everyday use.",
                price: 25.99,
                category: "Footwear",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Formal Shirt",
                description: "Elegant formal shirt suitable for office and special occasions.",
                price: 39.99,
                category: "Apparel",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Winter Jacket",
                description: "Warm winter jacket designed to protect against cold weather.",
                price: 99.99,
                category: "Apparel",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Travel Suitcase",
                description: "Spacious and durable suitcase with smooth rolling wheels.",
                price: 119.99,
                category: "Bags",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Wallet",
                description: "Compact leather wallet with multiple card and cash compartments.",
                price: 21.99,
                category: "Accessories",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Table Fan",
                description: "Compact electric table fan with multiple speed settings.",
                price: 42.99,
                category: "Home Appliances",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Electric Kettle",
                description: "Fast-boiling electric kettle with automatic shut-off.",
                price: 36.99,
                category: "Home Appliances",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Backpack",
                description: "Lightweight everyday backpack with multiple storage compartments.",
                price: 29.99,
                category: "Bags",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Football",
                description: "Durable football suitable for outdoor games and practice.",
                price: 26.99,
                category: "Sports",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Basketball",
                description: "High-quality basketball designed for indoor and outdoor courts.",
                price: 31.99,
                category: "Sports",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Desk Organizer",
                description: "Compact desk organizer for keeping stationery and accessories tidy.",
                price: 14.99,
                category: "Stationery",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Wireless Charger",
                description: "Convenient wireless charging pad for compatible smartphones.",
                price: 28.99,
                category: "Electronics",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Smartphone Tripod",
                description: "Adjustable tripod stand for photos, videos, and online meetings.",
                price: 23.99,
                category: "Accessories",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "LED Strip Lights",
                description: "Colorful LED strip lights for decorating bedrooms and workspaces.",
                price: 19.99,
                category: "Home",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Bluetooth Earbuds",
                description: "Compact wireless earbuds with clear audio and a portable case.",
                price: 54.99,
                category: "Electronics",
                image: "https://picsum.photos/200/300"
            },
            {
                title: "Study Table",
                description: "Simple wooden study table with enough space for books and a laptop.",
                price: 109.99,
                category: "Furniture",
                image: "https://picsum.photos/200/300"
            }
        ]
    );

    return Response.json({ message: "Database seeded successfully" });
}