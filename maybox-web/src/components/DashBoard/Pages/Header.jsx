import React, { useState, useRef, useEffect } from 'react';
import { Bell, Menu, Search, X, User } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { useProfile } from './ProfileContext';

const pages = [
  { name: 'Dashboard', path: '/dashboardpage' },
  { name: 'Delivery Details', path: '/deliverydetails' },
  { name: 'Subscription', path: '/subscription' },
  { name: 'Personal Details', path: '/personaldetails' },
];

function Header({ setSidebarOpen }) {
  const { profilePicture } = useProfile();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.length > 0) {
      const filteredResults = pages.filter(page => 
        page.name.toLowerCase().includes(term)
      );
      setSearchResults(filteredResults);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleResultClick = (path) => {
    navigate(path);
    setSearchTerm('');
    setShowResults(false);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        searchRef.current.querySelector('input').focus();
      }, 100);
    }
  };

  const handleProfileClick = () => {
    navigate('/personaldetails');
  };

  return (
    <header className="flex items-center justify-between px-4 py-4 bg-white shadow lg:px-6">
      <div className="flex items-center">
        <button
          className="p-1 mr-2 rounded-md lg:hidden hover:bg-gray-100"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
        {!isSearchOpen && <p className='pr-5 hidden sm:block'>Welcome James</p>}
        <div className={`relative ${isSearchOpen ? 'w-full' : ''}`} ref={searchRef}>
          {isSearchOpen ? (
            <div className="flex items-center w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search pages..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FBA013]"
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={toggleSearch}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <button
              className="p-1 rounded-md hover:bg-gray-100 sm:hidden"
              onClick={toggleSearch}
            >
              <Search className="h-6 w-6" />
            </button>
          )}
          {!isSearchOpen && (
            <div className="hidden sm:flex items-center">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search pages..."
                value={searchTerm}
                onChange={handleSearch}
                className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FBA013]"
              />
            </div>
          )}
          {showResults && (
            <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
              {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleResultClick(result.path)}
                  >
                    {result.name}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500">Not found</div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center">
        <button className="p-1 rounded-md hover:bg-gray-100">
          <Bell className="h-5 w-5" />
        </button>
        <button 
          className="p-1 ml-2 rounded-md hover:bg-gray-100"
          onClick={handleProfileClick}
        >
          {profilePicture ? (
            <img src={profilePicture} alt="User" className="h-8 w-8 rounded-full object-cover" />
          ) : (
            <User className="h-5 w-5" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;