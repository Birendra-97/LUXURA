import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { totalItems, toggleCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="container">
        <a href="#" className="logo" id="logo" onClick={(e) => handleNavClick(e, 'home')}>
          <div className="logo-icon">🪑</div>
          LUXURA
        </a>

        <nav className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`} id="nav-links">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          <a href="#categories" onClick={(e) => handleNavClick(e, 'categories')}>Categories</a>
          <a href="#products" onClick={(e) => handleNavClick(e, 'products')}>Shop</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>Reviews</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        </nav>

        <div className="nav-actions">
          <button className="nav-action-btn" id="search-btn" aria-label="Search">🔍</button>
          <button className="nav-action-btn" id="wishlist-btn" aria-label="Wishlist">♡</button>
          <button className="nav-action-btn" id="cart-btn" aria-label="Shopping Cart" onClick={toggleCart}>
            🛒
            <span className="cart-badge" id="cart-badge">{totalItems}</span>
          </button>
          <button
            className={`hamburger ${mobileOpen ? 'active' : ''}`}
            id="hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
