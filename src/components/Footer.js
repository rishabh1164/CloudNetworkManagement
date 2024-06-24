import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-between p-4 bg-gray-900 text-white">
      <div>
        <button className="bg-gray-800 p-2 rounded">Select/Deselect All</button>
        <button className="bg-gray-800 p-2 rounded ml-2">Clear</button>
      </div>
      <button className="bg-green-500 p-2 rounded">Apply</button>
    </div>
  );
};

export default Footer;
