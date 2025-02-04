import { NextResponse } from "next/server";

const RAINDROP_TOKEN = process.env.RAINDROP_ACCESS_TOKEN;
const COLLECTION_ID = process.env.RAINDROP_COLLECTION_ID;

async function fetchBookmarks() {
  const response = await fetch(
    `https://api.raindrop.io/rest/v1/raindrops/${COLLECTION_ID}`,
    {
      headers: {
        Authorization: `Bearer ${RAINDROP_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch bookmarks");
  }

  const data = await response.json();
  return data.items;
}

export async function GET() {
  try {
    const bookmarks = await fetchBookmarks();
    return NextResponse.json(bookmarks);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch bookmarks" },
      { status: 500 }
    );
  }
}
