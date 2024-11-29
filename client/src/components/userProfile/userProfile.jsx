import React from "react";
import "./userProfile.css";

const ProfileCard = (props) => {
  const handleLogout = () => {
    localStorage.clear();
    props.setIsAuthenticated(false);
  }

  const empid = localStorage.getItem('employee_id');
  const role = localStorage.getItem('role');

  return (
    <div className="card3">
      <h2>Hello...</h2>
      <h3>Employee ID - {empid}</h3>
      <h3>Role - {role}</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfileCard;