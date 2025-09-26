// src/pages/HomePage/CategoryPage/CategoryPage.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Title, Meta, Link as HeadLink } from 'react-head';
import styles from './CategoryPage.module.css';
import Navbar from '../../../components/Navbar/Navbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CategoryPage = () => {
  useParams();
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [date, setDate] = useState(new Date());

  // Data for 1BR apartments
  const apartments = [
    {
      id: 1,
      name: '1BR Apartment',
      description: 'Beautifully designed 1-bedroom apartment located within the heart of Nyali. Perfect for couples seeking a romantic/working indoors getaway.',
      price: 35,
      images: ['/images/apartments/1br-2.jpg', '/images/apartments/1br-3.jpg', '/images/apartments/1br-4.jpg', '/images/apartments/1br-5.jpg', '/images/apartments/1br-6.jpg', '/images/apartments/1br-7.jpg', '/images/apartments/1br-8.jpg', '/images/apartments/1br-9.jpg',],
      amenities: ['Air Conditioning', 'Free WiFi', 'Fully Equipped Kitchen', 'Smart TV', '2 Balconies', 'Hot water Shower', 'Ample parking', 'Laundry Service', '24/7 Security'],
      availability: [/* dates would go here */],
      termsAndConditions: [
        "minimum stay: 2 nights",
        "Check-out: 10:00 AM",
        "No smoking",
        "No loud music or noise after 10:00 PM",
        "No illegal activities",
        "No unregistered guests",
        "No pets",
        "No parties or events",
        "Security deposit: $100 (refundable)",
        "50% payment required to secure booking",
      ]
    },
    {
      id: 2,
      name: '1BR Apartment2',
      description: 'Beautifully designed 1-bedroom apartment located within the heart of Nyali. Perfect for couples seeking a romantic/working indoors getaway.',
      price: 40,
      images: ['/images/apartments/1br2-1.jpg', '/images/apartments/1br2-2.jpg', '/images/apartments/1br2-8.jpg', '/images/apartments/1br2-9.jpg', '/images/apartments/1br2-3.jpg', '/images/apartments/1br2-4.jpg', '/images/apartments/1br2-4.jpg', '/images/apartments/1br2-5.jpg', '/images/apartments/1br2-6.jpg', '/images/apartments/1br2-7.jpg'], 
      amenities: ['Air Conditioning', 'Free WiFi', 'Fully Equipped Kitchen', 'Smart TV', 'Washing Machine'],
      availability: [/* dates would go here */],
      termsAndConditions: [
        "minimum stay: 2 nights",
        "Check-out: 10:00 AM",
        "No smoking",
        "No loud music or noise after 10:00 PM",
        "No illegal activities",
        "No unregistered guests",
        "No pets",
        "No parties or events",
        "Security deposit: $100 (refundable)",
        "50% payment required to secure booking",
      ]
    },
    {
      id: 3,
      name: '1BR Apartment3',
      description: 'Peaceful 1-bedroom apartment overlooking beautiful gardens. The perfect retreat for those seeking tranquility.',
      price: 35,
      images: ['/images/apartments/1br3-1.jpg', '/images/apartments/1br3-2.jpg', '/images/apartments/1br3-3.jpg', '/images/apartments/1br3-4.jpg', '/images/apartments/1br3-5.jpg'],
      amenities: ['Air Conditioning', 'Free WiFi', 'Fully Equipped Kitchen', 'Balcony', 'Garden View'],
      availability: [/* dates would go here */],
      termsAndConditions: [
        "minimum stay: 2 nights",
        "Check-out: 10:00 AM",
        "No smoking",
        "No loud music or noise after 10:00 PM",
        "No illegal activities",
        "No unregistered guests",
        "No pets",
        "No parties or events",
        "Security deposit: $100 (refundable)",
        "50% payment required to secure booking",
      ]
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
    <>
      <Title>Heavenly Stays Mombasa - 1BR Furnished Apartments | air bnb mombasa</Title>
      <Meta name="description" content="Explore our 1BR furnished apartments perfect for solo travelers, couples, and business guests." />
      <Meta name="keywords" content="1BR apartments Nyali, 1br BNB Mombasa, air bnb mombasa, furnished apartments mombasa, vacation rentals, business stays, couples getaway mombasa" />
      <HeadLink rel="canonical" href="https://www.heavenlystays.com/category/1br-furnished-apartments" />
      <Meta property="og:title" content="Heavenly Stays Mombasa - 1BR Furnished Apartments" />
      <Meta property="og:description" content="Explore our 1BR furnished apartments perfect for solo travelers, couples, and business guests." />
    <div className={styles.categoryPage}>
      <Navbar />
      
      <header className={styles.categoryHeader}>
        <div className={styles.overlay}>
          <div className={styles.container}>
            <h1>1BR Furnished Apartments bnb</h1>
            <p>Perfectly designed for solo travelers, couples, and business guests</p>
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
                <option>$50 - $100</option>
                <option>$100 - $150</option>
                <option>$150+</option>
              </select>
            </div>
            <div className={styles.filterGroup}>
              <label>Amenities</label>
              <select>
                <option>All Amenities</option>
                <option>Ocean View</option>
                <option>Balcony</option>
                <option>Washing Machine</option>
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
          <h2>Available 1BR Apartments</h2>
          <div className={styles.apartmentList}>
            {apartments.map(apartment => (
              <div key={apartment.id} className={styles.apartmentCard}>
                <div className={styles.cardImage} style={{backgroundImage: `url('${process.env.PUBLIC_URL}${apartment.images[0]}')`}}>
                  <div className={styles.priceTag}>${apartment.price}/night</div>
                  <div className={styles.apartmentId}>ID: HS1BR-{apartment.id}</div>
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
                  
                  <div className={styles.cardActions}>
                    <button 
                      className={styles.viewDetailsButton}
                      onClick={() => handleUnitSelect(apartment)}
                    >
                      View Details & Book
                    </button>
                  </div>
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
              <h2>{selectedUnit.name} <span className={styles.unitId}>(ID: HS1BR-{selectedUnit.id})</span></h2>
              
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
                  
                  <h3>Amenities</h3>
                  <div className={styles.amenitiesList}>
                    {selectedUnit.amenities.map(amenity => (
                      <div key={amenity} className={styles.amenityItem}>
                        <span className={styles.amenityIcon}>✓</span> {amenity}
                      </div>
                    ))}
                  </div>
                  
                  <h3>Terms & Conditions</h3>
                  <div className={styles.fullTermsList}>
                    {selectedUnit.termsAndConditions.map((term, index) => (
                      <div key={index} className={styles.termItem}>
                        <span className={styles.termIcon}>•</span> {term}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={styles.bookingPanel}>
                  <h3>Book This Apartment</h3>
                  <div className={styles.apartmentIdTag}>ID: HS1BR-{selectedUnit.id}</div>
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
    </>
  );
};

export default CategoryPage;