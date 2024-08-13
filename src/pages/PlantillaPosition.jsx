import React from 'react';

const PlantillaPosition = () => {
  return (
    <div className="p-4 bg-gray-200">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Manage Plantilla Positions</h1>
        <div className="flex flex-col sm:flex-row">
          <input
            type="text"
            placeholder="Search Position Title, Parenthical, or Plantilla ID ..."
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 sm:mb-0"
          />
          <button className="bg-white p-2 rounded-r-md border border-gray-300 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      <p className="text-gray-700 mb-4">There are 0 Records in total as of this date.</p>

      <div className="bg-white p-4 rounded-md shadow-md min-h-[300px] mb-6">
        {/* Table or list of employee records would go here */}
      </div>

      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-300">
          Create New
        </button>
        <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-300">
          View History
        </button>
      </div>
    </div>
  );
};

export default PlantillaPosition;