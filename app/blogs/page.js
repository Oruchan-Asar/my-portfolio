import Card from "@/components/Card";
import getMediumPosts from "@/utils/medium";

export default async function Blogs() {
  const blogs = await getMediumPosts();

  return (
    <div className="flex justify-center w-full min-h-screen p-6">
      <div className="w-full my-12 max-w-7xl">
        <div className="flex flex-col items-center gap-6 space-y-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="w-full max-w-[900px] bg-white break-inside-avoid h-fit border-b border-gray-200"
            >
              <Card
                image={blog.image}
                title={blog.title}
                desc={blog.desc}
                link={blog.link}
                published={blog.published}
                categories={blog.categories}
                className="gap-6 tablet:flex laptop:max-w-full desktop:max-w-full desktop:max-h-56"
                imageClassName="max- p-4 m-auto border-b-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
