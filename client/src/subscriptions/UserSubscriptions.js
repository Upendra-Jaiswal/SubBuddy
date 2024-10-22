// src/pages/UserSubscriptions.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserSubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserSubscriptions = async () => {
      try {
        const token = localStorage.getItem('token');
        const backendUrl = process.env.REACT_APP_BACKEND_URL;
        const response = await axios.get(`${backendUrl}/api/user-subscriptions`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSubscriptions(response.data);
      } catch (err) {
        setError('Failed to fetch user subscriptions');
      }
    };

    fetchUserSubscriptions();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {subscriptions.length === 0 ? (
        <p>You have not subscribed to any services yet.</p>
      ) : (
        <div>
          <h2>Your Subscribed Services</h2>
          <ul>
            {subscriptions.map(subscription => (
              <li key={subscription._id}>{subscription.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserSubscriptions;
