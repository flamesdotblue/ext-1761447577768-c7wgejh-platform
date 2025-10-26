export default function Footer() {
  return (
    <footer id="contact" className="mt-20 border-t border-orange-100 bg-white/70">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-stone-900">AuraDrive</h3>
            <p className="mt-2 text-sm text-stone-600">Premium car fragrances that blend craftsmanship, clean ingredients, and lasting freshness.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-stone-900">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-stone-600">
              <li><a href="#" className="hover:text-orange-700">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-700">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-orange-700">Warranty</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-stone-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-stone-600">
              <li><a href="#about" className="hover:text-orange-700">About</a></li>
              <li><a href="#" className="hover:text-orange-700">Sustainability</a></li>
              <li><a href="#" className="hover:text-orange-700">Wholesale</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-stone-900">Newsletter</h4>
            <p className="mt-2 text-sm text-stone-600">Get 10% off your first order. No spam ever.</p>
            <form className="mt-3 flex gap-2">
              <input type="email" required placeholder="you@example.com" className="w-full rounded-md border border-orange-200 bg-white px-3 py-2 text-sm outline-none ring-orange-300 placeholder:text-stone-400 focus:ring-2" />
              <button className="rounded-md bg-stone-900 px-3 py-2 text-sm font-semibold text-white hover:bg-stone-800">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-orange-100 pt-6 text-xs text-stone-500 sm:flex-row">
          <p>© {new Date().getFullYear()} AuraDrive. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-orange-700">Privacy</a>
            <a href="#" className="hover:text-orange-700">Terms</a>
            <a href="#" className="hover:text-orange-700">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
