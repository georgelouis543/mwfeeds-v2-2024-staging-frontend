import React, { useState } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const SearchBar = (props) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Feed ID');
    const [searchQuery, setSearchQuery] = useState('');
    const axiosPrivate = useAxiosPrivate();
  
    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };
  
    const selectCategory = (category) => {

      if (searchQuery === '') {
        setSelectedCategory(category);
        setDropdownVisible(false);
      }
      else {
        setSelectedCategory(category);
        setSearchQuery('');
        setDropdownVisible(false);
        props.onSubmitSearch({ feed_id: null, created_by: null });
      }
      
    };
  
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleSearchSubmit = async (e) => {
        e.preventDefault();
    
        try {
          
          let apiUrl = '/feed_handler/get_all_feeds?page=1&size=15';
          let params = {};
    
          if (selectedCategory === 'Feed ID') {
            params.feed_id = searchQuery; 
            params.created_by = null
          } else if (selectedCategory === 'Email') {
            params.created_by = searchQuery; 
            params.feed_id = null
          }
    
          const response = await axiosPrivate.get(apiUrl, { params });
    
          console.log(response.data); // Process search results here
          props.onSubmitSearch(params)
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };

      const handleClear = () => {
        setDropdownVisible(false);
        setSelectedCategory('Feed ID');
        setSearchQuery('');
        props.onSubmitSearch({ feed_id: null, created_by: null }); // Reset the search results in the parent component
    };
    
  
    return (
      <form onSubmit={handleSearchSubmit} className="w-[650px] mx-auto text-[14px]">
        <div className="flex items-center">
          <div className="relative">
            <button type="button" onClick={toggleDropdown} className="px-4 font-bold py-2 border border-black rounded-l-lg focus:outline-none">
              {selectedCategory}
            </button>
            {dropdownVisible && (
              <ul className="absolute top-full left-0 w-full bg-white border border-black rounded-lg mt-1 z-10">
                {['Feed ID', 'Email'].map((category) => (
                  <li key={category}>
                    <button
                      type="button"
                      className="block w-full text-left px-4 py-1 hover:bg-gray-100"
                      onClick={() => selectCategory(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <input
            type="search"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            required
            className="flex-grow px-4 py-2 border-t border-b border-black focus:outline-none font-bold"
          />
          <button type="submit" className="px-4 py-2 font-bold bg-black text-white border border-black rounded-r-lg hover:bg-gray-600 focus:outline-none">
            Search
          </button>
          <button type="button" disabled={!searchQuery} onClick={handleClear} className="ml-2 font-bold px-4 py-2 text-black border-black border rounded-md	hover:text-gray-600 focus:outline-none">
            Clear
          </button>
        </div>
      </form>
    );
}

export default SearchBar
