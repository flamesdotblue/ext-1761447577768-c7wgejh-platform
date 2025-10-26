import { ShoppingCart, Leaf, Car } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-orange-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-md">
              <Leaf className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">AuraDrive</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#products" className="hover:text-orange-600 transition-colors">Shop</a>
            <a href="#about" className="hover:text-orange-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-orange-600 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 rounded-full border border-orange-200 px-4 py-2 text-sm font-medium hover:bg-orange-50 transition-colors">
              <Car className="h-4 w-4 text-orange-600" />
              For Your Car
            </button>
            <button aria-label="Cart" className="relative inline-flex items-center justify-center rounded-full p-2 hover:bg-orange-50 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">2</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
