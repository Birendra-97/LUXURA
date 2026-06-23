import { useCart } from '../context/CartContext';

export default function Toast() {
  const { toast } = useCart();

  return (
    <div className={`toast ${toast.show ? 'show' : ''}`} id="toast">
      <span className="toast-icon">✓</span>
      <span className="toast-message" id="toast-message">{toast.message}</span>
    </div>
  );
}
