import React from "react";

const BlogCard2 = (props) => {
  const { img, date, destination, whereTo, place } = props.blogs;
  return (
    <div className="col">
      <div className="card h-100">
        <img
          className="img-fluid "
          src={img}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="card-title">{place}</h5>
            </div>
            <div>
              <small className="text-black clock">
                <i className="fas text-dark fa-clock"></i> {date}
              </small>
            </div>
          </div>
          <small className="d-flex justify-content-between">
            <span className="text-muted">
              <i className="fas text-warning fa-street-view"></i> {whereTo}
            </span>
            <span className="text-muted">
              <i className="fas text-warning fa-plane-departure me-1"></i>{" "}
              {destination}
            </span>
            {/* <i className="fas fa-clock me-1"></i> {date} */}
          </small>
        </div>
      </div>
    </div>
  );
};

export default BlogCard2;
