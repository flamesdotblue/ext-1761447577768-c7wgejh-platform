import Spline from '@splinetool/react-spline';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1 rounded-full border border-orange-200 bg-white/70 px-3 py-1 text-xs text-orange-700">
            <Star className="h-3.5 w-3.5 fill-orange-500 text-orange-500" />
            Bestseller Car Perfume
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
            Elevate Every Drive with Boutique Car Perfume
          </h1>
          <p className="mt-4 text-stone-600 sm:text-lg">
            Long-lasting, non-invasive fragrances crafted to keep your cabin fresh. Natural notes, premium oils, and a refined look that complements any interior.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#products" className="inline-flex items-center justify-center rounded-md bg-gradient-to-b from-orange-500 to-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-orange-200/60 transition-transform hover:scale-[1.01] active:scale-95">
              Shop Collection
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-md border border-orange-200 bg-white px-6 py-3 text-sm font-semibold text-stone-800 hover:bg-orange-50">
              Learn More
            </a>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-4 text-center sm:max-w-md">
            <div className="rounded-lg border border-orange-100 bg-white/70 p-3">
              <dt className="text-xs text-stone-500">Up to</dt>
              <dd className="text-lg font-bold text-stone-900">60 Days</dd>
            </div>
            <div className="rounded-lg border border-orange-100 bg-white/70 p-3">
              <dt className="text-xs text-stone-500">Natural</dt>
              <dd className="text-lg font-bold text-stone-900">Essential Oils</dd>
            </div>
            <div className="rounded-lg border border-orange-100 bg-white/70 p-3">
              <dt className="text-xs text-stone-500">Leak</dt>
              <dd className="text-lg font-bold text-stone-900">Proof Design</dd>
            </div>
          </dl>
        </div>

        <div className="relative h-[480px] w-full sm:h-[560px] lg:h-[640px]">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
