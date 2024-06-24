import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between p-4 bg-gray-900 text-white">
      <div>
        <select className="bg-gray-800 p-2 rounded">
          <option>Account Type: All</option>
          {/* Add more options as needed */}
        </select>
        <select className="bg-gray-800 p-2 rounded ml-2">
          <option>Account: All</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <button className="bg-blue-500 p-2 rounded">View Secuirity Insights</button>
    </div>
  );
};

export default Header;
