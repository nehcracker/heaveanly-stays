// src/components/Navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img 
              src={`${process.env.PUBLIC_URL}/images/logo/heavenly-stays-logo.png`} 
              alt="Heavenly Stays" 
              className={styles.logoImage}
            />
          </Link>
        </div>
        <ul className={styles.navLinks}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className={styles.auth}>
          <button className={styles.loginBtn}>Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
