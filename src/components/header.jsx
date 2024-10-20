import { Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/tajiTravel2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faUser } from '@fortawesome/free-solid-svg-icons';
import textLogo from '../assets/logo/tajiktravel_logo.png'
const Header = () => {
  return (
     
      <Toolbar className='bg-[#000000]'>
        {/* Logo and Title */}
        <Link to="/" className="flex items-center  space-x-2">
          {/* <img src={logo} alt="Tajik Travel Logo" className="h-10 w-10 rounded-full" /> */}
          <Typography variant="h6" component="div" className="font-sans text-white">
            <img src={textLogo} alt="logo" className='w-48' />
          </Typography>
        </Link>

         
        <div className="md:hidden flex space-x-4 ml-auto">
           
          <Button color="inherit">
            <Link to="/about" className="text-white hover:text-yellow-400">About Us</Link>
          </Button>
          <Button color="inherit">
            <Link to="/confirmation" className="text-white hover:text-yellow-400">Tickets</Link>
          </Button>
          <Button color="inherit">
            <Link to="/Car" className="text-white hover:text-yellow-400">Rent A Car
            <FontAwesomeIcon icon={faCar} className="mr-1" /></Link>
          </Button>
          {/* <Button color="inherit">
           Sign In
          </Button> */}
          {/* <Button color="inherit" className="flex items-center">
            <Link to="/signup" className="flex items-center text-white hover:text-yellow-400">
              <FontAwesomeIcon icon={faUser} className="mr-1" />
              Sign Up
            </Link>
          </Button> */}
        </div>
      </Toolbar>
  
  );
};

export default Header;
