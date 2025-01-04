// src/pages/AllSubscriptions.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllSubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const backendUrl = process.env.REACT_APP_BACKEND_URL;
        const response = await axios.get(`${backendUrl}/api/subscriptions`);
        setSubscriptions(response.data);
      } catch (err) {
        setError('Failed to fetch subscriptions');
      }
    };

    fetchSubscriptions();
  }, []);

  return (
    <div>
      {/* {error && <p>{error}</p>}
      <div className="subscription-list">
        {subscriptions.map(subscription => (
          <div key={subscription._id}>
            <h2>{subscription.name}</h2>
            <Link to={`/subscriptions/${subscription._id}`}>View Users Sharing</Link>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default AllSubscriptions;
