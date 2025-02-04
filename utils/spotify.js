const getAccessToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString("base64"),
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
};

export const getShowDetails = async (showId) => {
  const token = await getAccessToken();

  const response = await fetch(`https://api.spotify.com/v1/shows/${showId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};
