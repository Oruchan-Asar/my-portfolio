import Card from "@/components/Card";
import getMediumPosts from "@/utils/medium";

export default async function Blogs() {
  const blogs = await getMediumPosts();

  return (
    <div className="flex justify-center w-full min-h-screen p-6">
      <div className="w-full max-w-7xl my-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="break-inside-avoid w-full bg-white shadow-lg desktop:max-w-sm laptop:max-w-lg h-fit hover:scale-105 transition-all duration-300 ease-out"
            >
              <Card
                image={blog.image}
                title={blog.title}
                desc={blog.desc}
                link={blog.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
