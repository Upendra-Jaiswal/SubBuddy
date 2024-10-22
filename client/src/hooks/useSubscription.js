// src/hooks/useSubscription.js
import { useState, useEffect } from "react";
import axios from "axios";

const useSubscription = (subscriptionId) => {
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const backendUrl = process.env.REACT_APP_BACKEND_URL;
        const response = await axios.get(
          `${backendUrl}/api/subscriptions/${subscriptionId}`
        );
        setSubscription(response.data);
      } catch (err) {
        setError("Error fetching subscription");
      } finally {
        setLoading(false);
      }
    };

    if (subscriptionId) {
      fetchSubscription();
    }
  }, [subscriptionId]);

  return { subscription, loading, error };
};

export default useSubscription;
