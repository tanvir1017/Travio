import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MangeOrder.css";

const ManageOrder = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/booking")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);
  const handleDelete = (id) => {
    const url = `http://localhost:5000/booking/${id}`;
    fetch(url, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="container my-4 shadow-lg border p-3 rounded">
      <h2>Found data : {userData?.length}</h2>
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
                  onClick={() =>
                    handleDelete(userData?.map((user) => user._id))
                  }
                >
                  <i class="fas fa-user-minus"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* home route */}
      <div className="text-center mt-3 mb-0">
        <Link to="/home">
          <button className="shadow-lg btn deleteBtn border px-5 rounded">
            <i class="fas fa-arrow-left"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ManageOrder;
