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

export async function DELETE(request) {
  initializeDb();
  const id  = await request.nextUrl.searchParams.get('id'); // Get id from URL parameter
  await Inventory.findByIdAndDelete(id)
  return NextResponse.json({ msg: 'Todo Deleted' }, { status: 200 })
}

export async function PUT(request) {
  initializeDb();
  
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');
  const {  title, stocks, price, category } = await request.json();
  

  let newData = {};
  if (title) {
    newData.title = title;
  }
  if (stocks) {
    newData.stocks = stocks;
  }
  if (price) {
    newData.price = price;
  }
  if (category) {
    newData.category = category;
  }

  await Inventory.findByIdAndUpdate(id, newData, { new: true });
  
  return NextResponse.json({ msg: 'Inventory Updated' }, { status: 200 });
}
