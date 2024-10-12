// src/Header.js
import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUser } from "../core/services/slices/userSlice";

import Notification from "../core/notifications/notification"; // Adjust the path as necessary
import { showNotification } from "../core/services/slices/notificationSlice";

const Header = () => {
  const authState = useSelector((state) => state.user.authState);
  const notification = useSelector((state) => state.notification.isVisible);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(
      showNotification({
        message: "Logout successfully!",
        type: "success",
      })
    );
  };

  return (
    <header style={headerStyle}>
      {notification && <Notification />}

      <Link to="/">
        <h1 style={({ margin: 0 }, linkStyle)}>My App</h1>
      </Link>
      <nav style={navStyle}>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
        {authState && (
          <>
            <Link to="/users" style={linkStyle}>
              User List
            </Link>
            <Link to="/profile" style={linkStyle}>
              Profile
            </Link>
            <Link to="/" style={linkStyle} onClick={handleLogout}>
              Logout
            </Link>
          </>
        )}

        {!authState && (
          <Link to="/signin" style={linkStyle}>
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

// Simple styling for the header and nav
const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  backgroundColor: "#f4f4f4",
  borderBottom: "1px solid #ccc",
};

const navStyle = {
  display: "flex",
  gap: "20px",
};

const linkStyle = {
  textDecoration: "none",
  color: "#333",
};

export default Header;
