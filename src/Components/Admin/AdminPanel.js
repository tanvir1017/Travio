import React from "react";

const AdminPanel = (props) => {
  const setNumber = props.setNumber;
  console.log(props.user);
  const { firstName, email, WhereTo, destination, date, _id, country, status } =
    props.user;
  const handleDelete = (id) => {
    const proccessed = window.confirm("Are really wants to delete");
    if (proccessed) {
      const url = `http://localhost:5000/booking/${id}`;
      fetch(url, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("delete successful");
            /* const remaining = userData.filter((userId) => userId._id !== id);
               setUserData(remaining); */
            setNumber((prev) => prev + 1);
          }
        });
    }
  };
  const handelApproved = (e) => {
    const checked = e.target.checked;
    console.log(checked);
    fetch("https://arcane-fjord-23873.herokuapp.com/booking", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ _id, checked }),
    });
    setNumber((prev) => prev + 1);
  };
  return (
    <tr>
      <td>{firstName}</td>
      <td>{email}</td>
      <td>{WhereTo}</td>
      <td>{destination}</td>
      <td>{country}</td>
      <td>{date}</td>
      <td>{status ? "Approved" : "Pending..."} </td>
      <td>
        {" "}
        <input
          onChange={handelApproved}
          class="form-check-input ms-1"
          type="checkbox"
        />
      </td>
      <td>
        <button
          className="btn btn-warning deleteBtn"
          onClick={() => handleDelete(_id)}
        >
          <i class="fas fa-user-minus"></i>
        </button>
      </td>
    </tr>
  );
};

export default AdminPanel;
