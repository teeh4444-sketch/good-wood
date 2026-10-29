import Link from 'next/link';
import { ArrowRight, CircleDollarSign, MessageCircleMore } from 'lucide-react';
import { Product } from '@/types';
import { formatPrice } from '@/lib/utils';

export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative">
        <img src={product.images[0]} alt={product.name} className={compact ? 'h-56 w-full object-cover' : 'h-72 w-full object-cover'} />
        {product.clearance && <span className="absolute left-4 top-4 rounded-full bg-red-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">Clearance</span>}
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{product.category}</p>
            <h3 className="mt-2 text-xl font-semibold text-charcoal">{product.name}</h3>
          </div>
          <span className="rounded-full bg-wood-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-wood-700">{product.condition}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-2xl font-semibold text-charcoal">{formatPrice(product.priceCents)}</div>
            {product.comparisonPriceCents && <div className="text-sm text-slate-400 line-through">{formatPrice(product.comparisonPriceCents)}</div>}
          </div>
          <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">{product.stock > 0 ? `${product.stock} in stock` : 'Sold'}</span>
        </div>
        <div className="flex gap-3">
          <Link href={`/product/${product.slug}`} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-charcoal px-4 py-2.5 text-sm font-medium text-white">
            View details <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={`https://wa.me/27846138734?text=${encodeURIComponent(`Hello, I am interested in ${product.name}, priced at ${formatPrice(product.priceCents)}. Is it still available?`)}`} className="inline-flex items-center justify-center rounded-full bg-green-600 px-4 py-2.5 text-sm font-medium text-white">
            <MessageCircleMore className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
