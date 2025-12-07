// Shared utility for fetching bookmarks
// Can be used by both API routes and server components

const RAINDROP_TOKEN = process.env.RAINDROP_ACCESS_TOKEN;
const COLLECTION_ID = process.env.RAINDROP_COLLECTION_ID;

export async function fetchBookmarks() {
  // Validate environment variables at runtime
  if (!RAINDROP_TOKEN || !COLLECTION_ID) {
    // Log warning in development, but return empty array gracefully
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "⚠️ Missing required environment variables: RAINDROP_ACCESS_TOKEN or RAINDROP_COLLECTION_ID"
      );
      console.warn(
        "💡 Set these in your .env.local file or Vercel dashboard to enable bookmarks"
      );
    }
    return []; // Return empty array instead of throwing error
  }

  const response = await fetch(
    `https://api.raindrop.io/rest/v1/raindrops/${COLLECTION_ID}`,
    {
      headers: {
        Authorization: `Bearer ${RAINDROP_TOKEN}`,
      },
      // Add revalidation for server component usage
      next: { revalidate: 3600 }, // Revalidate every hour
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
