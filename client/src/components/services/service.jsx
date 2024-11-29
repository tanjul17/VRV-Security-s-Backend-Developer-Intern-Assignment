import React, { useState } from "react";
import "./service.css";
import axios from "axios";

const ServicesCard = () => {
  const [loading, setLoading] = useState({
    cctv: false,
    gdeployed: false,
    attendence: false,
    activeunits: false
  });

  const handleServiceClick = (serviceEndpoint) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Token not found. Please log in.");
      return;
    }

    // Set loading state for specific service
    setLoading(prev => ({ ...prev, [serviceEndpoint]: true }));

    axios
      .get(`http://localhost:3000/service/${serviceEndpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        console.error(`Error accessing ${serviceEndpoint}:`, error.response?.data || error.message);
        alert(`Error: ${error.response?.data?.message || "Failed to access the service."}`);
      })
      .finally(() => {
        // Reset loading state
        setLoading(prev => ({ ...prev, [serviceEndpoint]: false }));
      });
  };

  const services = [
    { endpoint: "cctv", label: "CCTV Surveillance" },
    { endpoint: "gdeployed", label: "Guards Deployment" },
    { endpoint: "attendence", label: "Attendance Records" },
    { endpoint: "activeunits", label: "Active Units" }
  ];

  return (
    <div className="card2">
      <h2>Services you can access:</h2>
      {services.map((service) => (
        <button 
          key={service.endpoint}
          onClick={() => handleServiceClick(service.endpoint)}
          disabled={loading[service.endpoint]}
        >
          {loading[service.endpoint] ? "Loading..." : service.label}
        </button>
      ))}
    </div>
  );
};

export default ServicesCard;