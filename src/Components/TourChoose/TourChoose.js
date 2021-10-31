import React from "react";
import "./TourChoose.css";

const TourChoose = () => {
  return (
    <div className="mt-5 chooseTour">
      <div className="row chooseTourimg">
        <h2>
          Choose Tour with <span className="fs-1 text-warning">50% OFF</span>
        </h2>
        <p className="text-white">
          Find your next travel adventure and make it memorable. Explore
          wildlife, enjoy seaside or book a cruise tour. Check out our popular
          destinations.
        </p>
        <div className="container row mt-3 row-cols-md-4 row-cols-lg-4 row-cols-sm-2">
          <div className="col">
            <h2>
              <i className="fas fa-2x fa-plane"></i>
            </h2>
            <h5 className="text-white mt-2">Self-Guided</h5>
          </div>
          <div className="col">
            <h2>
              <i className="fas fa-2x fa-mountain"></i>
            </h2>
            <h5 className="text-white mt-2">Adventure</h5>
          </div>
          <div className="col">
            <h2>
              <i className="fab fa-2x fa-fly"></i>
            </h2>
            <h5 className="text-white mt-2">Wildlife</h5>
          </div>
          <div className="col">
            <h2>
              <i className="fas fa-2x fa-umbrella-beach"></i>
            </h2>
            <h5 className="text-white mt-2">Beach</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourChoose;
