"use client"; // Ensure this line is present

import React, { useState } from 'react';
import axios from 'axios';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    owner: '',
    lawFirm: '',
    attorney: '',
    status: ''
  });
  const [results, setResults] = useState<any[]>([]);
  const [status, setStatus] = useState(''); // e.g., "Searching", "No Results Found", "Error Occurred"

  // Dummy data function
  const getDummyData = () => [
    { title: 'Nike Inc.', description: 'Trademark for Nike sportswear.' },
    { title: 'Adidas', description: 'Trademark for Adidas series.' },
    { title: 'Ferrari', description: 'Trademark for the Ferrari Swoosh logo.' }
  ];

  const handleSearch = async () => {
    setStatus('Searching');
    try {
      // Simulate API response with dummy data
      const dummyResponse = getDummyData();
      if (dummyResponse.length === 0) {
        setStatus('No Results Found');
      } else {
        setResults(dummyResponse);
        setStatus('');
      }
    } catch (error) {
      console.error('API request failed:', error); // Log the error for debugging
      setStatus('Error Occurred');
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-col mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search term"
          className="p-2 border border-gray-300 rounded-md mb-2"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded-md">Search</button>
        {/* Add filter inputs */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Owner"
            onChange={(e) => setFilters({ ...filters, owner: e.target.value })}
            className="p-2 border border-gray-300 rounded-md mb-2"
          />
          <input
            type="text"
            placeholder="Law Firm"
            onChange={(e) => setFilters({ ...filters, lawFirm: e.target.value })}
            className="p-2 border border-gray-300 rounded-md mb-2"
          />
          <input
            type="text"
            placeholder="Attorney"
            onChange={(e) => setFilters({ ...filters, attorney: e.target.value })}
            className="p-2 border border-gray-300 rounded-md mb-2"
          />
          <input
            type="text"
            placeholder="Status"
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="p-2 border border-gray-300 rounded-md mb-2"
          />
        </div>
      </div>
      {status && <div>{status}</div>}
      <div>
        {results.map((result, index) => (
          <div key={index} className="border p-4 mb-2 rounded-md">
            {/* Display result details */}
            <h2 className="text-xl font-bold">{result.title}</h2>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
