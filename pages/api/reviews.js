import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = "portfolio";

export default async function handler(req, res) {
  if (!uri) {
    return res.status(500).json({ error: "MONGODB_URI not set" });
  }
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);

  if (req.method === "GET") {
    const reviews = await db
      .collection("reviews")
      .find({})
      .sort({ _id: -1 })
      .toArray();
    client.close();
    return res.status(200).json({ reviews });
  } else if (req.method === "POST") {
    const { name, company, rating, message } = req.body;
    const review = {
      name,
      company,
      rating,
      message,
      date: new Date().toISOString(),
    };
    await db.collection("reviews").insertOne(review);
    client.close();
    return res.status(201).json({ success: true, review });
  } else {
    client.close();
    return res.status(405).json({ error: "Method not allowed" });
  }
}
