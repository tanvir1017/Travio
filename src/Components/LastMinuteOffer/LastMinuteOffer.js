import React from "react";
import "./LastMin.css";

const LastMinuteOffer = (props) => {
  const { place, title, price, img } = props.offer;
  return (
    <div className="cardCol">
      <div class="col">
        <div class="card">
          <img src={img} class="card-img-top" alt="..." />
        </div>
        <div className="addedBtn">
          <button className="btn btn-success">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default LastMinuteOffer;
