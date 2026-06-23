import { useEffect, useRef } from 'react';

export default function Hero() {
  const statsRef = useRef([]);

  useEffect(() => {
    // Counter animation
    const targets = [
      { el: statsRef.current[0], target: 2500, suffix: '+' },
      { el: statsRef.current[1], target: 150, suffix: '+' },
      { el: statsRef.current[2], target: 12, suffix: '' }
    ];

    const timer = setTimeout(() => {
      targets.forEach(({ el, target, suffix }) => {
        if (!el) return;
        let current = 0;
        const increment = target / 60;
        function step() {
          current += increment;
          if (current >= target) {
            el.textContent = target.toLocaleString() + suffix;
            return;
          }
          el.textContent = Math.floor(current).toLocaleString() + suffix;
          requestAnimationFrame(step);
        }
        step();
      });
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img src="/images/hero.png" alt="Luxurious modern living room interior" />
      </div>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            New Collection 2026
          </div>
          <h1>Crafted for<br />Timeless Living</h1>
          <p>Discover handcrafted furniture that blends artisan craftsmanship with modern design. Each piece tells a story of elegance, comfort, and uncompromising quality.</p>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary" id="shop-now-btn" onClick={(e) => scrollTo(e, 'products')}>
              Shop Collection
              <span className="arrow">→</span>
            </a>
            <a href="#about" className="btn btn-secondary" id="our-story-btn" onClick={(e) => scrollTo(e, 'about')}>
              Our Story
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="number" ref={el => statsRef.current[0] = el}>2,500+</div>
              <div className="label">Happy Customers</div>
            </div>
            <div className="hero-stat">
              <div className="number" ref={el => statsRef.current[1] = el}>150+</div>
              <div className="label">Unique Designs</div>
            </div>
            <div className="hero-stat">
              <div className="number" ref={el => statsRef.current[2] = el}>12</div>
              <div className="label">Years of Craft</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
