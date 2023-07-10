/* eslint-disable react/prop-types */

function FilterInput({ placeholder, value, onChange, onKeyDown }) {
  return (
    <input
      type="text"
      className="w-96 rounded py-2 pr-4 pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default FilterInput;
