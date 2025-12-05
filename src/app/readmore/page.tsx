"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

// Sample blog data (replace with API or DB later)
const blogPosts = [
  {
    id: "1",
    title: "How to Save Energy at Home",
    author: "John Doe",
    date: "December 4, 2025",
    img: "/img/blog-1.jpg",
    content: `
      <p>Saving energy at home is essential for reducing bills and protecting the environment.</p>
      <p>Start by using LED lights, energy-efficient appliances, and smart meters...</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, repellat!</p>
    `,
  },
  {
    id: "2",
    title: "Commercial Electrical Safety Tips",
    author: "Jane Smith",
    date: "December 1, 2025",
    img: "/img/blog-2.jpg",
    content: `
      <p>Commercial buildings need proper electrical planning to ensure safety.</p>
      <p>Check wiring regularly, use certified electricians, and install safety devices...</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, repellat!</p>
    `,
  },
];

export default function BlogReadMore() {
  const params = useParams();
  const blog = blogPosts.find((b) => b.id === params.id);

  if (!blog) {
    return <p className="text-center mt-5">Blog post not found.</p>;
  }

  return (
    <div className="container py-5">
      <div className="mx-auto" style={{ maxWidth: "800px" }}>
        <h1 className="display-4 mb-3">{blog.title}</h1>
        <p className="text-muted mb-4">
          By {blog.author} | {blog.date}
        </p>

        <Image
          src={blog.img}
          alt={blog.title}
          className="img-fluid mb-4 rounded"
          width={800}
          height={400}
        />

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <a className="btn btn-primary mt-4" href="/blog">
          ← Back to Blog
        </a>
      </div>
    </div>
  );
}
