import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Menu, X, ShoppingBag, ChevronDown, ChevronUp, Star, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import './App.css';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Emojis replaced with Bootstrap Icon classes and brand colors
  const categories = [
    { title: "Pure Ghee Sweets", iconClass: "bi bi-fire", iconColor: "#ff7043", desc: "Motichoor, Laddus & Pinni" },
    { title: "Kaju Delicacies", iconClass: "bi bi-award-fill", iconColor: "#ffb703", desc: "Kaju Katli, Rolls & Pista Rolls" },
    { title: "Bengali Mithai", iconClass: "bi bi-bucket-fill", iconColor: "#fb8500", desc: "Rasgulla, Gulab Jamun & Sandesh" },
    { title: "Dry Fruit Box", iconClass: "bi bi-gift-fill", iconColor: "#e63946", desc: "Luxury Roasted Nut Hampers" }
  ];

  const bestSellers = [
    { name: "Royal Kesar Rasgulla", price: "₹450 / kg", img: "https://i.pinimg.com/736x/a4/b6/83/a4b683690e6c3c5d9b43b668f2ef19e9.jpg", rating: 4.9, badge: "Best Seller" },
    { name: "Pure Ghee Laddu", price: "₹520 / kg", img: "https://i.pinimg.com/736x/04/93/49/04934921de2075a7c19f880fd7394d53.jpg", rating: 5.0, badge: "Top Rated" },
    { name: "Silver Leaf Kaju Katli", price: "₹950 / kg", img: "https://i.pinimg.com/736x/65/23/b4/6523b47bdf51b6ada6839ea1e86d0c17.jpg", rating: 4.8, badge: "Popular" },
    { name: "Pistachio Gulab Jamun", price: "₹480 / kg", img: "https://i.pinimg.com/736x/7a/5f/8b/7a5f8be7d635cd0bf3248539821090aa.jpg", rating: 4.9, badge: "Choice" },
  ];

  const newArrivals = [
    { name: "Rose Saffron Peda", price: "₹650 / kg", img: "https://i.pinimg.com/736x/57/45/7b/57457b3ceb831c1b4f6dffc9c6d55066.jpg", rating: 4.9, badge: "New" },
    { name: "Anjeer Dryfruit Barfi", price: "₹1,100 / kg", img: "https://i.pinimg.com/1200x/37/eb/1b/37eb1b3cca57f0ae0014fe3a35256ad5.jpg", rating: 5.0, badge: "New" },
    { name: "Badam Milk Mysore Pak", price: "₹720 / kg", img: "https://i.pinimg.com/736x/26/52/d8/2652d87fc0dcabc75b4c2fe565abadde.jpg", rating: 4.8, badge: "New" },
    { name: "Kesar Pista Kalakand", price: "₹850 / kg", img: "https://i.pinimg.com/736x/3b/79/e4/3b79e42d7ebfb4c909275a3e8e66022e.jpg", rating: 4.9, badge: "New" },
  ];

  const collections = [
    { title: "Diwali Celebration Trunk", desc: "An assortment of 8 royal sweets & dry fruits", img: "https://i.pinimg.com/736x/c8/8e/ff/c88eff871463fdd682c48e2cf0ba6e39.jpg" },
    { title: "Royal Corporate Hampers", desc: "Custom branded gift packaging for business clients", img: "https://i.pinimg.com/736x/91/55/7a/91557ad78412d42c0632f20d9ff0f47c.jpg" },
  ];

  const reviews = [
    { name: "vicky", text: "The Kaju Katli was amazingly fresh and melt-in-mouth! Ordered 20 gift boxes for my office staff during Diwali.", rating: 5 },
    { name: "udhay", text: "Pure desi ghee aroma in every piece of Motichoor Laddu. Best authentic sweets shop delivery in town!", rating: 5 },
    { name: "sara", text: "The Diwali mithai trunk packaging looked so luxurious and royal. Will definitely order every festival season.", rating: 5 },
    { name: "Ananya", text: "Prompt express delivery and vacuum packaging preserved the texture perfectly. Highly recommended!", rating: 5 },
  ];

  const faqs = [
    { q: "Are your sweets made with 100% pure desi ghee?", a: "Yes, all our authentic Indian traditional sweets are crafted using pure organic A2 Desi Ghee." },
    { q: "Do you provide nationwide shipping for Diwali orders?", a: "We provide vacuum-sealed express delivery across India to preserve freshness." },
    { q: "Can we customize sweet gift hampers for corporate events?", a: "Absolutely! We offer custom branding, tailored sweet boxes, and bulk corporate discount packaging." }
  ];

  return (
    <div className="sweet-shop-app">
      {/* 1. NAVBAR */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#" className="logo">
           Sara Sweet
          </a>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#categories" onClick={() => setMobileMenuOpen(false)}>Categories</a></li>
            <li><a href="#bestsellers" onClick={() => setMobileMenuOpen(false)}>Best Sellers</a></li>
            <li><a href="#newarrivals" onClick={() => setMobileMenuOpen(false)}>New Arrivals</a></li>
            <li><a href="#diwali" onClick={() => setMobileMenuOpen(false)}>Diwali Offers</a></li>
            <li><a href="#reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>

          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
            <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShoppingBag size={16} /> Cart (0)
            </button>
            <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO WITH BACKGROUND IMAGE */}
      <section id="hero" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content" data-aos="zoom-in">
          <h1>Experience Pure Royal Indian Sweets</h1>
          <p>Handcrafted with pure desi ghee, premium nuts, and decades of traditional heritage.</p>
          <div className="hero-btns">
            <a href="#bestsellers" className="btn-primary">Explore Sweets Menu</a>
            <a href="#diwali" className="btn-secondary" style={{ background: '#ffffff', color: 'var(--primary-purple)', borderColor: '#ffffff', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Diwali Specials <i className="bi bi-stars"></i>
            </a>
          </div>
        </div>
      </section>

      {/* 3. BRANDS */}
      <section className="brands-section" data-aos="fade-up">
        <div className="container">
          <div className="brands-grid">
            <span className="brand-item">100% ORGANIC INGREDIENTS</span>
            <span className="brand-item">FSSAI CERTIFIED</span>
            <span className="brand-item">EXPRESS NATIONWIDE SHIPPING</span>
            <span className="brand-item">ROYAL RECIPES SINCE 1984</span>
          </div>
        </div>
      </section>

      {/* 4. CATEGORIES (Bootstrap Icons applied) */}
      <section id="categories" className="category-section container">
        <div className="section-title" data-aos="fade-up">
          <h2>Shop By Category</h2>
          <p>Discover delicacies handcrafted for every celebration</p>
        </div>
        <div className="category-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="category-card" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="category-icon" style={{ color: cat.iconColor, fontSize: '2.5rem', marginBottom: '12px' }}>
                <i className={cat.iconClass}></i>
              </div>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ABOUT */}
      <section id="about" className="about-section container">
        <div className="about-grid">
          <div className="about-img" data-aos="fade-right">
            <img src="https://i.pinimg.com/736x/8b/9e/12/8b9e12e58e383a5446ed1579e927d8c3.jpg" alt="Pure Ghee Sweets Crafting" />
          </div>
          <div className="about-content" data-aos="fade-left">
            <h2>Crafting Sweet Memories Since 1984</h2>
            <p>Every bite of our sweets tells a story of authenticity and passion. Prepared daily by master artisans, we combine traditional recipes passed through generations with modern hygiene standards.</p>
            <p>From rich Kaju Katli to warm Gulab Jamuns, we bring purity and sweetness to your special celebrations.</p>
            <div style={{ marginTop: '0.5rem' }}>
              <button className="btn-primary">Read Our Story</button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BEST-SELLING PRODUCTS */}
      <section id="bestsellers" className="products-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Best-Selling Products</h2>
            <p>Our most loved signatures ordered by thousands daily</p>
          </div>
          <div className="product-grid">
            {bestSellers.map((item, index) => (
              <div key={index} className="product-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <span className="product-badge">{item.badge}</span>
                <img src={item.img} alt={item.name} className="product-img" />
                <div className="product-info">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#eab308', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                    <Star size={14} fill="#eab308" /> {item.rating}
                  </div>
                  <h3>{item.name}</h3>
                  <p>Freshly prepared in pure A2 Ghee.</p>
                  <div className="product-bottom">
                    <span className="price">{item.price}</span>
                    <button className="btn-primary" style={{ padding: '0.4rem 0.9rem', fontSize: '0.85rem' }}>Order Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NEW ARRIVALS */}
      <section id="newarrivals" className="products-section" style={{ background: 'var(--soft-purple-bg)' }}>
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>New Arrivals</h2>
            <p>Fresh festive recipes crafted specially for this season</p>
          </div>
          <div className="product-grid">
            {newArrivals.map((item, index) => (
              <div key={index} className="product-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <span className="product-badge" style={{ background: 'var(--secondary-purple)' }}>{item.badge}</span>
                <img src={item.img} alt={item.name} className="product-img" />
                <div className="product-info">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#eab308', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                    <Star size={14} fill="#eab308" /> {item.rating}
                  </div>
                  <h3>{item.name}</h3>
                  <p>Special edition recipe infused with saffron and pistachios.</p>
                  <div className="product-bottom">
                    <span className="price">{item.price}</span>
                    <button className="btn-primary" style={{ padding: '0.4rem 0.9rem', fontSize: '0.85rem' }}>Order Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FEATURED COLLECTIONS */}
      <section className="collections-section container">
        <div className="section-title" data-aos="fade-up">
          <h2>Featured Collections</h2>
          <p>Curated luxury gift trunks and corporate hampers</p>
        </div>
        <div className="collections-grid">
          {collections.map((col, idx) => (
            <div key={idx} className="collection-card" data-aos="zoom-in" data-aos-delay={idx * 150}>
              <img src={col.img} alt={col.title} />
              <div className="collection-overlay">
                <h3>{col.title}</h3>
                <p>{col.desc}</p>
                <button className="btn-primary" style={{ width: 'fit-content', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Explore Trunk <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. DIWALI OFFERS */}
      <section id="diwali" className="diwali-wrapper">
        <div className="diwali-section" data-aos="zoom-in-up">
          <div style={{ textAlign: 'center', width: '100%' }}>
            <h2>Grand Diwali Special Offers</h2>
            <p style={{ fontSize: '0.95rem', opacity: '0.9' }}>Pre-order your festive gift boxes and get exclusive discounts.</p>
            <div className="diwali-grid">
              <div className="diwali-card" data-aos="flip-left" data-aos-delay="100">
                <h3>Family Delight Pack</h3>
                <div className="discount">20% OFF</div>
                <p style={{ fontSize: '0.9rem' }}>On orders above ₹1,999</p>
                <button className="btn-primary" style={{ background: '#fde047', color: '#4c1d95', marginTop: '1rem', width: '100%' }}>Claim Offer</button>
              </div>
              <div className="diwali-card" data-aos="flip-left" data-aos-delay="200">
                <h3>Corporate Gifting Box</h3>
                <div className="discount">30% OFF</div>
                <p style={{ fontSize: '0.9rem' }}>Bulk orders above 50 Boxes</p>
                <button className="btn-primary" style={{ background: '#fde047', color: '#4c1d95', marginTop: '1rem', width: '100%' }}>Get Quote</button>
              </div>
              <div className="diwali-card" data-aos="flip-left" data-aos-delay="300">
                <h3>Royal Mithai Trunk</h3>
                <div className="discount">FREE SHIP</div>
                <p style={{ fontSize: '0.9rem' }}>Includes Assorted Dryfruit Sweets</p>
                <button className="btn-primary" style={{ background: '#fde047', color: '#4c1d95', marginTop: '1rem', width: '100%' }}>Order Box</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. REVIEWS */}
      <section id="reviews" className="reviews-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Customer Reviews</h2>
            <p>See why thousands of sweet lovers choose Sara Sweets</p>
          </div>
          <div className="reviews-grid">
            {reviews.map((rev, idx) => (
              <div key={idx} className="review-card" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div>
                  <div className="review-stars">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#eab308" />
                    ))}
                  </div>
                  <p className="review-text">"{rev.text}"</p>
                </div>
                <span className="review-author">{rev.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PROMOTIONS */}
      <section className="promo-section container">
        <div className="promo-banner" data-aos="fade-right">
          <div className="promo-text">
            <h2>Special Season Combo</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.2rem', fontSize: '0.95rem' }}>Get a complimentary box of Dry Fruit Laddus on purchases over ₹2,500.</p>
            <button className="btn-primary">Claim Special Promotion</button>
          </div>
          <img src="https://i.pinimg.com/1200x/04/ed/7d/04ed7d30a8ce6a6dfa416f571b71c84c.jpg" alt="Special Promo Sweets" />
        </div>
      </section>

      {/* 12. FAQ */}
      <section id="faq" className="faq-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about our products and shipping</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item" data-aos="fade-up" data-aos-delay={idx * 100} onClick={() => toggleFaq(idx)}>
                <div className="faq-question">
                  <span>{faq.q}</span>
                  {activeFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
                {activeFaq === idx && <div className="faq-answer">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. CONTACT */}
      <section id="contact" className="contact-section container">
        <div className="section-title" data-aos="fade-up">
          <h2>Get In Touch</h2>
          <p>Order custom sweet boxes or visit our flagship store</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info-box" data-aos="fade-right">
            <h3 style={{ color: 'var(--primary-purple)', fontSize: '1.3rem', marginBottom: '0.4rem', textAlign: 'center' }}>Visit Our Store</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.5', fontSize: '0.9rem', textAlign: 'center' }}>Experience hot, freshly made sweets prepared live at our counter.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}><MapPin color="var(--primary-purple)" size={18} /><span>12, TamilNadu, Erode</span></div>
              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}><Phone color="var(--primary-purple)" size={18} /><span>+91 7305195172</span></div>
              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}><Mail color="var(--primary-purple)" size={18} /><span>sarasweets@gmail.com</span></div>
            </div>
          </div>
          <form className="contact-form" data-aos="fade-left" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email Address" required />
            <textarea rows="3" placeholder="Your Message or Bulk Order Details" required></textarea>
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
          </form>
        </div>
      </section>

      {/* 14. FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4> Sara Sweets</h4>
              <p>Bringing pure happiness and authentic royal Indian sweets to your doorstep.</p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#categories">Categories</a></li>
                <li><a href="#bestsellers">Best Sellers</a></li>
                <li><a href="#diwali">Diwali Offers</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Specialties</h4>
              <ul>
                <li><a href="#">Kaju Sweets</a></li>
                <li><a href="#">Pure Ghee Laddus</a></li>
                <li><a href="#">Bengali Sweets</a></li>
                <li><a href="#">Dry Fruit Boxes</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Newsletter</h4>
              <p style={{ marginBottom: '0.8rem' }}>Subscribe for festival discounts.</p>
              <input type="email" placeholder="Enter your email" style={{ padding: '0.7rem', width: '100%', borderRadius: '6px', border: 'none', marginBottom: '0.6rem', fontSize: '0.85rem', textAlign: 'center' }} />
              <button className="btn-primary" style={{ width: '100%', padding: '0.6rem', fontSize: '0.85rem' }}>Subscribe</button>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Sara Sweets. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}