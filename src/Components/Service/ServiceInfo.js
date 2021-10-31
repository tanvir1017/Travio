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
  console.log(user);
  const { register, handleSubmit, reset } = useForm();
  const [service, setService] = useState({});
  const img = service.img;
  const onSubmit = (data) => {
    axios
      .post("https://arcane-fjord-23873.herokuapp.com/booking", { data, img })
      .then((res) => {
        if (res.data.insertedId) {
          alert("Booked");
          reset();
        }
      });
  };
  const { id } = useParams();
  console.log(service);
  useEffect(() => {
    fetch(`https://arcane-fjord-23873.herokuapp.com/travel/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        console.log(data);
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
                <div className="card mb-3" style={{ maxWidth: "740px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={service.img}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{service.title}</h5>
                        <h3>Discover {service.place}</h3>
                        <div className="text-muted">
                          <i className="fas fa-user me-2 text-warning"></i>
                          {service.age} age
                          {""}
                        </div>
                        <div className="text-muted">
                          <i className="fas fa-calendar-alt text-warning me-2"></i>
                          {service.days}days & {service.night} night
                          {""}
                        </div>{" "}
                        <div className="text-muted">
                          <i className="fas fa-location-arrow text-warning me-2"></i>
                          {service.place}
                          {""}
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3" style={{ maxWidth: "740px" }}>
                  <div className="row g-0">
                    <div className="col-md-12">
                      <div className="card-body">
                        <p className="card-text text-start text-muted">
                          {service.description}
                        </p>
                        <hr />
                        <p>
                          <span className="text-muted fw-bold">
                            Departure :
                          </span>{" "}
                          {service.Departure}
                        </p>
                        <hr />
                        <p>
                          <span className="text-muted fw-bold">Included :</span>{" "}
                          {service.Included}
                        </p>
                        <hr />

                        <p>
                          <span className="text-muted fw-bold">Time :</span>{" "}
                          {service.time}
                        </p>
                        <hr />
                        <p>
                          <span className="text-muted fw-bold">
                            ReturnTime :
                          </span>{" "}
                          {service.ReturnTime}
                        </p>
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
                defaultValue={service.place}
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
              <i className="fas fa-arrow-left"></i>
            </button>
          </HashLink>
          <Link to="/manage_orders">
            <button
              title="/manage_orders"
              className="shadow-lg btn border px-5 rounded"
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceInfo;
