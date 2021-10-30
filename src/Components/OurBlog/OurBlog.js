import { Link } from "react-router-dom";
import "./OurBlog.css";

const OurBlog = () => {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src="https://i.ibb.co/fxDMYVf/blog-post-1-m.jpg"
              class="card-img-top"
              alt="..."
            />
          </div>
        </div>{" "}
        <div class="col">
          <div class="card">
            <img
              src="https://i.ibb.co/fnvBw1s/blog-post-5-m.jpg"
              class="card-img-top"
              alt="..."
            />
          </div>
        </div>{" "}
        <div class="col">
          <div class="card">
            <img
              src="https://i.ibb.co/kKnmTNy/blog-post-6-m-550x550.jpg"
              class="card-img-top"
              alt="..."
            />
          </div>
        </div>{" "}
        <div class="col">
          <div class="card">
            <img
              src="https://i.ibb.co/BgzgBFP/blog-post-7-m.jpg"
              class="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://i.ibb.co/6FGm3Dz/blog-post-4-m-550x550.jpg"
              class="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://i.ibb.co/WtwvL2h/blog-post-3-m-550x550.jpg"
              class="card-img-top"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div>
        <Link to="/blog">
          <button className="button mt-5 mb-3" title="Our Blogs">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurBlog;
