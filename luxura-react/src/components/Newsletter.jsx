import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Newsletter() {
  const { showToast } = useCart();
  const [email, setEmail] = useState('');
  const ref = useScrollAnimation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      showToast(`Welcome! Check ${email} for your 15% discount code.`);
      setEmail('');
    }
  };

  return (
    <section className="newsletter" id="contact">
      <div className="container">
        <div className="newsletter-card animate-in" ref={ref}>
          <span className="section-label">Stay Connected</span>
          <h2 className="section-title">Get 15% Off Your First Order</h2>
          <p className="section-subtitle">Subscribe to our newsletter for exclusive deals, new arrivals, and design inspiration.</p>
          <form className="newsletter-form" id="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              id="newsletter-email"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-primary" id="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
