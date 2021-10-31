import React from "react";
import "./Exotic.css";

const Exotic = () => {
  return (
    <div className="my-5">
      <div className="row exotic">
        <div className="col-md-8 col-lg-8 " style={{ padding: "0 !important" }}>
          <div>
            <img src="https://i.ibb.co/6PJSWmH/Screenshot-1.png" alt="" />
            <div className="row mt-3">
              <div className="col-md-6 col-lg-6">
                <img src="https://i.ibb.co/FnwSBSQ/Screensho1t.png" alt="" />
              </div>
              <div className="col-md-6 col-lg-6">
                <img src="https://i.ibb.co/c85sJQZ/2-Screenshot.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-4">
          <img
            src="https://i.ibb.co/K5Fgbvg/christoph-schulz-7tb-b37y-Hx4-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
      <button className="button mt-3">See More</button>
    </div>
  );
};

export default Exotic;
