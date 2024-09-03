import React from 'react';
import correctimage from "./depositphotos_12880120-stock-photo-green-check-mark.jpg";

const SubmissionSuccess = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
      <img
        src={correctimage}
        className="correct-image mx-auto mb-4"
        alt="Order Placed"
      />
      <p className="text-gray-800 text-lg mb-4">
        Your subscription has been shared!
      </p>
      <p className="text-gray-600 text-md">
        This feature is currently under development. Please stay tuned for
        updates!
      </p>
      <p className="text-gray-500 text-sm mt-4">
        Note: This is a dummy submission for development purposes.
      </p>
    </div>
  </div>
);

export default SubmissionSuccess;
