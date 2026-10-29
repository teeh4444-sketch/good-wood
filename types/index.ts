export type ProductStatus = 'published' | 'draft';
export type ProductCondition = 'Excellent' | 'Good' | 'Fair' | 'For restoration';

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

export const categories = [
  'Sofas and couches',
  'Beds and bed frames',
  'Mattresses',
  'Wardrobes',
  'Dressers and bedside tables',
  'Dining tables and chairs',
  'TV stands',
  'Office desks and chairs',
  'Cabinets and bookshelves',
  'Other furniture',
  'Clearance deals',
] as const;
