import React from 'react';

const PaymentSuccessPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Payment Successful!</h1>
        <p className="text-lg text-gray-700 mb-6">Your booking has been confirmed. Thank you for choosing our service!</p>

        <div className="bg-gray-50 p-4 rounded-md text-left mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">Booking Details</h3>
          <p className="text-gray-600"><strong>Booking ID:</strong> 12345ABC</p>
          <p className="text-gray-600"><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
          <p className="text-gray-600"><strong>Total Amount:</strong> ₹2000</p>
        </div>

        <button 
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
          onClick={() => window.location.href = '/'}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
