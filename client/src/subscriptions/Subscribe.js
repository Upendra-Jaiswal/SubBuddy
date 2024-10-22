// src/pages/Subscribe.js
import React, { useState } from "react";
import axios from "axios";

const Subscribe = ({ subscriptionId }) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = async () => {
    try {
      const token = localStorage.getItem("token");
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      await axios.post(
        `${backendUrl}/api/subscribe`,
        { subscriptionId },
        {
          headers: {
            Authorization: `Bearer ${token}`, // JWT token in the header
          },
        }
      );
      setMessage("Subscribed successfully");
    } catch (err) {
      setError("Error subscribing to service");
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
      <button onClick={handleSubscribe}>Subscribe to Service</button>
    </div>
  );
};

export default Subscribe;
