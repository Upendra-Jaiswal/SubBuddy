import React from "react";

const SubscriptionSelect = ({
  serviceName,
  options,
  onChange,
  selectedSubscriptionId,
}) => (
  <div>
    <label
      htmlFor="subscription"
      className="block text-gray-700 font-medium mb-1"
    >
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
{/* 
    <label htmlFor="subscription-dropdown">Select a Subscription:</label>
    <select
      id="subscription-dropdown"
      value={selectedSubscriptionId}
      onChange={(e) => setSelectedSubscriptionId(e.target.value)}
    >
      <option value="">--Select Subscription--</option>
      {subscriptions.map((subscription) => (
        <option key={subscription._id} value={subscription._id}>
          {subscription.name}
        </option>
      ))}
    </select> */}
  </div>
);

export default SubscriptionSelect;
