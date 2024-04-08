import { initializeDb } from "@/app/database/Connection";
import { NextResponse } from "next/server";

export async function GET(request) {
  initializeDb();
  return NextResponse.json({"he":"e"})
}

export async function POST(request) {
  initializeDb();
  console.log('i am at post');
}
