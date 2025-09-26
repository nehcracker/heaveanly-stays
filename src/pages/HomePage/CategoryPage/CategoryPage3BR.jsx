// src/pages/HomePage/CategoryPage/CategoryPage3BR.jsx
import React, { useState, } from 'react';
import styles from './CategoryPage3BR.module.css';
import Navbar from '../../../components/Navbar/Navbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Title, Meta, Link as HeadLink } from 'react-head';

const CategoryPage3BR = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [date, setDate] = useState(new Date());

  // Sample data for 3BR apartments
  const apartments = [
    {
      id: 1,
      name: '3br Apartment',
      description: 'Luxurious 3-bedroom oceanfront villa with panoramic sea views. Spacious living areas and premium furnishings make this perfect for families or groups.',
      price: 120,
      images: ['/images/apartments/3br3.jpg', '/images/apartments/3br1.jpg', '/images/apartments/3br2.jpg', '/images/apartments/3br4.jpg', '/images/apartments/3br5.jpg', '/images/apartments/3br6.jpg', '/images/apartments/3br7.jpg', '/images/apartments/3br8.jpg', '/images/apartments/3br9.jpg', '/images/apartments/3br10.jpg', '/images/apartments/3br11.jpg', '/images/apartments/3br12.jpg'],
      amenities: ['Air Conditioning', 'Free WiFi', 'Fully Equipped Kitchen', 'Smart TV', 'Balcony', 'Ocean View', 'Washer & Dryer', 'King Beds', 'Private Pool', 'Parking Space'],
      availability: [/* dates would go here */]
    },
    {
      id: 2,
      name: 'Deluxe 3BR City Penthouse',
      description: 'Stunning 3-bedroom penthouse with wrap-around terrace offering 360° city views. Features high-end appliances, designer furniture, and premium amenities.',
      price: 329,
      images: ['/images/apartments/3br-city-1.jpg', '/images/apartments/3br-city-2.jpg', '/images/apartments/3br-city-3.jpg'],
      amenities: ['Air Conditioning', 'Free WiFi', 'Fully Equipped Kitchen', 'Smart TV', 'Wrap-around Terrace', 'City View', 'Washer & Dryer', 'Home Office', 'Gym Access', 'Parking Space'],
      availability: [/* dates would go here */]
    },
    
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
    <>
    <Title>3BR Furnished Apartments - Heavenly Stays BNB</Title>
    <Meta name="description" content="Explore our luxurious 3-bedroom furnished apartments, perfect for families and groups. Book your stay today!" />
    <HeadLink rel="canonical" href="https://www.heavenlystays.com/category/3br-furnished-apartments" />
    <Meta property="og:title" content="3BR Furnished Apartments - Heavenly Stays" />
    <Meta property="og:description" content="Explore our luxurious 3-bedroom furnished apartments, perfect for families and groups. Book your stay today!" />
    <Meta property="og:image" content={`${process.env.PUBLIC_URL}/images/apartments/3br4.jpg`} />
    <div className={styles.categoryPage}>
      <Navbar />
      
      <header className={styles.categoryHeader}>
        <div className={styles.overlay}>
          <div className={styles.container}>
            <h1>Explore Our 3BR Furnished Apartments</h1>
            <p>Spacious accommodations for larger families and groups with all the comforts of home</p>
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
                <option>$250 - $300</option>
                <option>$300 - $350</option>
                <option>$350+</option>
              </select>
            </div>
            <div className={styles.filterGroup}>
              <label>Special Features</label>
              <select>
                <option>All Features</option>
                <option>Private Pool</option>
                <option>Ocean View</option>
                <option>Game Room</option>
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
          <h2>Available 3BR Luxury Apartments</h2>
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
                    {apartment.amenities.slice(0, 5).map(amenity => (
                      <span key={amenity} className={styles.amenityTag}>{amenity}</span>
                    ))}
                    {apartment.amenities.length > 5 && (
                      <span className={styles.amenityTagMore}>+{apartment.amenities.length - 5} more</span>
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
                        <li>Ensuite bathroom with shower and tub</li>
                        <li>Walk-in closet with safe</li>
                        <li>Private balcony access</li>
                      </ul>
                    </div>
                    <div className={styles.featureColumn}>
                      <h4>Second Bedroom</h4>
                      <ul className={styles.featuresList}>
                        <li>Queen-size bed with premium linens</li>
                        <li>Ensuite bathroom with shower</li>
                        <li>Spacious closet</li>
                        <li>Smart TV</li>
                      </ul>
                    </div>
                    <div className={styles.featureColumn}>
                      <h4>Third Bedroom</h4>
                      <ul className={styles.featuresList}>
                        <li>Two twin beds (can be configured as king)</li>
                        <li>Desk workspace</li>
                        <li>Built-in wardrobe</li>
                        <li>Reading nook</li>
                      </ul>
                    </div>
                  </div>
                  
                  <h3>Living Areas</h3>
                  <div className={styles.featuresSection}>
                    <div className={styles.featureColumn}>
                      <h4>Living Room</h4>
                      <ul className={styles.featuresList}>
                        <li>Spacious seating area with sofa and chairs</li>
                        <li>65" Smart TV with streaming services</li>
                        <li>Sound system</li>
                        <li>Access to main balcony/terrace</li>
                      </ul>
                    </div>
                    <div className={styles.featureColumn}>
                      <h4>Kitchen & Dining</h4>
                      <ul className={styles.featuresList}>
                        <li>Fully equipped gourmet kitchen</li>
                        <li>Premium appliances</li>
                        <li>Dining table seating for 6-8 people</li>
                        <li>Breakfast bar with additional seating</li>
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
                    <p><strong>Hours:</strong> 24hrs, Monday-Sunday</p>
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
    </>
  );
};

export default CategoryPage3BR;