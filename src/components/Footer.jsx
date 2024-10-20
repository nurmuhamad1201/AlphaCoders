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
    <div className="bg-gray-800 text-white py-4">
      {/* Social Icons */}
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} className="text-xl cursor-pointer" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="text-xl cursor-pointer" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-xl cursor-pointer" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="text-xl cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} className="text-xl cursor-pointer" />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} className="text-xl cursor-pointer" />
        </a>
        <Link to="/contact">
          <FontAwesomeIcon icon={faComments} className="text-xl cursor-pointer" />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center space-x-8 mb-4">
        <Link to="/book-manage" className="text-center cursor-pointer">
          <span className="font-bold">BOOK & MANAGE</span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </Link>
        <Link to="/experience" className="text-center cursor-pointer">
          <span className="font-bold">EXPERIENCE</span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </Link>
        <Link to="/deals-destinations" className="text-center cursor-pointer">
          <span className="font-bold">DEALS & DESTINATIONS</span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </Link>
        <Link to="/help" className="text-center cursor-pointer">
          <span className="font-bold">HELP</span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </Link>
        <Link to="/miles-smiles" className="text-center cursor-pointer">
          <span className="font-bold">MILES & SMILES</span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </Link>
        <Link to="/corporate-club" className="text-center cursor-pointer">
          <span className="font-bold">CORPORATE CLUB</span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </Link>
        <Link to="/tajik-travel" className="text-center cursor-pointer">
          <span className="font-bold">TAJIK TRAVEL</span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </Link>
      </div>

      {/* Policy Links */}
      <div className="flex justify-center space-x-4 text-sm mb-4">
        <Link to="/accessibility" className="hover:underline">Accessibility</Link>
        <Link to="/privacy-policy" className="hover:underline">Privacy & Cookie Policy</Link>
        <Link to="/legal-notice" className="hover:underline">Legal Notice</Link>
        <Link to="/passenger-rights" className="hover:underline">Passenger Rights</Link>
        <Link to="/cookie-settings" className="hover:underline">Change Cookie Settings</Link>
        <Link to="/eu-data-rights" className="hover:underline">EU Data Subjects Rights</Link>
      </div>

      {/* Copyright Information */}
      <div className="text-center text-sm">
        Tajik Travel Copyright © 1996 - 2024
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-4 right-4 bg-gray-700 p-2 rounded-full cursor-pointer">
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </div>
  );
};

export default Footer;
