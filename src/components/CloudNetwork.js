import React from 'react';

const CloudNetwork = (props) => {
  return (
      <div className="bg-gray-700 p-4 rounded mb-2">
        <input type="checkbox" className="mr-2" checked />
        <span>{props.title}</span>
        <span className="text-red-500 float-right">{props.status}</span>
      </div>
  );
};

export default CloudNetwork;
