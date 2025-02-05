import Card from "@/components/Card";
import getMediumPosts from "@/utils/medium";

export default async function Blogs() {
  const blogs = await getMediumPosts();

  return (
    <div className="flex justify-center w-full min-h-screen p-6">
      <div className="w-full my-12 max-w-7xl">
        <div className="flex flex-col items-center gap-6 space-y-6 divide-y divide-gray-200 dark:divide-neutral-800">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="w-full max-w-[900px] break-inside-avoid h-fit"
            >
              <Card
                image={blog.image}
                title={blog.title}
                desc={blog.desc}
                link={blog.link}
                published={blog.published}
                categories={blog.categories}
                className="gap-6 tablet:flex laptop:max-w-full desktop:max-w-full desktop:max-h-56"
                imageClassName="m-auto border-b-0 max-h-42 tablet:max-h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
