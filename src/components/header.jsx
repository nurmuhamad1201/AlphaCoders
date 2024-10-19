 
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" className="bg-blue-500">
      <Toolbar>
        {/* Menu Icon for Mobile */}
        <IconButton edge="start" color="inherit" aria-label="menu" className="md:hidden">
          <MenuIcon />
        </IconButton>

        {/* Logo or Brand Name */}
        <Typography variant="h6" component="div" className="flex-1 font-bold text-white">
          Education Center
        </Typography>

        {/* Links to Pages */}
        <div className="hidden md:flex space-x-4">
          <Button color="inherit">
            <Link to="/" className="text-white hover:text-gray-200">Dashboard</Link>
          </Button>
          <Button color="inherit">
            <Link to="/courses" className="text-white hover:text-gray-200">Courses</Link>
          </Button>
          <Button color="inherit">
            <Link to="/students" className="text-white hover:text-gray-200">Students</Link>
          </Button>
          <Button color="inherit">
            <Link to="/teachers" className="text-white hover:text-gray-200">Teachers</Link>
          </Button>
          <Button color="inherit">
            <Link to="/payments" className="text-white hover:text-gray-200">Payments</Link>
          </Button>
          <Button color="inherit">
            <Link to="/reports" className="text-white hover:text-gray-200">Reports</Link>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
