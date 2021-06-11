import React from 'react';

export default ({ onClick, children, width="w-1/2" }) => (
  <button
    className={`bg-white mt-4 ${width} border-solid border-gray-700 border-2 text-gray-700 text-left p-4 mx-auto font-semibold
    hover:border-solid
    hover:border-2
    hover:border-green-600
    hover:text-white
    hover:bg-green-600`}
    tabIndex="-1"
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);
