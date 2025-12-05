"use client";

import Image from "next/image";
import blog1 from "@/img/about-1.jpg";
import blog2 from "@/img/about-1.jpg";
import blog3 from "@/img/about-1.jpg";
import blog4 from "@/img/about-1.jpg";

export default function Blog() {
  const blogPosts = [
    {
      img: blog1,
      title: "How to Save Energy at Home",
      snippet: "Learn effective ways to reduce your electricity bills and conserve energy in your home...",
    },
    {
      img: blog2,
      title: "Commercial Electrical Safety Tips",
      snippet: "Ensure your commercial building is safe with these essential electrical safety tips...",
    },
    {
      img: blog3,
      title: "Industrial Electrical Planning",
      snippet: "Planning electrical layouts for factories and warehouses is crucial for safety and efficiency...",
    },
    {
      img: blog4,
      title: "The Future of Renewable Energy",
      snippet: "Discover the latest trends in renewable energy and how it can benefit businesses and homes...",
    },
  ];

  return (
    <div className="container-fluid blog py-5">
      <div className="container py-5">
        <div
          className="d-flex flex-column mx-auto text-center mb-5"
          style={{ maxWidth: 800 }}
        >
          <h4 className="text-primary">Our Blog</h4>
          <h1 className="display-4 mb-4">Latest Articles & Insights</h1>
          <p className="mb-0">
            Explore our latest blog posts on energy, electrical safety, and technology trends.
          </p>
        </div>

        <div className="row g-4">
          {blogPosts.map((post, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="blog-card border rounded shadow-sm overflow-hidden">
                <Image
                  src={post.img}
                  alt={post.title}
                  className="img-fluid w-100"
                  width={400}
                  height={250}
                />
                <div className="p-4">
                  <h5 className="mb-3">{post.title}</h5>
                  <p className="mb-3">{post.snippet}</p>
                 <a className="btn btn-primary py-2 px-4">
  Read More
</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
