import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";

export async function GET(request: Request, response: Response) {
  try {
    const client = await clientPromise;
    const db = client.db("sample_people");

    const people = await db
      .collection("people")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();
    return NextResponse.json(people);
  } catch (e) {
    console.error(e);
  }
}
