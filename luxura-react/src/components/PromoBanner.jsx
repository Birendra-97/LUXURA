import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function PromoBanner() {
  const ref = useScrollAnimation();

  return (
    <section className="promo-banner" id="about">
      <div className="container">
        <div className="promo-card animate-in" ref={ref}>
          <div className="promo-content">
            <span className="section-label">Why Choose Luxura</span>
            <h2>Furniture That <span>Defines</span> Your Space</h2>
            <p>Every piece in our collection is designed by world-class artisans using sustainably sourced materials. We believe in furniture that lasts generations, not seasons.</p>
            <div className="promo-features">
              <div className="promo-feature">
                <span className="icon">✦</span> Sustainable Materials
              </div>
              <div className="promo-feature">
                <span className="icon">✦</span> Free Worldwide Shipping
              </div>
              <div className="promo-feature">
                <span className="icon">✦</span> 10-Year Warranty
              </div>
            </div>
            <a href="#products" className="btn btn-primary" id="explore-btn" onClick={(e) => {
              e.preventDefault();
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Explore Now <span className="arrow">→</span>
            </a>
          </div>
          <div className="promo-image">
            <img src="/images/armchair.png" alt="Luxurious sage green velvet armchair" />
          </div>
        </div>
      </div>
    </section>
  );
}
