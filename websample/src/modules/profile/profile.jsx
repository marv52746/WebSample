import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const userInfo = useSelector((state) => state.user.userInfo);
  const authState = useSelector((state) => state.user.authState);

  if (!authState) {
    return <div>Please log in to see your profile.</div>;
  }

  return (
    <div style={profileStyle}>
      <h2>User Profile</h2>
      <img src={userInfo.picture} alt={userInfo.name} style={imageStyle} />
      <h3>{userInfo.name}</h3>
      <p>
        <strong>Email:</strong> {userInfo.email}
      </p>
      <p>
        <strong>Given Name:</strong> {userInfo.given_name}
      </p>
      <p>
        <strong>Family Name:</strong> {userInfo.family_name}
      </p>
    </div>
  );
}

// Simple styles for the profile
const profileStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  maxWidth: "400px",
  margin: "auto",
  backgroundColor: "#f9f9f9",
};

const imageStyle = {
  borderRadius: "50%",
  width: "100px",
  height: "100px",
  marginBottom: "15px",
};

export default Profile;
