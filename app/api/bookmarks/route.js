import { NextResponse } from "next/server";

const RAINDROP_TOKEN = process.env.RAINDROP_ACCESS_TOKEN;
const COLLECTION_ID = process.env.RAINDROP_COLLECTION_ID;

async function fetchBookmarks() {
  // Validate environment variables at runtime
  if (!RAINDROP_TOKEN || !COLLECTION_ID) {
    throw new Error(
      "Missing required environment variables: RAINDROP_ACCESS_TOKEN or RAINDROP_COLLECTION_ID"
    );
  }

  const response = await fetch(
    `https://api.raindrop.io/rest/v1/raindrops/${COLLECTION_ID}`,
    {
      headers: {
        Authorization: `Bearer ${RAINDROP_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    const errorText = await response.text().catch(() => "Unknown error");
    throw new Error(
      `Failed to fetch bookmarks: ${response.status} ${response.statusText} - ${errorText}`
    );
  }

  const data = await response.json();
  return data.items;
}

export async function GET() {
  try {
    const bookmarks = await fetchBookmarks();
    return NextResponse.json(bookmarks);
  } catch (error) {
    // Log error for debugging (visible in Vercel function logs)
    console.error("Bookmarks API Error:", error.message);

    // Return appropriate error response
    const statusCode =
      error.message.includes("Missing required environment variables") ? 503 : 500;

    return NextResponse.json(
      {
        error: "Failed to fetch bookmarks",
        message:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Please check server configuration",
      },
      { status: statusCode }
    );
  }
}
