import { initializeDb } from "@/app/database/Connection";
import Inventory from "@/app/database/models";
import { NextResponse } from "next/server";

export async function GET(request) {
  initializeDb();
  const searchParams = request.nextUrl.searchParams;
  const productTitle = searchParams.get('title');
  const productCategory = searchParams.get('category');
  
  try {
    let query = {};

    if (productCategory) {
      query = { title: { $regex: productTitle, $options: 'i' }, category: productCategory };
    } else {
      query = { title: { $regex: productTitle, $options: 'i' } };
    }

    const results = await Inventory.find(query);

    // Return the results as JSON
    return NextResponse.json(results);
  } catch (error) {
    console.error("Error fetching data from database:", error);
    // Return an error response
    return NextResponse.error(new Error("Failed to fetch data from database"));
  }  
}