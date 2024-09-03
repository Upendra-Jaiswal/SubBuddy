import React from 'react';

const PlanSelect = ({ selectedPlan, plans, onChange }) => (
  <div>
    <label htmlFor="plan" className="block text-gray-700 font-medium mb-1">
      Select your plan
    </label>
    <select
      id="plan"
      className="w-full border border-gray-300 rounded-md p-2"
      value={selectedPlan}
      onChange={onChange}
    >
      <option value="">-- Select a plan --</option>
      {plans.map((plan) => (
        <option key={plan.name} value={plan.name}>
          {plan.name}
        </option>
      ))}
    </select>
  </div>
);

export default PlanSelect;
