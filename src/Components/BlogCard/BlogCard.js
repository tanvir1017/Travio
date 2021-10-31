import React from "react";

const BlogCard = (porps) => {
  const { img, date, destination, whereTo, place, description } = porps.blogs;
  return (
    <div class="col">
      <div class="card">
        <img className="img-fluid " src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <h5 class="card-title">{place}</h5>
            </div>
            <div>
              <small class="text-black clock">
                <i className="fas text-dark fa-clock"></i> {date}
              </small>
            </div>
          </div>
          <small className="d-flex justify-content-between">
            <span className="text-muted">
              <i class="fas text-warning fa-street-view"></i> {whereTo}
            </span>
            <span className="text-muted">
              <i class="fas text-warning fa-plane-departure me-1"></i>{" "}
              {destination}
            </span>
            {/* <i class="fas fa-clock me-1"></i> {date} */}
          </small>
          <div className="mt-3 text-justify">
            <small>{description}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;