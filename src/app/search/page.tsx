import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../component/Header';
import Footer from '../../component/Footer';

interface SearchResults {
  // Define your result types based on the API response
  title: string;
  description: string;
}

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<SearchResults[]>([]);
  const [status, setStatus] = useState<string>('');

  const handleSearch = async () => {
    setStatus('Searching...');
    try {
      const response = await axios.post(
        'https://vit-tm-task.api.trademarkia.app/api/v3/us',
        {
          input_query: query,
          input_query_type: "",
          sort_by: "default",
          status: [],
          exact_match: false,
          date_query: false,
          owners: [],
          attorneys: [],
          law_firms: [],
          mark_description_description: [],
          classes: [],
          page: 1,
          rows: 10,
          sort_order: "desc",
          states: [],
          counties: []
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );
      setResults(response.data.results || []);
      setStatus(response.data.results.length > 0 ? '' : 'No Results Found');
    } catch (error) {
      console.error('Error occurred:', error);
      setStatus('Error Occurred');
    }
  };

  return (
    <div>
      <Header />
      <main>
        <div className="searchContainer">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter search term"
            className="searchInput"
          />
          <button onClick={handleSearch} className="searchButton">Search</button>
          {status && <p>{status}</p>}
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result.title}: {result.description}</li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;
