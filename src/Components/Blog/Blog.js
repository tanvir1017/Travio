import axios from "axios";
import { React, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../Hooks/useAuth";
import BlogCard from "../BlogCard/BlogCard";
import Header from "../Header/Header";
import "../Header/Header.css";
import "./Blog.css";
const Blog = () => {
  const { user } = useAuth();
  const [blog, setBlog] = useState();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/blog", data).then((res) => {
      if (res.data.insertedId) {
        alert("Blog Added successFully");
        reset();
      }
    });
  };
  useEffect(() => {
    fetch("http://localhost:5000/blog")
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      });
  }, []);
  return (
    <>
      <Header></Header>
      <div className="container mt-3">
        <div className="row">
          <div
            className="col-md-8 col-lg-8"
            style={{ overflow: "scroll", height: "100vh" }}
          >
            <div class="row row-cols-1 row-cols-md-2 g-4">
              {blog?.map((blogs) => (
                <BlogCard key={blogs._id} blogs={blogs}></BlogCard>
              ))}
            </div>
          </div>
          <div className="col-md-4 col-lg-4 add-service">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
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
              <input
                type="text"
                {...register("place")}
                placeholder="Place Name"
                required
              />
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    {...register("whereTo")}
                    placeholder="Where to "
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    {...register("destination")}
                    placeholder="Choose Destination"
                    required
                  />
                </div>
              </div>
              <input type="date" {...register("date")} required />
              <input {...register("img")} placeholder="img-url" required />
              <textarea
                {...register("description")}
                placeholder="description"
                required
              />
              <input type="submit" value="Post" />
            </form>
          </div>
        </div>
        <div className="text-center my-5">
          <HashLink to="/home#blog">
            <button title="home" className="shadow-lg btn border px-5 rounded">
              <i class="fas fa-arrow-left"></i>
            </button>
          </HashLink>
        </div>
      </div>
    </>
  );
};

export default Blog;
