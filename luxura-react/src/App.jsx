import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import PromoBanner from './components/PromoBanner';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    // Scroll to products section
    setTimeout(() => {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <CartProvider>
      <Header />
      <Hero />
      <Categories onCategoryClick={handleFilterChange} />
      <Products activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <PromoBanner />
      <Testimonials />
      <Newsletter />
      <Footer />
      <CartDrawer />
      <Toast />
    </CartProvider>
  );
}
