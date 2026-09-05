import Card from "@/components/Card";
import getMediumPosts from "@/utils/medium";

export default async function Blogs() {
  const blogs = await getMediumPosts();

  return (
    <div className="flex justify-center w-full min-h-screen p-6">
      <div className="w-full my-12 max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 laptop:grid-cols-3">
          {blogs.map((blog, index) => (
            <Card
              key={index}
              image={blog.image}
              title={blog.title}
              desc={blog.desc}
              link={blog.link}
              published={blog.published}
              categories={blog.categories}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
