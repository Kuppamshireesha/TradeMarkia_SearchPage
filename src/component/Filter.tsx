import { useState } from 'react';

interface FiltersProps {
  onFilter: (filters: any) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    owner: '',
    lawFirm: '',
    attorney: '',
    status: ''
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleApplyFilters = () => {
    onFilter(filters);
  };

  return (
    <div className="filters">
      <input
        type="text"
        name="owner"
        value={filters.owner}
        onChange={handleFilterChange}
        placeholder="Owner"
      />
      <input
        type="text"
        name="lawFirm"
        value={filters.lawFirm}
        onChange={handleFilterChange}
        placeholder="Law Firm"
      />
      <input
        type="text"
        name="attorney"
        value={filters.attorney}
        onChange={handleFilterChange}
        placeholder="Attorney"
      />
      <input
        type="text"
        name="status"
        value={filters.status}
        onChange={handleFilterChange}
        placeholder="Status"
      />
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filters;
