import React from 'react';

export default ({ onClick, children, width="w-1/2" }) => (
  <button
    className={`bg-green-600 mt-4 ${width} text-white text-center p-4 mx-auto font-semibold
    hover:border-solid
    hover:border-2
    hover:border-green-600
    hover:text-black
    hover:bg-transparent`}
    tabIndex="-1"
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);
