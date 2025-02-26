import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const UsersSharingSubscription = () => {
  const location = useLocation();
  const { subscriptionId } = location.state; // Get the subscriptionId from state
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [payerUserID, setPayerUserID] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const amount = 1000;

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
        // const payerUserID = localStorage.getItem("userID");
        setPayerUserID(localStorage.getItem("userID"));
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        {subscription.name}
      </h1>
      <h2 className="text-xl mb-2 text-gray-600">
        Users Sharing This Subscription:
      </h2>
      {subscription.usersSharing.length === 0 ? (
        <p className="text-gray-500">
          No users are currently sharing this subscription.
        </p>
      ) : (
        <ul className="list-none">
          {subscription.usersSharing.map((user) => (
            <li
              key={user._id}
              className="mb-4 w-full sm:w-[500px] bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:bg-gray-50"
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium text-gray-800">
                  {user.name}
                </div>
                <div className="flex space-x-4">
                  <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out">
                    {/* <Link to="/payment" state={{ amount }}> */}
                    <Link
                      to="/payment"
                      state={{
                        amount,
                        bookingDetails: {
                          // userID: user._id,
                          // userName: user.name,
                          receiverUserID: user._id,
                          payerUserID,
                          subscription,
                        },
                      }}
                    >
                      Pay
                    </Link>
                  </button>
                  {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out">
                    <Link to="/chat">Chat </Link>
                  </button> */}
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
