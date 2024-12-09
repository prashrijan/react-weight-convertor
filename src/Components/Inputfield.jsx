import React from "react";

const Inputfield = ({
  label,
  reference,
  handleChange,
  disable,
  selectRef,
  defaultSelect,
}) => {
  return (
    <div className="w-1/2 flex flex-col">
      <label htmlFor={label}>{label}</label>
      <input
        onChange={handleChange}
        ref={reference}
        type="number"
        id={label}
        disabled={disable === "true" ? true : false}
        className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <select
        ref={selectRef}
        defaultValue={defaultSelect}
        onChange={handleChange}
        id="weight"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
      >
        <option>Kilogram</option>
        <option>Gram</option>
        <option>Miligram</option>
        <option>Pound</option>
      </select>
    </div>
  );
};

export default Inputfield;
