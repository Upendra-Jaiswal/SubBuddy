// src/components/SubscriptionCard.js
import React from 'react';

const SubscriptionCard = ({ subscription }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-2">{subscription.name}</h3>
      <p className="text-gray-700">{subscription.description}</p>
    </div>
  );
};

export default SubscriptionCard;
