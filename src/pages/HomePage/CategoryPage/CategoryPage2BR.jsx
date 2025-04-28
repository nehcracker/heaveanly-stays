// src/pages/HomePage/CategoryPage/CategoryPage2BR.jsx
import React, { useState, } from 'react';
import styles from './CategoryPage2BR.module.css';
import Navbar from '../../../components/Navbar/Navbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CategoryPage2BR = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [date, setDate] = useState(new Date());

  // Sample data for 2BR apartments
  const apartments = [
    {
      id: 1,
      name: 'Luxury 2BR Oceanfront Suite',
      description: 'Spacious 2-bedroom oceanfront suite with breathtaking views. Perfect for families or two couples traveling together.',
      price: 249,
      images: ['/images/apartments/2br-ocean-1.jpg', '/images/apartments/2br-ocean-2.jpg', '/images/apartments/2br-ocean-3.jpg'],
      amenities: ['Air Conditioning', 'Free WiFi', 'Fully Equipped Kitchen', 'Smart TV', 'Balcony', 'Ocean View', 'Washer & Dryer', 'King Beds'],
      availability: [/* dates would go here */]
    },
    {
      id: 2,
      name: 'Downtown 2BR Penthouse',
      description: 'Elegant 2-bedroom penthouse in the heart of downtown. Features modern amenities and stunning city views from a private terrace.',
      price: 229,
      images: ['/images/apartments/2br-city-1.jpg', '/images/apartments/2br-city-2.jpg', '/images/apartments/2br-city-3.jpg'],
      amenities: ['Air Conditioning', 'Free WiFi', 'Fully Equipped Kitchen', 'Smart TV', 'Private Terrace', 'City View', 'Washer & Dryer', 'Gym Access'],
      availability: [/* dates would go here */]
    },
    {
      id: 3,
      name: 'Garden Retreat 2BR Villa',
      description: 'Serene 2-bedroom villa surrounded by lush gardens. Features a private patio and outdoor dining area perfect for family meals.',
      price: 189,
      images: ['/images/apartments/2br-garden-1.jpg', '/images/apartments/2br-garden-2.jpg'],
      amenities: ['Air Conditioning', 'Free WiFi', 'Fully Equipped Kitchen', 'Smart TV', 'Private Patio', 'Garden View', 'Outdoor Dining', 'BBQ Grill'],
      availability: [/* dates would go here */]
    }
  ];

  const handleUnitSelect = (unit) => {
    setSelectedUnit(unit);
    window.scrollTo({
      top: document.getElementById('details-section').offsetTop,
      behavior: 'smooth'
    });
  };

  const scrollGallery = (direction) => {
    const gallery = document.getElementById('image-gallery');
    if (gallery) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      gallery.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.categoryPage}>
      <Navbar />
      
      <header className={styles.categoryHeader}>
        <div className={styles.overlay}>
          <div className={styles.container}>
            <h1>Explore Our 2BR Furnished Apartments</h1>
            <p>Ideal for families, friends, and extended stays with plenty of space to relax</p>
          </div>
        </div>
      </header>
      
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              <label>Price Range</label>
              <select>
                <option>Any Price</option>
                <option>$150 - $200</option>
                <option>$200 - $250</option>
                <option>$250+</option>
              </select>
            </div>
            <div className={styles.filterGroup}>
              <label>Amenities</label>
              <select>
                <option>All Amenities</option>
                <option>Ocean View</option>
                <option>Private Terrace</option>
                <option>Washer & Dryer</option>
              </select>
            </div>
            <div className={styles.filterGroup}>
              <label>Availability</label>
              <input type="date" />
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles.apartmentListSection}>
        <div className={styles.container}>
          <h2>Available 2BR Apartments</h2>
          <div className={styles.apartmentList}>
            {apartments.map(apartment => (
              <div key={apartment.id} className={styles.apartmentCard}>
                <div className={styles.cardImage} style={{backgroundImage: `url('${process.env.PUBLIC_URL}${apartment.images[0]}')`}}>
                  <div className={styles.priceTag}>${apartment.price}/night</div>
                </div>
                <div className={styles.cardDetails}>
                  <h3>{apartment.name}</h3>
                  <p className={styles.description}>{apartment.description}</p>
                  <div className={styles.amenityTags}>
                    {apartment.amenities.slice(0, 4).map(amenity => (
                      <span key={amenity} className={styles.amenityTag}>{amenity}</span>
                    ))}
                    {apartment.amenities.length > 4 && (
                      <span className={styles.amenityTagMore}>+{apartment.amenities.length - 4} more</span>
                    )}
                  </div>
                  <button 
                    className={styles.viewDetailsButton}
                    onClick={() => handleUnitSelect(apartment)}
                  >
                    View Details & Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="details-section" className={styles.detailsSection}>
        <div className={styles.container}>
          {selectedUnit ? (
            <div className={styles.unitDetails}>
              <h2>{selectedUnit.name}</h2>
              
              <div className={styles.galleryControlsContainer}>
                <button 
                  className={styles.galleryControl} 
                  onClick={() => scrollGallery('left')}
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button 
                  className={styles.galleryControl} 
                  onClick={() => scrollGallery('right')}
                  aria-label="Next image"
                >
                  →
                </button>
              </div>
              
              <div id="image-gallery" className={styles.imageGallery}>
                {selectedUnit.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={styles.galleryImage} 
                    style={{backgroundImage: `url('${process.env.PUBLIC_URL}${image}')`}}
                  ></div>
                ))}
              </div>
              
              <div className={styles.detailsGrid}>
                <div className={styles.detailsInfo}>
                  <h3>Description</h3>
                  <p>{selectedUnit.description}</p>
                  
                  <h3>Features & Amenities</h3>
                  <div className={styles.featuresSection}>
                    <div className={styles.featureColumn}>
                      <h4>Master Bedroom</h4>
                      <ul className={styles.featuresList}>
                        <li>King-size bed with premium linens</li>
                        <li>Smart TV with streaming services</li>
                        <li>Ensuite bathroom with shower</li>
                        <li>Walk-in closet</li>
                      </ul>
                    </div>
                    <div className={styles.featureColumn}>
                      <h4>Second Bedroom</h4>
                      <ul className={styles.featuresList}>
                        <li>Queen-size bed with premium linens</li>
                        <li>Spacious closet</li>
                        <li>Desk workspace</li>
                        <li>Reading nook</li>
                      </ul>
                    </div>
                  </div>
                  
                  <h3>All Amenities</h3>
                  <div className={styles.amenitiesList}>
                    {selectedUnit.amenities.map(amenity => (
                      <div key={amenity} className={styles.amenityItem}>
                        <span className={styles.amenityIcon}>✓</span> {amenity}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={styles.bookingPanel}>
                  <h3>Book This Apartment</h3>
                  <div className={styles.price}>${selectedUnit.price} <span>/night</span></div>
                  
                  <div className={styles.calendar}>
                    <h4>Select Your Dates</h4>
                    <Calendar 
                      onChange={setDate} 
                      value={date}
                      selectRange={true}
                      minDate={new Date()}
                    />
                  </div>
                  
                  <button className={styles.bookButton}>Reserve Now</button>
                  
                  <div className={styles.contactInfo}>
                    <h4>Need Help?</h4>
                    <p><strong>Call:</strong> +1 (555) 123-4567</p>
                    <p><strong>Email:</strong> bookings@heavenlystays.com</p>
                    <p><strong>Hours:</strong> 9am to 8pm, Monday-Sunday</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.selectPrompt}>
              <h3>Select an apartment above to view details and availability</h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage2BR;