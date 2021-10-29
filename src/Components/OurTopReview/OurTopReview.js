import React from "react";
import "./OurTopReview.css";

const OurTopReview = () => {
  return (
    <div className="my-5">
      <div className="row g-0">
        <div className="col-md-6 col-lg-6">
          <img src="https://i.ibb.co/bWqx0hc/side-banner-pic.jpg" alt="" />
        </div>
        <div className="col-md-6 col-lg-6 right-side-banner">
          <div className="right-side-bannger-text">
            <h2 className="fw-bold mb-4">
              The Cheap Cost of <span className="text-warning">Travel</span>
            </h2>
            <p>
              Travelers on a budget are constantly and regretfully having to
              slash cities from their itineraries due to a sheer lack of funds.
              This is not the case in Thailand, however, where travel is cheap
              and different modes of transportation are readily available.
              Budget-friendly airlines, like Nok Air and AirAsia, always seem to
              be running some type of sale on flights, with direct flights
              available to international and domestic airports in cities across
              the country. Buses and trains around the country are incredibly
              affordable as well, with stations in both rural cities and some of
              the biggest tourist destinations in Thailand.
            </p>
            <p className="text-warning dare-to-explore">See more...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTopReview;
