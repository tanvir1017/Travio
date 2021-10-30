import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useFirebase();
  console.log(user);
  return (
    <nav class="navbar navbar-expand-lg fixed ">
      <div class="container">
        <Link class="navbar-brand">
          <img src="https://i.ibb.co/4WHk98C/Logo-Makr-77iqbf.png" alt="" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/addAPlan">
                Add you plan
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li class="nav-item">
              <span class="nav-link">{user.displayName}</span>
            </li>
            <li class="nav-item">
              <img
                src={user.photoURL}
                className="rounded-circle img-fluid"
                style={{ width: "50px", marginRight: "10px" }}
                alt=""
              />
            </li>
            {user.displayName ? (
              <button onClick={logout} className="LogOut-btn">
                Log out <i class="fas fa-sign-out-alt"></i>
              </button>
            ) : (
              <li class="nav-item">
                <Link class="nav-link" to="/Login">
                  Login <i class="fas fa-sign-in-alt"></i>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
