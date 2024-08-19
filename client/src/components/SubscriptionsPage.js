// src/pages/SubscriptionsPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SubscriptionsPage = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const token = localStorage.getItem('token'); // Get JWT token from local storage
        const response = await axios.get('/api/subscriptions', {
          headers: {
            Authorization: `Bearer ${token}`, // Send JWT token in header
          },
        });
        setSubscriptions(response.data.subscriptions);
      } catch (err) {
        setError('Failed to fetch subscriptions');
      }
    };

    fetchSubscriptions();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Your Subscriptions</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="bg-white shadow-md rounded-lg p-4">
        <ul className="space-y-4">
          {subscriptions.length === 0 ? (
            <p className="text-gray-500">No subscriptions found.</p>
          ) : (
            subscriptions.map((subscription) => (
              <li
                key={subscription._id}
                className="bg-gray-100 p-4 rounded-md shadow-sm hover:bg-gray-200 transition"
              >
                <h2 className="text-xl font-semibold mb-2">{subscription.name}</h2>
                <p className="text-gray-700">{subscription.description}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default SubscriptionsPage;
