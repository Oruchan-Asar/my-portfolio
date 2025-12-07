import { NextResponse } from "next/server";
import { fetchBookmarks } from "@/utils/bookmarks";

export async function GET() {
  try {
    const bookmarks = await fetchBookmarks();
    return NextResponse.json(bookmarks);
  } catch (error) {
    // Log error for debugging (visible in Vercel function logs)
    console.error("Bookmarks API Error:", error.message);

    // Return appropriate error response
    const statusCode = error.message.includes(
      "Missing required environment variables"
    )
      ? 503
      : 500;

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
