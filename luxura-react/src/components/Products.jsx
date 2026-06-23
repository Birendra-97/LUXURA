import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { products } from '../data/products';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'living', label: 'Living' },
  { id: 'bedroom', label: 'Bedroom' },
  { id: 'dining', label: 'Dining' },
  { id: 'office', label: 'Office' }
];

export default function Products({ activeFilter, onFilterChange }) {
  const headerRef = useScrollAnimation();

  const filtered = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter);

  return (
    <section className="featured" id="products">
      <div className="container">
        <div className="featured-header animate-in" ref={headerRef}>
          <div>
            <span className="section-label">Our Collection</span>
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">Handpicked pieces designed to elevate your living space with style and comfort.</p>
          </div>
          <div className="filter-tabs">
            {filters.map(f => (
              <button
                key={f.id}
                className={`filter-tab ${activeFilter === f.id ? 'active' : ''}`}
                onClick={() => onFilterChange(f.id)}
                id={`filter-${f.id}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        <div className="products-grid" id="products-grid">
          {filtered.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
}

function ProductCard({ product, index }) {
  const { addToCart, showToast } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  const handleWishlist = () => {
    showToast(`${product.name} added to wishlist ♡`);
  };

  const handleQuickView = () => {
    showToast(`Quick view: ${product.name}`);
  };

  return (
    <div
      className="product-card"
      id={`product-${product.id}`}
      style={{ animation: `fadeInUp 0.5s ease ${index * 0.1}s both` }}
    >
      <div className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && (
          <span className={`product-badge badge-${product.badge}`}>{product.badge}</span>
        )}
        <div className="product-quick-actions">
          <button className="quick-action-btn" onClick={handleWishlist} aria-label="Add to wishlist">♡</button>
          <button className="quick-action-btn" onClick={handleQuickView} aria-label="Quick view">👁</button>
        </div>
      </div>
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          <span className="stars">{getStars(product.rating)}</span>
          <span className="rating-count">({product.reviews})</span>
        </div>
        <div className="product-footer">
          <div className="product-price">
            <span className="price-current">${product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="price-original">${product.originalPrice.toLocaleString()}</span>
            )}
          </div>
          <button
            className={`add-to-cart-btn ${added ? 'added' : ''}`}
            onClick={handleAdd}
            aria-label="Add to cart"
            id={`add-cart-${product.id}`}
          >
            {added ? '✓' : '+'}
          </button>
        </div>
      </div>
    </div>
  );
}
