import { useState } from "react";
import css from './SearchBar.module.css';
import { FaSearch } from "react-icons/fa"; 
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === '') {
      toast.error("Please enter text to search images!");  
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={css.searchHeader}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <FaSearch className={css.searchIcon} />
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search images"
          className={css.searchInput}
        />
      </form>
    </header>
  );
}

export default SearchBar


