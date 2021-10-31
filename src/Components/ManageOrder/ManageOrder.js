import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import Header from "../Header/Header";
import "../Header/Header.css";
import "./MangeOrder.css";

const ManageOrder = () => {
  const [userData, setUserData] = useState([]);
  console.log(userData);
  useEffect(() => {
    fetch("https://arcane-fjord-23873.herokuapp.com/booking")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);
  const handleDelete = (id) => {
    const proccessed = window.confirm("Are really wants to delete");
    if (proccessed) {
      const url = `https://arcane-fjord-23873.herokuapp.com/booking/${id}`;
      fetch(url, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("delete successful");
            const remaining = userData.filter((userId) => userId._id !== id);
            setUserData(remaining);
          }
        });
    }
  };
  return (
    <>
      <Header></Header>
      <div className="container my-4 ">
        <h2>User Found : {userData?.length}</h2>
        <div className="col-lg-12 col-md-11 col-sm-10">
          <table class="table  table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Age</th>
                <th scope="col">Status</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {userData?.map((user) => (
                <tr>
                  <td>{user.firstName}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>porccessing</td>
                  <td>
                    <button
                      className="btn btn-warning deleteBtn"
                      onClick={() => handleDelete(user._id)}
                    >
                      <i class="fas fa-user-minus"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-center mt-3 mb-2">
        <HashLink
          to="/home#cardCol"
          className="shadow-lg btn deleteBtn border px-5 rounded"
        >
          <i class="fas fa-arrow-left"></i>
        </HashLink>
      </div>
    </>
  );
};

export default ManageOrder;