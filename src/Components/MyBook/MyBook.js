import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import AddToCart from "../AddToCart/AddToCart";
import "../AddToCart/AddToCart.css";
import Header from "../Header/Header";

const MyBook = () => {
  const [number, setNumber] = useState(0);
  const [users, setUsers] = useState([]);
  const { user } = useAuth();

  const email = {
    email: user.email,
  };
  useEffect(() => {
    fetch("https://arcane-fjord-23873.herokuapp.com/booking/email", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [number]);
  return (
    <div>
      <Header></Header>
      <div className="AddToCart my-5">
        {users?.map((user) => (
          <AddToCart
            user={user}
            key={user._id}
            setNumber={setNumber}
          ></AddToCart>
        ))}
      </div>
    </div>
  );
};

export default MyBook;
