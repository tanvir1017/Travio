import React, { useEffect, useState } from "react";
import DareToExplore from "../DareToExplore/DareToExplore";
import Exotic from "../Exotic/Exotic";
import "../Header/Header.css";
import LastMinuteOffer from "../LastMinuteOffer/LastMinuteOffer";
import Navbar from "../Navbar/Navbar";
import OurBlog from "../OurBlog/OurBlog";
import OurTopReview from "../OurTopReview/OurTopReview";
import TourChoose from "../TourChoose/TourChoose";
import "./Home.css";

const Home = () => {
  const [offers, setOffers] = useState();
  useEffect(() => {
    fetch("https://arcane-fjord-23873.herokuapp.com/travel")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  return (
    <>
      <div className="heder-banner-background">
        <Navbar></Navbar>
        <div className="heading-tag text-white fw-bold">
          <div className="heading-title text-center ">
            <h1>Your Journey Begins</h1>
            <p className="pb-4">
              "A journey of a 1000 miles starts with a single step. Import the
              full demo content with 1 click and create a head-turning website
              for your travel agency. "
            </p>
            <div className="heading-input bg-white p-4">
              <div className="input d-flex justify-content-center align-items-center">
                <input type="text" placeholder="Where to" />
                <select type="text">
                  <option value="january">When</option>
                  <option value="january">january</option>
                  <option value="january">january</option>
                  <option value="january">january</option>
                  <option value="january">january</option>
                  <option value="january">january</option>
                </select>
                <select type="text">
                  <option value="january">Travel Type</option>
                  <option value="january">Historical</option>
                  <option value="january">Deef Jungle</option>
                  <option value="january">january</option>
                  <option value="january">january</option>
                  <option value="january">january</option>
                </select>
                <button className="">Find Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        <div className="mt-4 text-center" id="cardCol">
          <h1 className="mb-5 fw-bold common-tag-style">
            Last Minutes <span className="text-warning"> Offers</span>
          </h1>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            {offers?.map((offer) => (
              <LastMinuteOffer offer={offer}></LastMinuteOffer>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h1 className="mb-5 fw-bold common-tag-style">
          Our<span className="text-warning"> Top Reviews</span>
        </h1>
        <OurTopReview></OurTopReview>
      </div>
      <div className="mt-4 text-center container">
        <h1 className="fw-bold common-tag-style">
          Go <span className="text-warning">Exotice place</span>
        </h1>
        <p className="exoticeP">
          When it comes to exploring exotic places, the choices are numerous.
          Whether you like peaceful destinations or vibrant landscapes, we have
          offers for you.
        </p>
        <Exotic></Exotic>
      </div>
      <div className="mt-4 text-center">
        <DareToExplore></DareToExplore>
      </div>

      <div className="my-4 text-center container" id="blog">
        <h1 className="fw-bold common-tag-style">
          Our <span className="text-warning">Blog </span>
        </h1>
        <p className="exoticeP mb-4">
          Make your dreams come true. Explore, Journey, Discover, Adventure.
          Making your heart want to return. Don'T Be A Tourist, Be A Traveler.
        </p>
        <OurBlog></OurBlog>
      </div>

      <div className="mt-4 text-center">
        <TourChoose></TourChoose>
      </div>
    </>
  );
};

export default Home;
