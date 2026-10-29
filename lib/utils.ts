import { clsx } from 'clsx';
import type { Product } from '@/types';

export function formatPrice(priceCents: number) {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 2,
  }).format(priceCents / 100);
}

export function formatPriceShort(priceCents: number) {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    maximumFractionDigits: 0,
  }).format(priceCents / 100);
}

export function cn(...classes: Array<string | undefined | false | null>) {
  return clsx(classes);
}

export function buildWhatsAppLink(message: string, number = '27846138734') {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function buildProductEnquiry(product: Product) {
  return `Hello, I am interested in ${product.name}, priced at ${formatPrice(product.priceCents)}. Is it still available? Product link: https://goodwood.co.app/product/${product.slug}.`;
}
