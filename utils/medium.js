async function getMediumPosts() {
  try {
    const MEDIUM_USERNAME = "oruchan.asar";
    const RSS_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;

    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${RSS_URL}`,
      { next: { revalidate: 3600 } } // Revalidate cache every hour
    );

    const data = await response.json();

    if (data.status === "ok") {
      console.log("data", data.items);
      const posts = data.items.map((item) => {
        // Extract the first image from the content if available
        let imageMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
        let extractedImage = imageMatch ? imageMatch[1] : null;

        // Some Medium images might be served from CDN - ensure we get full resolution
        if (extractedImage && extractedImage.includes("medium.com")) {
          extractedImage = extractedImage.replace(/max\/\d+/, "max/1024");
        }

        return {
          title: item.title,
          desc:
            item.description.replace(/<[^>]*>/g, "").substring(0, 200) + "...", // Strip HTML and limit description
          link: item.link,
          image: extractedImage || item.thumbnail,
          published: item.pubDate,
          categories: item.categories,
        };
      });

      return posts;
    }

    return [];
  } catch (error) {
    console.error("Error fetching Medium posts:", error);
    return [];
  }
}

export default getMediumPosts;
