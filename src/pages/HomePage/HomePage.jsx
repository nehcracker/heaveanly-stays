// src/pages/HomePage/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import Navbar from '../../components/Navbar/Navbar';

const HomePage = () => {
  // Define amenities for each apartment type
  const apartmentAmenities = {
    'studio': ['Air Conditioning', 'Free WiFi', 'Kitchenette', 'Smart TV'],
    '1br': ['Air Conditioning', 'Free WiFi', 'Fully Equipped Kitchen', 'Smart TV'],
    '2br': ['Air Conditioning', 'Free WiFi', 'Fully Equipped Kitchen', 'Washing Machine', 'Balcony'],
    '3br': ['Air Conditioning', 'Free WiFi', 'Fully Equipped Kitchen', 'Washing Machine', 'Smart TV', 'Balcony', 'Parking Space']
  };

  return (
    <div className={styles.homePage}>
      <Navbar />
      
      <header className={styles.hero}>
        <div className={styles.overlay}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1>Find Your Perfect Heavenly Stay</h1>
              <p>Furnished Apartments and villas for unforgettable experiences</p>
              <button className={styles.ctaButton}>Booking & Reservations</button>
            </div>
          </div>
        </div>
      </header>
      
      <section className={styles.categorySection}>
        <div className={styles.container}>
          <h2>Browse by Size</h2>
          <div className={styles.categories}>
            <div className={styles.categoryCard}>
              <div className={styles.cardImage} style={{backgroundImage: `url('${process.env.PUBLIC_URL}/images/categories/studio.jpg')`}}>
                <h3>Studio Apartment</h3>
              </div>
              <div className={styles.cardDetails}>
                <p>Efficient and affordable</p>
                <div className={styles.amenityTags}>
                  {apartmentAmenities['studio'].map(amenity => (
                    <span key={amenity} className={styles.amenityTag}>{amenity}</span>
                  ))}
                </div>
                <Link to="/category/studioApartment" className={styles.viewButton}>
                  VIEW APARTMENTS
                </Link>
              </div>
            </div>
            
            <div className={styles.categoryCard}>
              <div className={styles.cardImage} style={{backgroundImage: `url('${process.env.PUBLIC_URL}/images/categories/1br.jpg')`}}>
                <h3>1BR Furnished Apartment</h3>
              </div>
              <div className={styles.cardDetails}>
                <p>Perfect for couples</p>
                <div className={styles.amenityTags}>
                  {apartmentAmenities['1br'].map(amenity => (
                    <span key={amenity} className={styles.amenityTag}>{amenity}</span>
                  ))}
                </div>
                <Link to="/category/1brFurnishedApartment" className={styles.viewButton}>
                  VIEW APARTMENTS
                </Link>
              </div>
            </div>
            
            <div className={styles.categoryCard}>
              <div className={styles.cardImage} style={{backgroundImage: `url('${process.env.PUBLIC_URL}/images/categories/2br.jpg')`}}>
                <h3>2BR Furnished Apartment</h3>
              </div>
              <div className={styles.cardDetails}>
                <p>Ideal for small families</p>
                <div className={styles.amenityTags}>
                  {apartmentAmenities['2br'].map(amenity => (
                    <span key={amenity} className={styles.amenityTag}>{amenity}</span>
                  ))}
                </div>
                <Link to="/category/2brFurnishedApartment" className={styles.viewButton}>
                  VIEW APARTMENTS
                </Link>
              </div>
            </div>
            
            <div className={styles.categoryCard}>
              <div className={styles.cardImage} style={{backgroundImage: `url('${process.env.PUBLIC_URL}/images/categories/3br.jpg')`}}>
                <h3>3BR Furnished Apartment</h3>
              </div>
              <div className={styles.cardDetails}>
                <p>Spacious for larger groups</p>
                <div className={styles.amenityTags}>
                  {apartmentAmenities['3br'].map(amenity => (
                    <span key={amenity} className={styles.amenityTag}>{amenity}</span>
                  ))}
                </div>
                <Link to="/category/3brFurnishedApartment" className={styles.viewButton}>
                  VIEW APARTMENTS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;