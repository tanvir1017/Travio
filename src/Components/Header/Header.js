import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="heder-banner-background">
        <Navbar></Navbar>
        <div className="heading-tag text-white fw-bold">
          <div className="heading-title ">
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
    </>
  );
};

export default Header;
