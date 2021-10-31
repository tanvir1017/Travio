import React from "react";
import { Link } from "react-router-dom";
import "./LastMin.css";

const LastMinuteOffer = (props) => {
  const { _id, title, price, img } = props.offer;
  return (
    <div className="cardCol">
      <div class="col">
        <div class="card">
          <img src={img} class="card-img-top" alt="..." />
        </div>
        <div className="addedBtn">
          <div className="text-start">
            <h2 className="fw-bold">{title}</h2>
            <strong>{price}</strong>
            <br />
            <Link to={`/serviceDetails/${_id}`}>
              <button className="btn btn-dark">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastMinuteOffer;
