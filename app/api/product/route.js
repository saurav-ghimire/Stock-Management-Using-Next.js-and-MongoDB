import { initializeDb } from "@/app/database/Connection";
import Inventory from "@/app/database/models";
import { NextResponse } from "next/server";

export async function GET(request) {
  initializeDb();
  const data = await Inventory.find({});
  return NextResponse.json(data, { status: 200 });
}

export async function POST(request, response) {
  initializeDb();
  const {title, stocks, price, category} = await request.json();
  await Inventory.create({
    title,
    stocks,
    price,
    category
  })

  return NextResponse.json({ msg: 'Inventory Created' }, { status: 200 })
}
