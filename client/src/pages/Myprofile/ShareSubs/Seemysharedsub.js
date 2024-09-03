

import { useState, useEffect } from "react";
import axios from "axios";

const SharedSubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/seemysharedsubs`
        );
        setSubscriptions(response.data);
      } catch (err) {
        setError("Failed to fetch subscriptions");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        All Shared Subscriptions
      </h2>
      <ul className="space-y-4">
        {subscriptions.length > 0 ? (
          subscriptions.map((subscription) => (
            <li
              key={subscription._id}
              className="p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50"
            >
              <p className="text-gray-700 mb-2">
                <strong className="font-medium">Service Name:</strong>{" "}
                {subscription.serviceName}
              </p>
              <p className="text-gray-700 mb-2">
                <strong className="font-medium">Plan:</strong>{" "}
                {subscription.plans}
              </p>
              <p className="text-gray-700 mb-2">
                <strong className="font-medium">Start Date:</strong>{" "}
                {new Date(subscription.startDate).toLocaleDateString()}
              </p>
              <p className="text-gray-700">
                <strong className="font-medium">End Date:</strong>{" "}
                {new Date(subscription.endDate).toLocaleDateString()}
              </p>
            </li>
          ))
        ) : (
          <p className="text-gray-600">No subscriptions found.</p>
        )}
      </ul>
    </div>
  );
};

export default SharedSubscriptions;
