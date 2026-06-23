export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <div className="logo-icon">🪑</div>
              LUXURA
            </a>
            <p>Premium handcrafted furniture designed for modern living. Sustainably sourced, beautifully crafted, built to last generations.</p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="Twitter">🐦</a>
              <a href="#" className="social-link" aria-label="Pinterest">📌</a>
              <a href="#" className="social-link" aria-label="Facebook">👤</a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Shop</h4>
            <ul>
              <li><a href="#products">All Furniture</a></li>
              <li><a href="#categories">Living Room</a></li>
              <li><a href="#categories">Bedroom</a></li>
              <li><a href="#categories">Dining Room</a></li>
              <li><a href="#categories">Office</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shipping &amp; Returns</a></li>
              <li><a href="#">Warranty</a></li>
              <li><a href="#">Care Guide</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Luxura. All rights reserved. Crafted with ♥ and premium materials.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
