import React, { useState, useEffect } from 'react';
import { X, Menu, User } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import Front from './Front';
import Body from './Body';
import Footer from './Footer';
import { account } from './apprwriteconfig';

const medialinks = [
  { id: "home", name: "Home", link: "#home" },
  { id: "about", name: "About", link: "#about" },
  { id: "categories", name: "Categories", link: "#categories" },
];

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // State to hold the logged-in user
  const [isOpen, setIsOpen] = useState(false);
  const [logoutLoader, setLogoutLoader] = useState(false); // Loader state for logout
  const [logoutErr, setLogoutErr] = useState(null); // Error state for logout

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    account.get()
      .then((res) => {
        setUser(res); // Set the user state if logged in
      })
      .catch((err) => {
        console.log(err);
        setUser(null); // Set user to null if not logged in
      });
  }, []);

  // Handle Logout
  const handleLogout = () => {
    setLogoutLoader(true);
    setLogoutErr(null);

    account.deleteSession('current')
      .then(() => {
        setUser(null); // Clear the user state on logout
        navigate('/login'); // Redirect to login page
      })
      .catch((err) => {
        setLogoutErr(err.message); // Set the error state if logout fails
      })
      .finally(() => {
        setLogoutLoader(false);
      });
  };

  return (
    <div>
      <div className="p-4 bg-white">
        {/* Logo and links section */}
        <div className='flex justify-between'>
          <a href='/' className='text-black font-sans pl-6'>
            Your<span className='text-primary font-semibold'>LIBRARY</span>
          </a>
          {/* Menu Items */}
          <div className='hidden sm:block'>
            <ul className='flex justify-end gap-4'>
              {medialinks.map((data) => (
                <li key={data.id} className='hover:text-primary hover:underline underline-offset-8'>
                  <a href={data.link}>{data.name}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile Menu Button */}
          <div className='flex justify-end sm:hidden'>
            <button onClick={toggleNavbar}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
          {/* Navbar Right section */}
          {user ? (
            <div className='flex gap-2 items-center'>
              <NavLink to="/publish" className='hover:text-primary'>
                Publish
              </NavLink>
              <User />
              <h5>{user.name}</h5>
              {logoutErr && <div className="error-msg">{logoutErr}</div>}
              <button onClick={handleLogout} className='bg-secondary rounded-full py-1 px-3 hover:bg-primary'>
                {logoutLoader ? 'Logging out...' : 'LOGOUT'}
              </button>
            </div>
          ) : (
            <NavLink to="/login" className='bg-secondary rounded-full mx-4 py-1 px-3 hover:bg-primary'>
              LOGIN
            </NavLink>
          )}
        </div>
      </div>
      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="sm:hidden">
          <ul className="flex flex-col items-center gap-4">
            {medialinks.map((data) => (
              <li key={data.id} className="hover:text-primary hover:underline underline-offset-8">
                <a href={data.link}>{data.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Front />
      <Body />
      <Footer />
    </div>
  );
}

export default Navbar;


