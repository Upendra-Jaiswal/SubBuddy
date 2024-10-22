// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ShareSubscription = () => {
//   const [subscriptions, setSubscriptions] = useState([]);
//   const [selectedSubscriptionId, setSelectedSubscriptionId] = useState("");
//   const backendUrl = process.env.REACT_APP_BACKEND_URL;
//   const token = localStorage.getItem("token");
//   // Fetch subscriptions from the backend
//   useEffect(() => {
//     const fetchSubscriptions = async () => {
//       try {
//         const response = await axios.get(`${backendUrl}/api/subscriptions`);

//         // const response = await axios.get(
//         //   "https://www.localhost:3001/api/subscriptions"
//         // ); // Adjust the endpoint accordingly
//         setSubscriptions(response.data);
//       } catch (error) {
//         console.error("Error fetching subscriptions:", error);
//       }
//     };

//     fetchSubscriptions();
//   }, []);

//   // Handle sharing the selected subscription
//   const handleShare = async () => {
//     if (!selectedSubscriptionId) {
//       alert("Please select a subscription to share.");
//       return;
//     }

//     // try {
//     //   const response = await axios.post(
//     //     `${backendUrl}/api/sharesubscription`,
//     //     {
//     //       subscriptionId: selectedSubscriptionId,
//     //     },
//     //     {
//     //       headers: {
//     //         Authorization: `Bearer ${token}`, // Include the token in the headers
//     //       },
//     //     }
//     //   );

//     //   alert(response.data.message); // Show success message
//     //   setSelectedSubscriptionId(""); // Reset selection
//     // } catch (error) {
//     //   console.error("Error sharing subscription:", error);
//     //   alert("Failed to share subscription.");
//     // }

//     const subscriptionId = {
//       selectedSubscriptionId,
//     };
//     console.log("Data being sent to backend:", subscriptionId);
//     try {
//       const response = await fetch(
//         // `${process.env.REACT_APP_BACKEND_URL}/api/sharesub`,
//         `${process.env.REACT_APP_BACKEND_URL}/api/sharesubscription`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(subscriptionId),
//         }
//       );

//       if (response.ok) {
//         console.log(response);
//         const data = await response.json(); // Parse the JSON response
//         console.log(data)
//         //  alert(data.message);
//         // alert(`Response from backend: ${JSON.stringify(data.body)}`);
//       //  console.log(`Response from backend: ${JSON.stringify(data.body)}`);
//       } else {
//         console.log("Error");
//       }
//     } catch (error) {
//       console.error("Failed to submit subscription", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Share a Subscription</h1>
//       <label htmlFor="subscription-dropdown">Select a Subscription:</label>
//       <select
//         id="subscription-dropdown"
//         value={selectedSubscriptionId}
//         onChange={(e) => setSelectedSubscriptionId(e.target.value)}
//       >
//         <option value="">--Select Subscription--</option>
//         {subscriptions.map((subscription) => (
//           <option key={subscription._id} value={subscription._id}>
//             {subscription.name}
//           </option>
//         ))}
//       </select>

//       <button
//         onClick={handleShare}
//         className="bg-green-400 p-2 m-2 rounded-xl shadow-2xl"
//       >
//         Share My Subscription
//       </button>
//       <span>{selectedSubscriptionId}</span>
//     </div>
//   );
// };

// export default ShareSubscription;
import React, { useEffect, useState } from "react";
import axios from "axios";

const ShareSubscription = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [selectedSubscriptionId, setSelectedSubscriptionId] = useState("");
  const [loading, setLoading] = useState(true); // To show loading spinner or message
  const [errorMessage, setErrorMessage] = useState("");
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const token = localStorage.getItem("token");

  // Fetch subscriptions from the backend
  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/subscriptions`);
        setSubscriptions(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
        setErrorMessage("Failed to load subscriptions.");
        setLoading(false);
      }
    };
    fetchSubscriptions();
  }, [backendUrl]);

  // Handle sharing the selected subscription
  const handleShare = async () => {
    if (!selectedSubscriptionId) {
      alert("Please select a subscription to share.");
      return;
    }

    const subscriptionId = {
      selectedSubscriptionId,
    };
    console.log("Data being sent to backend:", subscriptionId);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/sharesubscription`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(subscriptionId),
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert(data.message); // Show success message
        setSelectedSubscriptionId(""); // Reset selection
      } else {
        alert("Failed to share subscription.");
      }
    } catch (error) {
      console.error("Failed to submit subscription", error);
      alert("Failed to share subscription.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Share a Subscription
        </h1>

        {loading ? (
          <p className="text-center">Loading subscriptions...</p>
        ) : errorMessage ? (
          <p className="text-red-500 text-center">{errorMessage}</p>
        ) : subscriptions.length === 0 ? (
          <p className="text-center">No subscriptions available.</p>
        ) : (
          <>
            <label
              htmlFor="subscription-dropdown"
              className="block mb-2 font-medium"
            >
              Select a Subscription:
            </label>
            <select
              id="subscription-dropdown"
              value={selectedSubscriptionId}
              onChange={(e) => setSelectedSubscriptionId(e.target.value)}
              className="block w-full p-2 mb-4 border rounded-lg bg-gray-50"
            >
              <option value="">--Select Subscription--</option>
              {subscriptions.map((subscription) => (
                <option key={subscription._id} value={subscription._id}>
                  {subscription.name}
                </option>
              ))}
            </select>

            <button
              onClick={handleShare}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              Share My Subscription
            </button>
          </>
        )}

        {selectedSubscriptionId && (
          <div className="mt-4 text-sm text-gray-500">
            Selected Subscription ID: {selectedSubscriptionId}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShareSubscription;
