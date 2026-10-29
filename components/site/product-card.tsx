import Link from 'next/link';
import { MessageCircleMore } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-wood-700 text-sm font-bold text-white">
            G
          </div>
          <div>
            <div className="text-lg font-semibold text-charcoal">Goodwood</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Second-hand furniture</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          <Link href="/shop">Shop All</Link>
          <Link href="/new-arrivals">New Arrivals</Link>
          <Link href="/deals">Deals</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/cart" className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-charcoal sm:inline-flex">
            Cart
          </Link>
          <a href="https://wa.me/27846138734" className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white">
            <MessageCircleMore className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/27846138734"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-soft transition hover:scale-105"
    >
      <MessageCircleMore className="h-6 w-6" />
    </a>
  );
}
