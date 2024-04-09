import { initializeDb } from "@/app/database/Connection";
import Inventory from "@/app/database/models";
import { NextResponse } from "next/server";

export async function GET(request) {
  initializeDb();
  return NextResponse.json({"he":"e"})
}

export async function POST(request, response) {
  initializeDb();
  const {title, stocks, price} = await request.json();
  await Inventory.create({
    title,
    stocks,
    price
  })
  return NextResponse.json({ msg: 'Inventory Created' }, { status: 200 })
}
