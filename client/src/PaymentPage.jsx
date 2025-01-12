import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);
  //   let { state } = useLocation();
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const location = useLocation();
  //const amount = location.state?.amount;

  const { amount, bookingDetails } = location.state || {};

  // Handle Payment Request
  const handlePayment = async () => {
    setLoading(true);

    const data = {
      name: "UJ", // Hardcoded or passed as a prop if needed
      amount: amount, // Coming from props
      number: 9691134534, // Can also be passed dynamically if needed
      MUID: "MUID" + Date.now(),
      transactionId: "T" + Date.now(),
      bookingDetails: bookingDetails,

    };

    console.log(data);

    await axios
      .post(`${backendUrl}/order`, { ...data })
      .then((res) => {
        if (res.data && res.data.data.instrumentResponse.redirectInfo.url) {
          window.location.href =
            res.data.data.instrumentResponse.redirectInfo.url;
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  // Trigger payment on component mount
  useEffect(() => {
    handlePayment();
  }, [amount]);

  return (
    <div className="flex items-center justify-center h-[600px] mx-20">
      {/* Display Loading or Success UI */}
      {loading ? (
        <p>Processing your payment...</p>
      ) : (
        <p>Your payment is being initiated...</p>
      )}
    </div>
  );
};

export default PaymentPage;
