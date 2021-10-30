import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      This is blog
      <div className="text-center my-5">
        <Link to="/home">
          <button className="shadow-lg btn border px-5 rounded">
            <i class="fas fa-arrow-left"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
