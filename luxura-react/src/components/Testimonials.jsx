import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { testimonials } from '../data/products';

export default function Testimonials() {
  const headerRef = useScrollAnimation();

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header animate-in" ref={headerRef}>
          <span className="section-label">Customer Love</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real stories from people who transformed their homes with Luxura furniture.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(t => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  const ref = useScrollAnimation();

  return (
    <div className="testimonial-card animate-in" ref={ref}>
      <div className="testimonial-quote">&ldquo;</div>
      <p className="testimonial-text">{testimonial.text}</p>
      <div className="testimonial-author">
        <div className="testimonial-avatar">{testimonial.initials}</div>
        <div className="testimonial-author-info">
          <h4>{testimonial.author}</h4>
          <span>{testimonial.role}</span>
          <div className="testimonial-stars">★★★★★</div>
        </div>
      </div>
    </div>
  );
}
