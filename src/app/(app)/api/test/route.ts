import { NextResponse } from "next/server";

export async function GET() {
  console.log("Test API route hit");
  return NextResponse.json({ message: "Test route works" });
}

export async function POST() {
  console.log("Test API POST route hit");
  return NextResponse.json({ message: "Test POST route works" });
}