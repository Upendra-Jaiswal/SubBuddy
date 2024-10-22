// src/pages/SubscriptionDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SubscriptionDetails = () => {
  const { id } = useParams(); // Fetch the subscription ID from the route
  const [subscription, setSubscription] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const backendUrl = process.env.REACT_APP_BACKEND_URL;
        const response = await axios.get(`${backendUrl}/api/subscriptions/${id}`);
        setSubscription(response.data);
      } catch (err) {
        setError('Error fetching subscription');
      }
    };

    fetchSubscription();
  }, [id]);

  return (
    <div>
      {error && <p>{error}</p>}
      {subscription ? (
        <div>
          <h2>{subscription.name}</h2>
          <h3>Users sharing this subscription:</h3>
          <ul>
            {subscription.usersSharing.length === 0 ? (
              <li>No users are sharing this subscription yet.</li>
            ) : (
              subscription.usersSharing.map(user => <li key={user._id}>{user.name}</li>)
            )}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SubscriptionDetails;
