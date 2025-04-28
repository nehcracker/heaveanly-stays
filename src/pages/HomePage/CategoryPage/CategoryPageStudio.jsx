// src/pages/HomePage/CategoryPage/CategoryPageStudio.jsx
import React, { useState } from 'react';
import styles from './CategoryPageStudio.module.css';
import Navbar from '../../../components/Navbar/Navbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CategoryPageStudio = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [date, setDate] = useState(new Date());

  // Sample data for Studio apartments
  const apartments = [
    {
      id: 1,
      name: 'Modern Downtown Studio',
      description: 'Sleek, modern studio in the heart of downtown. Perfect for business travelers or couples seeking a central location with easy access to restaurants and attractions.',
      price: 79,
      images: ['/images/apartments/studio-downtown-1.jpg', '/images/apartments/studio-downtown-2.jpg'],
      amenities: ['Air Conditioning', 'Free WiFi', 'Kitchenette', 'Smart TV', 'Work Desk', 'Queen Bed'],
      availability: [/* dates would go here */]
    },
    {
      id: 2,
      name: 'Cozy Garden Studio',
      description: 'Charming studio apartment with garden views. Features a private patio, compact but fully functional kitchenette, and comfortable living space.',
      price: 69,
      images: ['/images/apartments/studio-garden-1.jpg', '/images/apartments/studio-garden-2.jpg'],
      amenities: ['Air Conditioning', 'Free WiFi', 'Kitchenette', 'Smart TV', 'Private Patio', 'Garden View'],
      availability: [/* dates would go here */]
    },
    {
      id: 3,
      name: 'Urban Loft Studio',
      description: 'Industrial-chic studio loft with high ceilings and modern furnishings. Open concept design with stylish decor and city views from large windows.',
      price: 89,
      images: ['/images/apartments/studio-loft-1.jpg', '/images/apartments/studio-loft-2.jpg'],
      amenities: ['Air Conditioning', 'Free WiFi', 'Full Kitchen', 'Smart TV', 'City View', 'High Ceilings'],
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
            <h1>Studio Apartments</h1>
            <p>Compact, efficient living spaces perfect for individuals and couples</p>
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
                <option>Under $70</option>
                <option>$70 - $85</option>
                <option>$85+</option>
              </select>
            </div>
            <div className={styles.filterGroup}>
              <label>Features</label>
              <select>
                <option>All Features</option>
                <option>Work Desk</option>
                <option>Private Patio</option>
                <option>City View</option>
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
          <h2>Available Studio Apartments</h2>
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
                  
                  <h3>Layout & Features</h3>
                  <div className={styles.featuresSection}>
                    <div className={styles.featureColumn}>
                      <h4>Living & Sleeping Area</h4>
                      <ul className={styles.featuresList}>
                        <li>Comfortable queen-size bed with premium linens</li>
                        <li>Multi-purpose seating area with convertible furniture</li>
                        <li>Smart TV with streaming services</li>
                        <li>Blackout curtains for optimal sleep</li>
                      </ul>
                    </div>
                    <div className={styles.featureColumn}>
                      <h4>Kitchen & Dining</h4>
                      <ul className={styles.featuresList}>
                        <li>Compact kitchenette with essential appliances</li>
                        <li>Mini refrigerator and microwave</li>
                        <li>Coffee maker and electric kettle</li>
                        <li>Dining area with table for two</li>
                      </ul>
                    </div>
                  </div>
                  
                  <h3>Smart Space Solutions</h3>
                  <p>Our studio apartments are designed with efficient space utilization in mind. Each unit features:</p>
                  <ul className={styles.spaceFeatures}>
                    <li>Multi-functional furniture to maximize living space</li>
                    <li>Built-in storage solutions to minimize clutter</li>
                    <li>Thoughtful layout to create distinct living zones</li>
                    <li>Bright, open design to create a sense of spaciousness</li>
                  </ul>
                  
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
                  <h3>Book This Studio</h3>
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
                    <p><strong>Hours:</strong> 24hrs, Monday-Sunday</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.selectPrompt}>
              <h3>Select a studio apartment above to view details and availability</h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryPageStudio;
