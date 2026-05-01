import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Film, Bookmark, Home } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Film className="text-white w-8 h-8" />
            <h1 className="text-2xl font-bold text-white">MoodStream</h1>
          </Link>
          
          <div className="flex gap-6">
            <Link to="/" className="flex items-center gap-1 text-white hover:text-yellow-200 transition">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link to="/bookmarks" className="flex items-center gap-1 text-white hover:text-yellow-200 transition">
              <Bookmark size={20} />
              <span>Bookmarks</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
