import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard2 from "../BlogCard/BlogCard2";
import "./OurBlog.css";

const OurBlog = () => {
  const [blog, setBlog] = useState();
  useEffect(() => {
    fetch("https://arcane-fjord-23873.herokuapp.com/blog")
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      });
  }, [blog]);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12 col-lg-12">
          <div class="row row-cols-1 row-cols-md-3 g-3">
            {blog?.map((blogs) => (
              <BlogCard2 key={blogs._id} blogs={blogs}></BlogCard2>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Link to="/blog">
          <button className="button mt-5 mb-3" title="Our Blogs">
            See More <i class="fas fa-arrow-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurBlog;
