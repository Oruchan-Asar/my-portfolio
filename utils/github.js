const GITHUB_USERNAME = "Oruchan-Asar";

// Account-creation test repos, tutorial follow-alongs, and the superseded old
// portfolio — not real projects, so we skip them even though everything else
// is pulled live.
const EXCLUDED_REPOS = new Set([
  "hello",
  "oruchanasar",
  "Vuejs-Bootcamp",
  "nLayeredDemo",
  "Personal-Website",
  "my-portfolio",
]);

const ACRONYMS = { ml: "ML", qr: "QR", ui: "UI", ux: "UX", api: "API" };

function humanize(name) {
  return name
    .split(/[-_]/)
    .filter(Boolean)
    .map((word) => {
      const lower = word.toLowerCase();
      if (ACRONYMS[lower]) return ACRONYMS[lower];
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

async function getGithubProjects() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch GitHub repos: ${response.status}`);
      return [];
    }

    const repos = await response.json();

    return repos
      .filter(
        (repo) =>
          !repo.fork && !repo.archived && !EXCLUDED_REPOS.has(repo.name)
      )
      .sort((a, b) => {
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        return new Date(b.pushed_at) - new Date(a.pushed_at);
      })
      .slice(0, 12)
      .map((repo) => ({
        name: repo.name,
        displayName: humanize(repo.name),
        description: repo.description || `A ${repo.language || ""} project.`,
        language: repo.language,
        homepage: repo.homepage,
        url: repo.html_url,
        stars: repo.stargazers_count,
        updatedAt: repo.pushed_at,
      }));
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    return [];
  }
}

export default getGithubProjects;
