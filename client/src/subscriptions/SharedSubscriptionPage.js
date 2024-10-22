import React, { useEffect, useState } from "react";
import axios from "axios";

const SharedSubscriptionPage = () => {
  const [sharedSubscriptions, setSharedSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const token = localStorage.getItem("token"); // Assuming token is stored in localStorage

  useEffect(() => {
    const fetchSharedSubscriptions = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/getsharedsubscriptions`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setSharedSubscriptions(response.data.sharedSubscriptions);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching shared subscriptions:", err);
        setError("Failed to load shared subscriptions");
        setLoading(false);
      }
    };

    fetchSharedSubscriptions();
  }, [backendUrl, token]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-xl font-semibold">
            Loading shared subscriptions...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-red-500 text-xl font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Your Shared Subscriptions
        </h1>

        {sharedSubscriptions.length === 0 ? (
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <p className="text-gray-600">
              You have not shared any subscriptions yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {sharedSubscriptions.map((subscription) => (
              <div
                key={subscription._id}
                className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {subscription.serviceName}
                </h2>
               
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SharedSubscriptionPage;
