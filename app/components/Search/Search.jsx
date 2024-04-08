import React from 'react';

function Search() {
  return (
    <div className="container py-10 px-7 bg-slate-100">
      {/* Search Stocks by Category */}
      <div>
        <h2 className="text-xl font-bold mb-2">Search Stocks by Category</h2>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search by category"
            className="w-full md:w-2/2 py-2 px-4 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <select
            className="py-2 px-4 border border-gray-300 rounded-r focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="">All Categories</option>
            <option value="all">All</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Search;
