export type ProductCondition = 'Excellent' | 'Good' | 'Fair' | 'For restoration';
export type ProductStatus = 'published' | 'draft' | 'archived';

export type Product = {
  id: string;
  slug: string;
  name: string;
  sku: string;
  category: string;
  description: string;
  priceCents: number;
  comparisonPriceCents?: number;
  condition: ProductCondition;
  brand?: string;
  color: string;
  material: string;
  dimensions: string;
  images: string[];
  stock: number;
  status: ProductStatus;
  featured: boolean;
  clearance: boolean;
  newArrival: boolean;
  deliveryAvailable: boolean;
  collectionAvailable: boolean;
  damageDisclosure: string;
  createdAt: string;
};

export const products: Product[] = [
  {
    id: 'prod-001',
    slug: 'ashwood-3-seater-sofa',
    name: 'Ashwood 3-Seater Sofa',
    sku: 'GW-SOF-001',
    category: 'Sofas and couches',
    description: 'A warm-toned three-seater sofa with a sturdy frame and clean profile. Ideal for lounge spaces and ready for collection or local delivery.',
    priceCents: 499900,
    comparisonPriceCents: 729900,
    condition: 'Good',
    brand: 'Ashwood',
    color: 'Walnut brown',
    material: 'Wood and fabric',
    dimensions: '200 cm x 90 cm x 82 cm',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    ],
    stock: 1,
    status: 'published',
    featured: true,
    clearance: false,
    newArrival: true,
    deliveryAvailable: true,
    collectionAvailable: true,
    damageDisclosure: 'Minor wear on the right arm and a small light scuff on the base.',
    createdAt: '2025-02-12T09:00:00Z',
  },
  {
    id: 'prod-002',
    slug: 'classic-wooden-bed-frame',
    name: 'Classic Wooden Bed Frame',
    sku: 'GW-BED-002',
    category: 'Beds and bed frames',
    description: 'Solid wood bed frame with a timeless profile and low maintenance finish. Good for guest rooms or main bedrooms.',
    priceCents: 269900,
    comparisonPriceCents: 385000,
    condition: 'Excellent',
    brand: 'Oakline',
    color: 'Natural oak',
    material: 'Solid wood',
    dimensions: '190 cm x 150 cm x 40 cm',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    ],
    stock: 2,
    status: 'published',
    featured: true,
    clearance: false,
    newArrival: false,
    deliveryAvailable: true,
    collectionAvailable: true,
    damageDisclosure: 'No notable damage; minor surface scuffs visible under close inspection.',
    createdAt: '2025-03-01T11:30:00Z',
  },
  {
    id: 'prod-003',
    slug: 'double-mattress-orthopedic',
    name: 'Double Mattress',
    sku: 'GW-MAT-003',
    category: 'Mattresses',
    description: 'Comfortable double mattress ready for a new home. Clean condition and suitable for everyday use.',
    priceCents: 189900,
    comparisonPriceCents: 299900,
    condition: 'Good',
    brand: 'Comfort Rest',
    color: 'White',
    material: 'Foam and fabric',
    dimensions: '190 cm x 135 cm x 24 cm',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    ],
    stock: 3,
    status: 'published',
    featured: false,
    clearance: false,
    newArrival: true,
    deliveryAvailable: true,
    collectionAvailable: true,
    damageDisclosure: 'Very light surface marks; no visible tears or broken support areas.',
    createdAt: '2025-02-18T14:10:00Z',
  },
  {
    id: 'prod-004',
    slug: 'sliding-door-wardrobe',
    name: 'Sliding Door Wardrobe',
    sku: 'GW-WAR-004',
    category: 'Wardrobes',
    description: 'Spacious two-door wardrobe with sliding panels and internal hanging space. A practical option for bedrooms or staff quarters.',
    priceCents: 329900,
    comparisonPriceCents: 489900,
    condition: 'Fair',
    brand: 'Homeform',
    color: 'Cream laminate',
    material: 'Laminate and metal',
    dimensions: '180 cm x 60 cm x 200 cm',
    images: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    ],
    stock: 1,
    status: 'published',
    featured: false,
    clearance: true,
    newArrival: false,
    deliveryAvailable: true,
    collectionAvailable: true,
    damageDisclosure: 'Minor cabinet wear, a small dent on the left panel, and a soft-close mechanism that needs light adjustment.',
    createdAt: '2025-03-06T10:00:00Z',
  },
  {
    id: 'prod-005',
    slug: 'oak-dresser-nightstand',
    name: 'Oak Dresser and Nightstand Set',
    sku: 'GW-DRE-005',
    category: 'Dressers and bedside tables',
    description: 'Pair of oak furniture pieces with nine drawers in total. Useful for bedroom storage and a clean Scandinavian-inspired look.',
    priceCents: 259900,
    comparisonPriceCents: 419900,
    condition: 'Good',
    brand: 'Hearthline',
    color: 'Natural oak',
    material: 'Wood veneer',
    dimensions: '120 cm x 45 cm x 80 cm',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    ],
    stock: 2,
    status: 'published',
    featured: false,
    clearance: false,
    newArrival: true,
    deliveryAvailable: true,
    collectionAvailable: true,
    damageDisclosure: 'Light wear on the drawer edges and some slight fading at the back edges.',
    createdAt: '2025-01-30T08:55:00Z',
  },
  {
    id: 'prod-006',
    slug: 'wooden-dining-table-set',
    name: 'Wooden Dining Table and Six Chairs',
    sku: 'GW-DIN-006',
    category: 'Dining tables and chairs',
    description: 'This family-sized dining set includes the table and six chairs in a natural finish, suitable for small homes and flats.',
    priceCents: 559900,
    comparisonPriceCents: 799900,
    condition: 'Fair',
    brand: 'Nordic Home',
    color: 'Natural wood',
    material: 'Wood and metal',
    dimensions: '180 cm x 90 cm x 76 cm',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    ],
    stock: 1,
    status: 'published',
    featured: true,
    clearance: false,
    newArrival: false,
    deliveryAvailable: true,
    collectionAvailable: true,
    damageDisclosure: 'Three chair seats show mild wear, and one chair has a minor crack near the frame join.',
    createdAt: '2025-03-10T18:20:00Z',
  },
];

export const featuredProducts = products.filter((product) => product.featured);
export const latestProducts = [...products].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
export const clearanceProducts = products.filter((product) => product.clearance);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}
