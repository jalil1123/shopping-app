import Image from 'next/image';
import Link from 'next/link';
import { Menu, Search, ShoppingBag, Star } from 'lucide-react';

const navItems = ['New Arrivals', 'Women', 'Men', 'Accessories', 'Sale'];

export function Header({ itemCount }: { itemCount: number }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
        <div className="flex items-center gap-4">
          <button className="rounded-full border border-slate-200 p-2 lg:hidden" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-700 text-lg font-bold text-white shadow-soft">
              S
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-900">Shopia</p>
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
          {navItems.map((item) => (
            <Link key={item} href="#" className="transition hover:text-slate-900">
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-slate-200 p-2.5 text-slate-600 lg:flex" aria-label="Search">
            <Search className="h-4 w-4" />
          </button>

          <button className="relative rounded-full bg-slate-900 p-3 text-white shadow-soft" aria-label="Cart">
            <ShoppingBag className="h-4 w-4" />
            {itemCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-500 px-1 text-[10px] font-bold text-white">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16">
      <div className="flex flex-col justify-center">
        <span className="mb-4 inline-flex w-fit items-center rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
          New Season
        </span>

        <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Designed for the way you move.
        </h1>

        <p className="mt-5 max-w-lg text-lg text-slate-600">
          Discover premium essentials for everyday life — performance gear, modern accessories, and elevated essentials curated for effortless routines.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-slate-700">
            Shop Collection
          </button>
          <button className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
            Explore Deals
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-8 text-sm text-slate-600">
          <div>
            <p className="text-2xl font-bold text-slate-900">4.9/5</p>
            <span>Average review</span>
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">12k+</p>
            <span>Happy shoppers</span>
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">48h</p>
            <span>Fast delivery</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-violet-100 via-white to-orange-100 blur-2xl" />
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft">
          <div className="relative h-[520px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-100 via-white to-violet-100">
            <div className="absolute left-6 top-6 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
              Spring Drop
            </div>

            <Image
              src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80"
              alt="Shop collection"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/85 p-4 backdrop-blur-lg">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Featured</p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900">Aero Stripe Jacket</h2>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500">From</p>
                  <p className="text-2xl font-black text-slate-900">$199</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                4.9 rating · 2.3k reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
