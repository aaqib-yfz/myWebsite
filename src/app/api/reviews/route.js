import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = "portfolio"; // You can change this to your preferred DB name

async function connectDB() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  return { db, client };
}

export async function GET() {
  try {
    const { db, client } = await connectDB();
    const reviews = await db
      .collection("reviews")
      .find({})
      .sort({ _id: -1 })
      .toArray();
    client.close();
    return NextResponse.json({ reviews });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { db, client } = await connectDB();
    const body = await req.json();
    const review = {
      name: body.name,
      company: body.company,
      rating: body.rating,
      message: body.message,
      date: new Date().toISOString(),
    };
    await db.collection("reviews").insertOne(review);
    client.close();
    return NextResponse.json({ success: true, review });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
