import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar2() {
  const [showNavItems, setShowNavItems] = useState(window.innerWidth >= 900);

  const toggleNavItems = () => {
    setShowNavItems(!showNavItems);
  };

  // Add an event listener to update showNavItems when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setShowNavItems(window.innerWidth >= 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }; 
   }, []);

  return (
    <div className='navbar'>
      <div className='nav_toggler' onClick={toggleNavItems}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>

      {showNavItems && (
        <>
          <Link to='/midwife/news' className='nav-item'>Midwife News Feed</Link>
          <Link to='/midwife/growth' className='nav-item'>Midwife Growth Tracker</Link>
          <Link to='/midwife/uploads' className='nav-item'>News Upload</Link>
        </>
      )}
    </div>
  );
}

export default Navbar2;
