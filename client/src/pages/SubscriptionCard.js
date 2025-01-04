// src/components/SubscriptionCard.js
import React from "react";
import imgcommunity from "./multinational-crowd-people-standing-together-flat-illustration-portrait-cartoon-diverse-young-old-men-women-kids_74855-14122.jpg";
const SubscriptionCard = ({ subscription }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-2">{subscription.name}</h3>
      <p className="text-gray-700">{subscription.description}</p>
    
      <img src={imgcommunity} alt="mul" />
    </div>
  );
};

export default SubscriptionCard;
