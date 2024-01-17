import React from 'react'

function Checkbox({toggleCheckboxChange, label, isChecked}: any) {
  return (

    <div className="flex items-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={toggleCheckboxChange}
        className="form-checkbox h-5 w-5 text-green-600"
      />
      <label htmlFor="comments" className="ml-2 block text-sm text-gray-900">
        {label}
      </label>
    </div>

    )
}

export default Checkbox