import React from 'react';

const Notifications = () => {
  return (
    <div className="p-4 bg-gray-200">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Notifications</h1>
       
      </div>

      <p className="text-gray-700 mb-4">There are no notifications.</p>

      <div className="bg-white p-4 rounded-md shadow-md min-h-[300px] mb-6">
        {/* Table or list of employee records would go here */}
      </div>

      {/* <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-300">
          Create New
        </button>
        <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-300">
          Assign
        </button>
        <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-300">
          Manage and Assign Destinations
        </button>
      </div> */}
    </div>
  );
};

export default Notifications;