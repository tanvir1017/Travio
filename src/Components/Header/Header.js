import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navBar-color fixed">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          <img src="https://i.ibb.co/4WHk98C/Logo-Makr-77iqbf.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon navbar-menu">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            {user.displayName && (
              <li className="nav-item">
                <Link className="nav-link" to="/manage_orders">
                  Manage Orders
                </Link>
              </li>
            )}
            {user.displayName && (
              <li className="nav-item">
                <Link className="nav-link" to="/mybook">
                  My Book
                </Link>
              </li>
            )}
            {user.displayName && (
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
            )}
            <li className="nav-item">
              <span className="nav-link">{user.displayName}</span>
            </li>
            <li className="nav-item">
              <img
                src={user.photoURL}
                className="rounded-circle img-fluid"
                style={{ width: "50px", marginRight: "10px" }}
                alt=""
              />
            </li>
            {user.displayName ? (
              <button onClick={logout} className="LogOut-btn">
                Log out <i className="fas fa-sign-out-alt"></i>
              </button>
            ) : (
              <button onClick={logout} className="LogOut-btn">
                Log in <i className="fas fa-sign-in-alt"></i>
              </button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
