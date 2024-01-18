// Checkbox.js
import React from 'react';

function Checkbox({ isChecked,name , onChange, label }: any) {
  return (
    <div className="flex items-center">
      <input
      name  = {name}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="form-checkbox h-5 w-5 text-green-600"
      />
      <label htmlFor="comments" className="ml-2 block text-sm text-gray-900">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
