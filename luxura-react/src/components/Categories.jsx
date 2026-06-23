import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { categories } from '../data/products';

export default function Categories({ onCategoryClick }) {
  const headerRef = useScrollAnimation();

  return (
    <section className="categories" id="categories">
      <div className="container">
        <div className="categories-header animate-in" ref={headerRef}>
          <span className="section-label">Browse by Category</span>
          <h2 className="section-title">Find Your Perfect Piece</h2>
          <p className="section-subtitle">Explore our curated collections designed to transform every room in your home.</p>
        </div>
        <div className="categories-grid">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} onClick={() => onCategoryClick(cat.id)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category, onClick }) {
  const cardRef = useScrollAnimation();

  return (
    <div
      className="category-card animate-in"
      ref={cardRef}
      onClick={onClick}
      id={`cat-${category.id}`}
    >
      <div className="category-icon">{category.icon}</div>
      <div
        className="category-gradient"
        style={{ background: `linear-gradient(180deg, ${category.gradient} 0%, rgba(14,12,11,0.95) 100%)` }}
      ></div>
      <div className="category-info">
        <h3>{category.name}</h3>
        <span>{category.count} Products</span>
      </div>
    </div>
  );
}
