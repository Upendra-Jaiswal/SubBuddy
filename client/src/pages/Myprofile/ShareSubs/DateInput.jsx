import React from 'react';

const DateInput = ({ id, value, onChange, min }) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 font-medium mb-1">
      {id.replace('-', ' ').toUpperCase()}
    </label>
    <input
      type="date"
      id={id}
      value={value}
      onChange={onChange}
      min={min}
      className="w-full border border-gray-300 rounded-md p-2"
    />
  </div>
);

export default DateInput;
