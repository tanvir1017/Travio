import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../Hooks/useAuth";
import Header from "../Header/Header";
import "./ServiceInfo.css";

const ServiceInfo = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://arcane-fjord-23873.herokuapp.com/booking", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Booked");
          reset();
        }
      });
  };
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`https://arcane-fjord-23873.herokuapp.com/travel/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [id]);
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-7 col-lg-7 col-sm-12">
            <div className="row">
              <div className="col-12">
                <div class="card mb-3" style={{ maxWidth: "740px" }}>
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={service.img}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">{service.title}</h5>
                        <h3>Discover {service.place}</h3>
                        <div className="text-muted">
                          <i class="fas fa-user me-2 text-warning"></i>
                          {service.age} age
                          {""}
                        </div>
                        <div className="text-muted">
                          <i class="fas fa-calendar-alt text-warning me-2"></i>
                          {service.days}days & {service.night} night
                          {""}
                        </div>{" "}
                        <div className="text-muted">
                          <i class="fas fa-location-arrow text-warning me-2"></i>
                          {service.place}
                          {""}
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-3" style={{ maxWidth: "740px" }}>
                  <div class="row g-0">
                    <div class="col-md-12">
                      <div class="card-body">
                        <p class="card-text text-start">
                          {service.description}
                        </p>
                        <hr />
                        <p>
                          <span className="text-warning">Included :</span>{" "}
                          {service.Included}
                        </p>
                        <hr />
                        <p>
                          <span className="text-warning">Included :</span>{" "}
                          {service.Included}
                        </p>
                        <hr />
                        <p>
                          <span className="text-warning">Included :</span>{" "}
                          {service.Included}
                        </p>
                        <hr />
                        <p>
                          <span className="text-warning">Included :</span>{" "}
                          {service.Included}
                        </p>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* react hook form */}

          <div className="col-md-5 col-lg-5 col-sm-12 add-service">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="fName"
                {...register("firstName")}
                placeholder="First name"
                defaultValue={user.displayName}
                required
              />
              <input
                {...register("email")}
                placeholder="email"
                defaultValue={user.email}
                required
              />
              <input {...register("date")} placeholder="Date" required />

              <input
                type="text"
                {...register("WhereTo")}
                placeholder="Your Starting Point"
                required
              />
              <input
                type="text"
                {...register("destination")}
                placeholder="Choose Destination"
                required
              />
              <input
                type="text"
                {...register("country")}
                placeholder="Your Country"
                required
              />
              <input
                type="submit"
                value="Book Now"
                className="bookBtn"
                required
              />
            </form>
          </div>
        </div>

        {/* home route */}
        <div className="text-center my-5">
          <HashLink to="/home#blog">
            <button title="home" className="shadow-lg btn border px-5 rounded">
              <i class="fas fa-arrow-left"></i>
            </button>
          </HashLink>
          <Link to="/manage_orders">
            <button
              title="/manage_orders"
              className="shadow-lg btn border px-5 rounded"
            >
              <i class="fas fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceInfo;
