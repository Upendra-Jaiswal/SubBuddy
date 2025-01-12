import React, { useState, useEffect } from "react";
import axios from "axios";

const BoughtSubscriptions = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const token = localStorage.getItem("token");

  const [boughtSubscriptions, setBoughtSubscriptions] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBoughtSubscriptions = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/getPaymentDetails`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response.data.paymentsMade);
        // Destructure paymentsReceived to find subscriptions bought
        const { paymentsMade } = response.data;

        // Filter out the subscriptions that the user bought (payments received)
        const bought = paymentsMade.map((payment) => ({
          subscription: payment.subscription,
          payerName: payment.payerName, // Name of person to whom they paid
        }));

        // console.log(bought);
        setBoughtSubscriptions(response.data.paymentsMade);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching subscription details:", err);
        setError("Failed to load subscriptions");
        setLoading(false);
      }
    };

    fetchBoughtSubscriptions();
  }, [backendUrl, token]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-red-500 font-semibold">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-700">
        My Subscriptions
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {boughtSubscriptions.length > 0 ? (
          boughtSubscriptions.map((subscription, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-teal-500 to-cyan-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <div className="flex items-center mb-4 space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center text-xl font-semibold text-teal-600">
                  {subscription.subscription.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">
                    {subscription.subscription.name}
                  </p>
                  <p className="text-sm text-teal-200">
                    Paid to:{" "}
                    <span className="text-white font-medium">
                      {subscription.receiverName}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-white">
                  ₹ {subscription.amount}
                </span>
                {/* <button className="bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-800 transition-all">
                  View Details
                </button> */}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-xl text-gray-500">
            You haven't bought any subscriptions yet.
          </div>
        )}
      </div>
    </div>
  );
};

//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-8">
//         Bought Subscriptions
//       </h1>

//       <div className="space-y-6">
//         {boughtSubscriptions.length > 0 ? (
//           boughtSubscriptions.map((subscription, index) => (
//             <div
//               key={index}
//               className="p-6 bg-white rounded-lg shadow-md flex justify-between items-center"
//             >
//               <div className="flex-1">
//                 <p className="text-lg font-semibold">
//                   {subscription.subscription.name}
//                 </p>
//                 <p className="text-gray-500">
//                   Paid to: {subscription.receiverName}
//                 </p>
//               </div>
//               <div className="ml-4">
//                 {/* <span className="text-xl text-blue-600">
//                   {subscription.subscription.price} $
//                 </span> */}
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-lg text-gray-500">
//             You haven't bought any subscriptions yet.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

export default BoughtSubscriptions;
