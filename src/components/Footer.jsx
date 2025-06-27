import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { faComments, faCaretDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4 px-2 sm:px-4">
      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
          <FontAwesomeIcon icon={faFacebookF} className="text-lg sm:text-xl" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
          <FontAwesomeIcon icon={faTwitter} className="text-lg sm:text-xl" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
          <FontAwesomeIcon icon={faInstagram} className="text-lg sm:text-xl" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
          <FontAwesomeIcon icon={faYoutube} className="text-lg sm:text-xl" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
          <FontAwesomeIcon icon={faLinkedinIn} className="text-lg sm:text-xl" />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
          <FontAwesomeIcon icon={faTiktok} className="text-lg sm:text-xl" />
        </a>
        <Link to="/contact" className="hover:text-gray-300 transition-colors">
          <FontAwesomeIcon icon={faComments} className="text-lg sm:text-xl" />
        </Link>
      </div>

      {/* Navigation Links - Main Menu */}
      <div className=" flex md:hidden justify-center flex-wrap gap-4 lg:gap-8 mb-4">
        <Link to="/book-manage" className="hover:text-gray-300 transition-colors">
          <span className="font-bold">BOOK & MANAGE</span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </Link>
        <Link to="/experience" className="hover:text-gray-300 transition-colors">
          <span className="font-bold">EXPERIENCE</span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </Link>
        <Link to="/deals-destinations" className="hover:text-gray-300 transition-colors">
          <span className="font-bold">DEALS & DESTINATIONS</span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </Link>
        <Link to="/help" className="hover:text-gray-300 transition-colors">
          <span className="font-bold">HELP</span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </Link>
        <Link to="/miles-smiles" className="hover:text-gray-300 transition-colors">
          <span className="font-bold">MILES & SMILES</span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </Link>
        <Link to="/corporate-club" className="hover:text-gray-300 transition-colors">
          <span className="font-bold">CORPORATE CLUB</span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </Link>
        <Link to="/tajik-travel" className="hover:text-gray-300 transition-colors">
          <span className="font-bold">TAJIK TRAVEL</span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </Link>
      </div>

      {/* Mobile Accordion Menu - Shown only on mobile */}
      <div className="md:block hidden mb-4">
        <details className="group mb-2">
          <summary className="flex justify-between items-center p-2 bg-gray-700 rounded cursor-pointer">
            <span className="font-bold">MENU</span>
            <FontAwesomeIcon icon={faCaretDown} className="group-open:rotate-180 transition-transform" />
          </summary>
          <div className="mt-2 pl-4 space-y-2">
            <Link to="/book-manage" className="block hover:text-gray-300 transition-colors">BOOK & MANAGE</Link>
            <Link to="/experience" className="block hover:text-gray-300 transition-colors">EXPERIENCE</Link>
            <Link to="/deals-destinations" className="block hover:text-gray-300 transition-colors">DEALS & DESTINATIONS</Link>
            <Link to="/help" className="block hover:text-gray-300 transition-colors">HELP</Link>
            <Link to="/miles-smiles" className="block hover:text-gray-300 transition-colors">MILES & SMILES</Link>
            <Link to="/corporate-club" className="block hover:text-gray-300 transition-colors">CORPORATE CLUB</Link>
            <Link to="/tajik-travel" className="block hover:text-gray-300 transition-colors">TAJIK TRAVEL</Link>
          </div>
        </details>
      </div>

      {/* Policy Links */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm mb-4">
        <Link to="/accessibility" className="hover:underline hover:text-gray-300 transition-colors">Accessibility</Link>
        <Link to="/privacy-policy" className="hover:underline hover:text-gray-300 transition-colors">Privacy & Cookie Policy</Link>
        <Link to="/legal-notice" className="hover:underline hover:text-gray-300 transition-colors">Legal Notice</Link>
        <Link to="/passenger-rights" className="hover:underline hover:text-gray-300 transition-colors">Passenger Rights</Link>
        <Link to="/cookie-settings" className="hover:underline hover:text-gray-300 transition-colors">Cookie Settings</Link>
        <Link to="/eu-data-rights" className="hover:underline hover:text-gray-300 transition-colors">EU Data Rights</Link>
      </div>

      {/* Copyright Information */}
      <div className="text-center text-xs sm:text-sm">
        Tajik Travel Copyright © 1996 - 2024
      </div>

    
      <button 
        className="fixed bottom-4 right-4 bg-gray-700 hover:bg-gray-600 p-2 rounded-full cursor-pointer transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
};

export default Footer;