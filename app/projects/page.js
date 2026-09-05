import ProjectCard from "@/components/ProjectCard";
import getGithubProjects from "@/utils/github";

export default async function Projects() {
  const projects = await getGithubProjects();

  if (!projects || projects.length === 0) {
    return (
      <div className="flex justify-center w-full min-h-screen p-6">
        <div className="w-full my-12 max-w-7xl">
          <p className="text-stone-500 dark:text-stone-400">
            Currently unable to load projects. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full min-h-screen p-6">
      <div className="flex flex-col w-full gap-8 my-12 max-w-7xl">
        <p className="max-w-2xl text-stone-500 dark:text-stone-400">
          A live look at what I&apos;ve been building, pulled straight from{" "}
          <a
            href="https://github.com/Oruchan-Asar"
            target="_blank"
            className="underline text-clay-600 dark:text-clay-400"
          >
            GitHub
          </a>
          .
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 laptop:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
