import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../Hooks/useAuth";
import "./ServiceInfo.css";

const ServiceInfo = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/booking", data).then((res) => {
      console.log(res);
    });
  };
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/travel/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [id]);
  return (
    <>
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
                        <p class="card-text text-center">
                          {service.description}
                        </p>
                        <p class="card-text">
                          <small class="text-muted">
                            Last updated 3 mins ago
                          </small>
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
                {...register("firstName")}
                placeholder="First name"
                defaultValue={user.displayName}
              />
              <input
                {...register("email")}
                placeholder="email"
                defaultValue={user.email}
              />
              <input {...register("description")} placeholder="description" />
              <input
                type="number"
                {...register("age", { min: 16, max: 70 })}
                placeholder="age must be 16+"
              />
              <input {...register("img")} placeholder="img-url" />
              <input type="submit" />
            </form>
          </div>
        </div>

        {/* home route */}
        <div className="text-center my-5">
          <HashLink to="/home#cardCol">
            <button className="shadow-lg btn border px-5 rounded">
              <i class="fas fa-arrow-left"></i>
            </button>
          </HashLink>
        </div>
      </div>
    </>
  );
};

export default ServiceInfo;
