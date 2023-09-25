import Card from "@/components/Card";
import blogs from "@/mocks/blogs";

export default function Blogs() {
  return (
    <div className="flex justify-center w-full min-h-screen p-6">
      <div className="flex flex-wrap justify-between w-full gap-6 my-12 max-w-7xl">
        {blogs.map((blog, index) => (
          <Card
            key={index}
            image={blog.image}
            title={blog.title}
            desc={blog.desc}
            link={blog.link}
          />
        ))}
      </div>
    </div>
  );
}
