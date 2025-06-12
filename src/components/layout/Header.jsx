
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log('Searching for:', searchTerm);
      // Add search functionality here
    }
  };

  const handleLogin = () => {
    // Simulate login
    console.log('Login clicked');
  };

  return (
    <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-400">
          TechBlog
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-white hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/dashboard" 
            className="text-white hover:text-blue-400 transition-colors"
          >
            Dashboard
          </Link>
          <Link 
            to="/videos" 
            className="text-white hover:text-blue-400 transition-colors"
          >
            Videos
          </Link>
          <Link 
            to="/create" 
            className="text-white hover:text-blue-400 transition-colors"
          >
            Create
          </Link>
        </nav>

        {/* Search and Login */}
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-gray-400 w-64"
            />
          </form>
          
          <Button 
            onClick={handleLogin}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6"
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
