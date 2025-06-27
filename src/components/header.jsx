import { Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import textLogo from '../assets/logo/tajiktravel_logo.png';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#000000] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Toolbar className="flex justify-between items-center p-0">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center">
            <img 
              src={textLogo} 
              alt="Tajik Travel Logo" 
              className="w-32 md:w-48 h-auto" 
            />
          </Link>

          {/* Desktop Navigation - hidden on mobile */}
          <nav className=" flex md:hidden space-x-2 lg:space-x-4">
            <Button color="inherit" className="min-w-0">
              <Link to="/about" className="text-white hover:text-yellow-400 text-sm lg:text-base px-2 py-1">
                About Us
              </Link>
            </Button>
            <Button color="inherit" className="min-w-0">
              <Link to="/confirmation" className="text-white hover:text-yellow-400 text-sm lg:text-base px-2 py-1">
                Tickets
              </Link>
            </Button>
            <Button color="inherit" className="min-w-0">
              <Link to="/Car" className="text-white hover:text-yellow-400 text-sm lg:text-base px-2 py-1 flex items-center">
                Rent A Car
                <FontAwesomeIcon icon={faCar} className="ml-2" />
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button - visible only on mobile */}
          <div className="md:flex hidden items-center">
            <Button 
              color="inherit" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              <FontAwesomeIcon icon={faBars} size="lg" />
            </Button>
          </div>
        </Toolbar>

        {/* Mobile Menu - appears when menu button is clicked */}
        {mobileMenuOpen && (
          <div className="  bg-gray-900 p-4 space-y-3">
            <Button fullWidth color="inherit" className="block text-left">
              <Link 
                to="/about" 
                className="text-white hover:text-yellow-400 block w-full py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </Button>
            <Button fullWidth color="inherit" className="block text-left">
              <Link 
                to="/confirmation" 
                className="text-white hover:text-yellow-400 block w-full py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tickets
              </Link>
            </Button>
            <Button fullWidth color="inherit" className="block text-left">
              <Link 
                to="/Car" 
                className="text-white hover:text-yellow-400  w-full py-2 flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Rent A Car
                <FontAwesomeIcon icon={faCar} className="ml-3" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;