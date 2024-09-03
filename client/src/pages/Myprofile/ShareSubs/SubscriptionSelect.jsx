import React from 'react';

const SubscriptionSelect = ({ serviceName, options, onChange }) => (
  <div>
    <label htmlFor="subscription" className="block text-gray-700 font-medium mb-1">
      Select your subscription
    </label>
    <select
      id="subscription"
      className="w-full border border-gray-300 rounded-md p-2"
      value={serviceName}
      onChange={onChange}
    >
      <option value="">-- Select an option --</option>
      {options}
    </select>
  </div>
);

export default SubscriptionSelect;
