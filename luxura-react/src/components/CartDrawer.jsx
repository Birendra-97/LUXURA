import { useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, totalItems, totalPrice, toggleCart, removeFromCart, updateQuantity, showToast } = useCart();

  // Prevent body scroll when cart is open
  useEffect(() => {
    document.body.style.overflow = isCartOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isCartOpen]);

  const handleCheckout = () => {
    if (cart.length === 0) {
      showToast('Your cart is empty');
      return;
    }
    showToast('Redirecting to checkout...');
  };

  return (
    <>
      <div
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        id="cart-overlay"
        onClick={toggleCart}
      />
      <aside className={`cart-drawer ${isCartOpen ? 'open' : ''}`} id="cart-drawer">
        <div className="cart-header">
          <h3>Shopping Cart (<span id="cart-count">{totalItems}</span>)</h3>
          <button className="cart-close" onClick={toggleCart} aria-label="Close cart">✕</button>
        </div>

        <div className="cart-items" id="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty" id="cart-empty">
              <div className="empty-icon">🛒</div>
              <p>Your cart is empty</p>
              <p style={{ fontSize: '0.8rem', marginTop: '8px', color: 'var(--color-text-muted)' }}>
                Browse our collection and add items to get started.
              </p>
            </div>
          ) : (
            cart.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">${item.price.toLocaleString()}</div>
                  <div className="cart-item-qty">
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>−</button>
                    <span>{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>✕</button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-subtotal">
            <span>Subtotal</span>
            <span id="cart-total">${totalPrice.toLocaleString()}.00</span>
          </div>
          <button className="checkout-btn" id="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </aside>
    </>
  );
}
