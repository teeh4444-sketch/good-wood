import Link from 'next/link';
import { ArrowRight, MessageCircleMore, Search } from 'lucide-react';
import { ProductCard } from '@/components/site/product-card';
import { products, latestProducts, featuredProducts } from '@/types';
import { businessSettings, categories } from '@/lib/site';

export default function HomePage() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="rounded-[28px] bg-white p-6 shadow-soft md:p-10">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex rounded-full bg-wood-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-wood-700">
                  Goodwood furniture marketplace
                </span>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-charcoal md:text-6xl">
                  Find Your Next Furniture Treasure.
                </h1>
                <p className="mt-5 text-lg text-slate-600">
                  Shop affordable second-hand furniture for your home. Discover unique pieces, great prices, and local service.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/shop" className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-white">
                    Browse Furniture <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/new-arrivals" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-charcoal">
                    Explore New Arrivals
                  </Link>
                  <a href="https://wa.me/27846138734" className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-medium text-white">
                    <MessageCircleMore className="h-4 w-4" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
              <div className="w-full max-w-lg flex-1">
                <div className="rounded-[30px] bg-gradient-to-br from-wood-100 to-white p-4 shadow-soft">
                  <div className="overflow-hidden rounded-[26px] bg-white p-4">
                    <div className="relative h-[420px] overflow-hidden rounded-[20px]">
                      <img
                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
                        alt="Second-hand living room furniture"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wood-700">Browse by category</p>
            <h2 className="mt-2 text-3xl font-semibold text-charcoal">Popular furniture categories</h2>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category} href={`/category/${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-3 h-32 overflow-hidden rounded-xl bg-gradient-to-br from-wood-100 to-slate-100">
                <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80" alt={category} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-lg font-medium text-charcoal">{category}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wood-700">Featured pieces</p>
            <h2 className="mt-2 text-3xl font-semibold text-charcoal">Curated for your home</h2>
          </div>
          <Link href="/shop" className="text-sm font-medium text-wood-700">View all</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wood-700">Latest arrivals</p>
              <h2 className="mt-2 text-3xl font-semibold text-charcoal">Fresh finds for the season</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {latestProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wood-700">Condition transparency</p>
            <h3 className="mt-4 text-2xl font-semibold text-charcoal">Every item is clearly described.</h3>
            <p className="mt-4 text-slate-600">We disclose scratches, stains, repairs, wear, and any missing parts so you can buy with confidence.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wood-700">Collection and delivery</p>
            <h3 className="mt-4 text-2xl font-semibold text-charcoal">Local service with flexible options.</h3>
            <p className="mt-4 text-slate-600">{businessSettings.deliveryAreas}. We offer collection by appointment and local delivery subject to confirmation.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wood-700">Customer support</p>
            <h3 className="mt-4 text-2xl font-semibold text-charcoal">Ask before you buy.</h3>
            <p className="mt-4 text-slate-600">Use WhatsApp to ask about product availability, delivery, or photo requests before arrange collection or delivery.</p>
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wood-200">Search the shop</p>
              <h2 className="mt-2 text-3xl font-semibold">Need something specific?</h2>
            </div>
            <div className="w-full max-w-xl rounded-full border border-white/10 bg-white/5 px-4 py-3 text-slate-200">
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5 text-wood-200" />
                <input
                  aria-label="Search furniture"
                  placeholder="Search sofas, wardrobes, tables..."
                  className="w-full bg-transparent text-sm placeholder:text-slate-300 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
