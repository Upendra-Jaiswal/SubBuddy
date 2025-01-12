// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const PaymentDetails = () => {
//   const backendUrl = process.env.REACT_APP_BACKEND_URL;
//   const token = localStorage.getItem("token"); // Assuming token is stored in localStorage

//   // State to store payment details and loading/error state
//   const [paymentsMade, setPaymentsMade] = useState([]);
//   const [paymentsReceived, setPaymentsReceived] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPaymentDetails = async () => {
//       try {
//         const response = await axios.get(
//           `${backendUrl}/api/getPaymentDetails`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         // Destructure paymentsMade and paymentsReceived
//         const { paymentsMade, paymentsReceived } = response.data;

//         // Set state for payments
//         setPaymentsMade(paymentsMade);
//         setPaymentsReceived(paymentsReceived);

//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching payment details:", err);
//         setError("Failed to load payment details");
//         setLoading(false);
//       }
//     };

//     fetchPaymentDetails();
//   }, [backendUrl, token]);

//   return (
//     <>
//       hello payment details
//       <div>
//         <h2>Payments Made</h2>
//         {paymentsMade.length > 0 ? (
//           <ul>
//             {paymentsMade.map((payment, index) => (
//               <li key={index}>
//                 <p>Amount: {payment.amount}</p>
//                 <p>Receiver: {payment.receiverName}</p>
//                 <p>Status: {payment.status}</p>
//                 <p>Timestamp: {new Date(payment.timestamp).toLocaleString()}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No payments made yet.</p>
//         )}

//         <h2>Payments Received</h2>
//         {paymentsReceived.length > 0 ? (
//           <ul>
//             {paymentsReceived.map((payment, index) => (
//               <li key={index}>
//                 <p>Amount: {payment.amount}</p>
//                 <p>Payer: {payment.payerName}</p>
//                 <p>Status: {payment.status}</p>
//                 <p>Timestamp: {new Date(payment.timestamp).toLocaleString()}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No payments received yet.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default PaymentDetails;

import React, { useState, useEffect } from "react";
import axios from "axios";

const PaymentDetails = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const token = localStorage.getItem("token"); // Assuming token is stored in localStorage

  const [paymentsMade, setPaymentsMade] = useState([]);
  const [paymentsReceived, setPaymentsReceived] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/getPaymentDetails`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const { paymentsMade, paymentsReceived } = response.data;

        // Set state for payments
        setPaymentsMade(paymentsMade);
        console.log(paymentsMade, paymentsReceived);
        setPaymentsReceived(paymentsReceived);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching payment details:", err);
        setError("Failed to load payment details");
        setLoading(false);
      }
    };

    fetchPaymentDetails();
  }, [backendUrl, token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Payments Made</h2>
      {paymentsMade.length > 0 ? (
        <ul>
          {paymentsMade.map((payment, index) => (
            <li key={index}>
              <p>Amount: {payment.amount}</p>
              <p>Receiver: {payment.receiverName}</p>
              <p>Subscription: {payment.receiverName}</p>{" "}
              {/* Display subscription name */}
              <p>Price: {payment.subscription.price}</p>{" "}
              {/* Display subscription price */}
              <p>Status: {payment.status}</p>
              <p>Timestamp: {new Date(payment.timestamp).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No payments made yet.</p>
      )}

      <h2>Payments Received</h2>
      {paymentsReceived.length > 0 ? (
        <ul>
          {paymentsReceived.map((payment, index) => (
            <li key={index}>
              <p>Amount: {payment.amount}</p>
              <p>Payer: {payment.payerName}</p>
              <p>Subscription: {payment.subscription.name}</p>{" "}
              {/* Display subscription name */}
              <p>Price: {payment.subscription.price}</p>{" "}
              {/* Display subscription price */}
              <p>Status: {payment.status}</p>
              <p>Timestamp: {new Date(payment.timestamp).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No payments received yet.</p>
      )}
    </div>
  );
};

export default PaymentDetails;
