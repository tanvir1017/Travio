import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <nav class="navbar navbar-expand-lg navBar-color fixed">
      <div class="container">
        <Link class="navbar-brand" to="/home">
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
          <span class="navbar-toggler-icon navbar-menu">
            <i class="fas fa-bars"></i>
          </span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/home">
                Home
              </Link>
            </li>
            {user.displayName && (
              <li class="nav-item">
                <Link class="nav-link" to="/manage_orders">
                  Manage Orders
                </Link>
              </li>
            )}
            {user.displayName && (
              <li class="nav-item">
                <Link class="nav-link" to="/mybook">
                  My Book
                </Link>
              </li>
            )}
            {user.displayName && (
              <li class="nav-item">
                <Link class="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
            )}
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
              <button onClick={logout} className="LogOut-btn">
                Log in <i class="fas fa-sign-in-alt"></i>
              </button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
