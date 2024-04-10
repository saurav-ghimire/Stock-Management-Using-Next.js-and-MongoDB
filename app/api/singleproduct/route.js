import { initializeDb } from "@/app/database/Connection";
import Inventory from "@/app/database/models";
import { NextResponse } from "next/server";

export async function GET(request) {
  initializeDb();
  const searchParams = request.nextUrl.searchParams;
  const productid = searchParams.get('id');
  const singleData = await Inventory.findById(productid).exec();
  return NextResponse.json(singleData, { status: 200 });
}