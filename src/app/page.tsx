"use client";

import { useState } from 'react';
import Header from '../component/Header';
const HomePage: React.FC = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/search?query=${query}`);
      const data = await res.json();
      setResults(data);
    } catch (err) {
      setError("Error occurred while searching.");
    }

    setLoading(false);
  };

  const handleFilter = async (filters: any) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/search?owner=${filters.owner}&lawFirm=${filters.lawFirm}&attorney=${filters.attorney}&status=${filters.status}`);
      const data = await res.json();
      setResults(data);
    } catch (err) {
      setError("Error occurred while filtering.");
    }

    setLoading(false);
  };

  return (
    <div>
      <Header />
      <main>
        <section className="search-results">
          <div className="filters">
            {/* Add filter components here */}
          </div>
          
        </section>
      </main>
    </div>
  );
};

export default HomePage;

