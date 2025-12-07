import { getShowDetails } from "@/utils/spotify";

// Since this is a server component, we can make it async
export default async function Podcasts() {
  // Array of show IDs you want to display
  const showIds = [
    "2ySVrxGkN6n6frMTo9Nsrt",
    "3imVa0uYZnmgrqKHj3o8Sq",
    "6HCwhbKxFO9URWPrvf6vs0",
    "5gaAD2SPBy7XY9188rXufJ",
    "2MAi0BvDc6GTFvKFPXnkCL",
    "76h8fh9KK3boiMrQ340lV4",
  ];

  // Fetch all show details in parallel
  const shows = await Promise.all(
    showIds.map(async (id) => {
      try {
        const show = await getShowDetails(id);
        // Handle null response (missing env vars or API error)
        if (!show) {
          return null;
        }
        return {
          id,
          title: show.name,
          description: show.description,
          // Add any other fields you want from the API response
        };
      } catch (error) {
        console.error(`Error fetching show ${id}:`, error);
        return null;
      }
    })
  );

  // Filter out any null results from failed requests
  const validShows = shows.filter(Boolean);

  // Show message if no podcasts are available
  if (validShows.length === 0) {
    return (
      <div className="flex flex-col gap-8">
        <p className="text-slate-500 dark:text-neutral-400">
          Currently unable to load podcasts. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-between gap-6">
      {validShows.map(({ id, title }) => (
        <iframe
          key={id}
          style={{ borderRadius: "12px" }}
          src={`https://open.spotify.com/embed/show/${id}?utm_source=generator`}
          width="100%"
          height="352"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title={title}
        ></iframe>
      ))}
    </div>
  );
}
