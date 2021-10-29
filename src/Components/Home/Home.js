import React, { useEffect, useState } from "react";
import LastMinuteOffer from "../LastMinuteOffer/LastMinuteOffer";
import "./Home.css";

const Home = () => {
  const [offers, setOffers] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/tour")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  return (
    <div className="container">
      <div className="row mt-3 py-3">
        <div className="col-md-5 col-lg-5 col-12 right-side-img">
          <img
            src="https://i.ibb.co/vmN4H5d/slider-header-banner-1.png"
            alt=""
          />
        </div>
        <div className="col-md-5 col-lg-5 col-12 left-side-text">
          <h2>A Simply Perfect Place To Get Lost</h2>
          <p>
            Treat yourself with a journey to your inner self. Visit a mystique
            Tibet and start your spiritual adventure. We promise, you’ll enjoy
            every step you make.
          </p>
          <button className="button">See More</button>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="mb-5 fw-bold">
          Last Minutes <span className="text-warning"> Offers</span>
        </h1>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          {offers?.map((offer) => (
            <LastMinuteOffer offer={offer}></LastMinuteOffer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
