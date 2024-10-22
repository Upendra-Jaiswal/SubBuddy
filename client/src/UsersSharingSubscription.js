// src/pages/UsersSharingSubscription.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const UsersSharingSubscription = () => {
  const location = useLocation();
  const { subscriptionId } = location.state; // Get the subscriptionId from state
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const token = localStorage.getItem("token"); // Get JWT token from local storage
        const backendUrl = process.env.REACT_APP_BACKEND_URL;
        const response = await axios.get(
          `${backendUrl}/api/subscriptions/${subscriptionId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Send JWT token in header
            },
          }
        );
        setSubscription(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError("Failed to fetch subscription details.");
      }
    };

    fetchSubscription();
  }, [subscriptionId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">{subscription.name}</h1>
      <h2 className="text-xl mb-2 text-gray-600 ">Users Sharing This Subscription:</h2>
      {subscription.usersSharing.length === 0 ? (
        <p className="text-gray-500">No users are currently sharing this subscription.</p>
      ) : (
        <ul className="list-none">
          {subscription.usersSharing.map((user) => (
            <li key={user._id} className="mb-4 w-[500px]">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-gray-50">
                {/* User Name */}
                <div className="text-lg font-medium text-gray-800">{user.name}</div>

                {/* Pay and Chat buttons */}
                <div className="flex space-x-4">
                  <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out">
                    Pay
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out">
                    Chat
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersSharingSubscription;
