const getAccessToken = async () => {
  const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
  const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

  // Validate environment variables
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
    // Log warning in development, but return null gracefully
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "⚠️ Missing required environment variables: SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET"
      );
      console.warn(
        "💡 Set these in your .env.local file or Vercel dashboard to enable podcasts"
      );
    }
    return null; // Return null instead of throwing error
  }

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString(
          "base64"
        ),
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "Unknown error");
    throw new Error(
      `Failed to get Spotify access token: ${response.status} ${response.statusText} - ${errorText}`
    );
  }

  const data = await response.json();

  if (!data.access_token) {
    throw new Error("Spotify API did not return an access token");
  }

  return data.access_token;
};

export const getShowDetails = async (showId) => {
  try {
    const token = await getAccessToken();

    // If no token (missing env vars), return null gracefully
    if (!token) {
      return null;
    }

    const response = await fetch(`https://api.spotify.com/v1/shows/${showId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown error");
      throw new Error(
        `Failed to fetch show details: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    return response.json();
  } catch (error) {
    // Log API errors (but not missing env var errors, which are handled above)
    console.error("Spotify API Error:", error.message);
    return null; // Return null instead of throwing to allow graceful handling
  }
};
