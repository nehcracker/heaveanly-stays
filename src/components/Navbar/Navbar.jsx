// src/components/Navbar/Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>Heavenly Stays</h1>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="/">Home</a></li>
          <li><a href="/properties">Properties</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className={styles.auth}>
          <button className={styles.loginBtn}>Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
