"use client"; // Ensure this line is present

import { useState } from 'react';
import axios from 'axios';
import { FaSearch, FaCamera, FaTrademark, FaUser, FaImage, FaGlobe, FaCopyright } from 'react-icons/fa';
import styles from '../styles/Header.module.css';

// Dummy data function
const getDummyData = () => [
  { mark: 'Nike Inc.', details: 'Trademark for Nike sportswear.', status: 'Registered', classDescription: 'Clothing', dateRegistered: '2024-01-01' },
  { mark: 'Nike Air', details: 'Trademark for Nike Air series.', status: 'Registered', classDescription: 'Footwear', dateRegistered: '2024-02-01' },
  { mark: 'Nike Swoosh', details: 'Trademark for the Nike Swoosh logo.', status: 'Registered', classDescription: 'Logo', dateRegistered: '2024-03-01' },
  { mark: 'Adidas', details: 'Trademark for Nike sportswear.', status: 'Registered', classDescription: 'Clothing', dateRegistered: '2024-01-01' },
  { mark: 'Adidas Air', details: 'Trademark for Nike Air series.', status: 'Registered', classDescription: 'Footwear', dateRegistered: '2024-02-01' },
  { mark: 'Adidas Swoosh', details: 'Trademark for the Nike Swoosh logo.', status: 'Registered', classDescription: 'Logo', dateRegistered: '2024-03-01' }
];

const Header = () => {
  const [query, setQuery] = useState('');
  const [activeNav, setActiveNav] = useState(0);
  const [results, setResults] = useState<any[]>([]);
  const [status, setStatus] = useState(''); // e.g., "Searching", "No Results Found", "Error Occurred"

  const handleNavClick = (index: number) => {
    setActiveNav(index);
  };

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

  const handleApply = () => {
    console.log('Apply for Trademark');
  };

  return (
    <header className={styles.header}>
      {/* Top section: Logo, Search bar, and Buttons */}
      <div className={styles.headerTop}>
        <div className={styles.logo}>
          <span>TRADEMARKIA</span>
        </div>

        <div className={styles.searchContainer}>
          <div className={styles.searchBar}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for Trademarks"
              className={styles.searchInput}
            />
            <FaCamera className={styles.cameraIcon} />
          </div>
          <button onClick={handleSearch} className={styles.searchButton}>
            Search
          </button>
          <button onClick={handleApply} className={styles.applyButton}>
            Apply for Trademark
          </button>
        </div>
      </div>

      {/* Navigation bar */}
      <div className={styles.navbar}>
        <div
          className={`${styles.navItem} ${activeNav === 0 ? styles.activeNav : ''}`}
          onClick={() => handleNavClick(0)}
        >
          <FaTrademark className={styles.navIcon} />
          <span>Trademarks</span>
          {activeNav === 0 && <div className={styles.indicator}></div>}
        </div>
        <div
          className={`${styles.navItem} ${activeNav === 1 ? styles.activeNav : ''}`}
          onClick={() => handleNavClick(1)}
        >
          <FaUser className={styles.navIcon} />
          <span>Owners</span>
          {activeNav === 1 && <div className={styles.indicator}></div>}
        </div>
        <div
          className={`${styles.navItem} ${activeNav === 2 ? styles.activeNav : ''}`}
          onClick={() => handleNavClick(2)}
        >
          <FaImage className={styles.navIcon} />
          <span>Logos</span>
          {activeNav === 2 && <div className={styles.indicator}></div>}
        </div>
        <div
          className={`${styles.navItem} ${activeNav === 3 ? styles.activeNav : ''}`}
          onClick={() => handleNavClick(3)}
        >
          <FaGlobe className={styles.navIcon} />
          <span>Internet Brand Search</span>
          {activeNav === 3 && <div className={styles.indicator}></div>}
        </div>
        <div
          className={`${styles.navItem} ${activeNav === 4 ? styles.activeNav : ''}`}
          onClick={() => handleNavClick(4)}
        >
          <FaCopyright className={styles.navIcon} />
          <span>Copyright</span>
          {activeNav === 4 && <div className={styles.indicator}></div>}
        </div>
      </div>

      {/* Navigation sections */}
      <div className={styles.navContent}>
        {activeNav === 0 && (
          <div className={styles.navSection}>
            <h2>Trademarks</h2>
            {status && <div>{status}</div>}
            {results.map((result, index) => (
              <div key={index} className={styles.resultItem}>
                <h3>{result.mark}</h3>
                <p>{result.details}</p>
                <p>{result.status}</p>
                <p>{result.classDescription}</p>
                <p>{result.dateRegistered}</p>
              </div>
            ))}
          </div>
        )}
        {activeNav === 1 && (
          <div className={styles.navSection}>
            <h2>Owners</h2>
            {/* Add content for Owners */}
          </div>
        )}
        {activeNav === 2 && (
          <div className={styles.navSection}>
            <h2>Logos</h2>
            {/* Add content for Logos */}
          </div>
        )}
        {activeNav === 3 && (
          <div className={styles.navSection}>
            <h2>Internet Brand Search</h2>
            {/* Add content for Internet Brand Search */}
          </div>
        )}
        {activeNav === 4 && (
          <div className={styles.navSection}>
            <h2>Copyright</h2>
            {/* Add content for Copyright */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
