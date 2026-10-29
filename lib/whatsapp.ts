export function buildWhatsAppLink(message: string, number = '27846138734') {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function buildProductEnquiry(product: Product) {
  return `Hello, I am interested in ${product.name}, priced at R${(product.priceCents / 100).toFixed(2)}. Is it still available? Product link: https://goodwood.co.app/product/${product.slug}.`;
}

export function formatPrice(priceCents: number) {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 2,
  }).format(priceCents / 100);
}
