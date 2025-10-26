import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-peach-50 text-stone-900">
      <div className="bg-gradient-to-b from-orange-50/70 to-white">
        <Navbar />
        <Hero />
      </div>
      <main>
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
