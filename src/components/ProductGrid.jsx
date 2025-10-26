import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Citrus Drift',
    note: 'Bergamot • Neroli • Cedar',
    price: 24,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1605979257913-1702cbb67a15?q=80&w=1200&auto=format&fit=crop',
    badge: 'New',
  },
  {
    id: 2,
    name: 'Forest Glide',
    note: 'Pine • Vetiver • Moss',
    price: 26,
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop',
    badge: 'Eco',
  },
  {
    id: 3,
    name: 'Amber Lane',
    note: 'Amber • Vanilla • Cardamom',
    price: 28,
    rating: 5.0,
    img: 'https://images.unsplash.com/photo-1585386959984-a41552231658?q=80&w=1200&auto=format&fit=crop',
    badge: 'Bestseller',
  },
  {
    id: 4,
    name: 'Marine Silk',
    note: 'Sea Salt • Driftwood • Iris',
    price: 24,
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1200&auto=format&fit=crop',
    badge: 'Fresh',
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Shop the Collection</h2>
            <p className="mt-1 text-stone-600">Refined fragrances designed exclusively for the road.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm font-semibold text-orange-700 hover:text-orange-800">View all</a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.id} className="group relative overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent opacity-70" />
                {p.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-stone-900 backdrop-blur">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold tracking-tight text-stone-900">{p.name}</h3>
                  <div className="flex items-center gap-1 text-orange-600">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium">{p.rating.toFixed(1)}</span>
                  </div>
                </div>
                <p className="mt-1 text-sm text-stone-600">{p.note}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold">${p.price}</span>
                  <button className="inline-flex items-center justify-center rounded-md bg-stone-900 px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-stone-800">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 p-6 sm:grid-cols-3 sm:gap-6">
          <Feature icon="Shipping" title="Free shipping" desc="On orders over $40 in the US" />
          <Feature icon="Leaf" title="Clean ingredients" desc="Phthalate-free, non-toxic oils" />
          <Feature icon="Clock" title="Long-lasting" desc="Up to 60 days per bottle" />
        </div>
      </div>
    </section>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="rounded-xl border border-orange-100 bg-white/70 p-4">
      <p className="text-sm font-semibold text-stone-900">{title}</p>
      <p className="text-sm text-stone-600">{desc}</p>
    </div>
  );
}
