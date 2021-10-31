import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import AdminPanel from "../Admin/AdminPanel";
import Header from "../Header/Header";

const ManageOrder = () => {
  const [number, setNumber] = useState(0);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://arcane-fjord-23873.herokuapp.com/booking")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [number]);
  return (
    <>
      <Header></Header>
      <div className="container py-5">
        <div className="col-lg-12 col-md-12 rounded border-warning border col-sm-10 table-responsive shadow-lg p-5">
          <table class="table table-hover table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Where to</th>
                <th scope="col">Destination</th>
                <th scope="col">Country</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {userData?.map((user) => (
                <AdminPanel
                  key={user._id}
                  user={user}
                  setNumber={setNumber}
                ></AdminPanel>
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
