import React from "react";
import "./AddToCart.css";

const AddToCart = (props) => {
  const {
    firstName,
    email,
    status,
    _id,
    img,
    destination,
    date,
    WhereTo,
    country,
  } = props.user;
  const setNumber = props.setNumber;
  const handleDelete = (id) => {
    const proccessed = window.confirm("Are really wants to delete");
    if (proccessed) {
      const url = `https://arcane-fjord-23873.herokuapp.com/booking/${id}`;
      fetch(url, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("delete successful");
            setNumber((prev) => prev + 1);
          }
        });
    }
  };
  return (
    <div className="container">
      <div className="row g-0 custom-card p-3">
        <div className="col-4">
          <img src={img} alt="" />
        </div>
        <div className="col-7">
          <div className="detail-info">
            <p className="fs-5 fw-bold text-muted">{country}</p>
            <p className="text-size text-muted">
              <span className="text-muted">
                <i className="fas text-warning fa-address-card text-custom"></i>{" "}
                {status ? "Approved" : "Panding..."}
              </span>
              <span className="text-dark ms-5">
                {" "}
                <i className="fas fa-clock text-warning me-2"></i>
                {date}
              </span>
            </p>
            <div className="d-md-flex">
              <p className="me-4 text-muted text-size">
                <i className="fas text-warning fa-street-view"></i> {WhereTo}
              </p>
              <p className="text-muted text-size">
                <i class="fas text-warning fa-plane-departure text-custom text-size"></i>{" "}
                {destination}
              </p>
            </div>
            <p className="me-4 text-muted text-size">
              <i class="fas fa-user text-custom text-warning text-size"></i>{" "}
              {firstName}
            </p>
            <p className="text-muted text-size">
              <i class="fas fa-envelope text-custom text-size"></i> {email}
            </p>
          </div>
        </div>
        <div className="col-1">
          <button
            className="alert alert-warning"
            onClick={() => handleDelete(_id)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
