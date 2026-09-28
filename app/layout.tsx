"use client";

import Image from 'next/image';
import { ShoppingCart, Star, Plus, Minus, Trash2 } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { products, type Product } from '@/data/products';
import { useState } from 'react';

export function ProductGrid() {
  const addItem = useCartStore((state) => state.addItem);
  const totalItems = useCartStore((state) => state.totalItems());

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Curated</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">Trending now</h2>
        </div>

        <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
          {totalItems} items in cart
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={(item) => addItem(item)} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, onAdd }: { product: Product; onAdd: (item: { id: number; name: string; price: number; image: string }) => void }) {
  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-72 overflow-hidden">
        {product.badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-800">
            {product.badge}
          </span>
        )}

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">{product.category}</p>
          <div className="flex items-center gap-1 text-sm font-medium text-slate-700">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {product.rating}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-black text-slate-900">${product.price}</p>
            <p className="text-xs text-slate-500">{product.reviews} reviews</p>
          </div>

          <button
            onClick={() => onAdd({ id: product.id, name: product.name, price: product.price, image: product.image })}
            className="rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Add to cart
          </button>
        </div>

        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <span key={color} className="h-4 w-4 rounded-full border border-slate-200" style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>
    </article>
  );
}

export function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clear = useCartStore((state) => state.clear);
  const totalPrice = useCartStore((state) => state.totalPrice());

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-slate-700"
      >
        <ShoppingCart className="h-4 w-4" />
        Cart ({items.reduce((sum, item) => sum + item.quantity, 0)})
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <aside
            className="ml-auto flex h-full w-full max-w-md flex-col bg-white p-5 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Your bag</p>
                <h3 className="mt-1 text-2xl font-black text-slate-900">Cart</h3>
              </div>

              <button onClick={() => setIsOpen(false)} className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600">
                Close
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
                  Your cart is empty.
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-3 rounded-2xl border border-slate-200 p-3">
                    <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold text-slate-900">{item.name}</p>
                          <p className="text-sm text-slate-500">${item.price}</p>
                        </div>

                        <button onClick={() => removeItem(item.id)} className="text-slate-400 transition hover:text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2 py-1">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-1 text-slate-600">
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-5 text-center text-sm font-semibold text-slate-800">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-1 text-slate-600">
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <p className="font-bold text-slate-900">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="mt-6 space-y-4 border-t border-slate-200 pt-5">
                <div className="flex items-center justify-between text-lg font-semibold text-slate-900">
                  <span>Total</span>
                  <span>${totalPrice}</span>
                </div>

                <button className="w-full rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700">
                  Checkout
                </button>

                <button onClick={clear} className="w-full rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                  Clear cart
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  );
}
