// ── Product Data ──
export const products = [
  {
    id: 1,
    name: "Oslo Leather Sofa",
    category: "living",
    price: 2499,
    originalPrice: 2999,
    image: "/images/sofa.png",
    badge: "sale",
    rating: 4.9,
    reviews: 128,
    description: "Premium Italian leather 3-seater sofa"
  },
  {
    id: 2,
    name: "Nordic Walnut Dining Table",
    category: "dining",
    price: 1899,
    originalPrice: null,
    image: "/images/dining-table.png",
    badge: "new",
    rating: 4.8,
    reviews: 86,
    description: "Solid walnut wood dining table for 6"
  },
  {
    id: 3,
    name: "Velvet Accent Chair",
    category: "living",
    price: 849,
    originalPrice: 1099,
    image: "/images/armchair.png",
    badge: "trending",
    rating: 4.7,
    reviews: 204,
    description: "Sage green velvet with gold legs"
  },
  {
    id: 4,
    name: "Haven Upholstered Bed",
    category: "bedroom",
    price: 1999,
    originalPrice: null,
    image: "/images/bed.png",
    badge: "new",
    rating: 4.9,
    reviews: 67,
    description: "King size bed with tufted headboard"
  },
  {
    id: 5,
    name: "Industrial Bookshelf",
    category: "office",
    price: 699,
    originalPrice: 899,
    image: "/images/bookshelf.png",
    badge: "sale",
    rating: 4.6,
    reviews: 153,
    description: "Walnut & black metal 5-tier shelf"
  },
  {
    id: 6,
    name: "Minimalist Side Table",
    category: "living",
    price: 349,
    originalPrice: null,
    image: "/images/dining-table.png",
    badge: null,
    rating: 4.5,
    reviews: 92,
    description: "Sleek marble top with brass legs"
  },
  {
    id: 7,
    name: "Serenity Nightstand",
    category: "bedroom",
    price: 449,
    originalPrice: 549,
    image: "/images/bookshelf.png",
    badge: "sale",
    rating: 4.7,
    reviews: 74,
    description: "Oak wood with soft-close drawers"
  },
  {
    id: 8,
    name: "Executive Desk Chair",
    category: "office",
    price: 1199,
    originalPrice: null,
    image: "/images/armchair.png",
    badge: "trending",
    rating: 4.8,
    reviews: 116,
    description: "Ergonomic design with premium leather"
  }
];

export const categories = [
  {
    id: "living",
    name: "Living Room",
    icon: "🛋️",
    count: 24,
    gradient: "rgba(200,149,108,0.1)"
  },
  {
    id: "bedroom",
    name: "Bedroom",
    icon: "🛏️",
    count: 18,
    gradient: "rgba(106,191,123,0.1)"
  },
  {
    id: "dining",
    name: "Dining Room",
    icon: "🍽️",
    count: 15,
    gradient: "rgba(212,168,83,0.1)"
  },
  {
    id: "office",
    name: "Office",
    icon: "💼",
    count: 12,
    gradient: "rgba(147,130,200,0.1)"
  }
];

export const testimonials = [
  {
    id: 1,
    text: "The walnut dining table is absolutely stunning. The craftsmanship is outstanding — every detail is perfect. Our guests always compliment it.",
    author: "Sarah Edwards",
    role: "Interior Designer, London",
    initials: "SE"
  },
  {
    id: 2,
    text: "I've furnished my entire apartment with Luxura pieces. The quality is unmatched and the customer service team is incredibly helpful and responsive.",
    author: "Marcus Kim",
    role: "Architect, New York",
    initials: "MK"
  },
  {
    id: 3,
    text: "The delivery was seamless and the bed frame exceeded my expectations. It transformed my bedroom into a luxury retreat. Highly recommend!",
    author: "Amara Patel",
    role: "Photographer, Toronto",
    initials: "AP"
  }
];
