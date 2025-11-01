import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import { CheckCircle, Target, CreditCard } from "lucide-react";


const ElectronicsServices = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products/category/Electronics`);
      const data = await response.json();
      setProducts(data);
      console.log('Electronics products loaded:', data.map(product => product.product_name));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="gradient-text">Electronics</span> & Gadgets
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover the latest in consumer electronics and smart devices.
                From TV's to home entertainment systems, we bring you
                cutting-edge technology at competitive prices with expert support.
              </p>

            </div>

            <div className="animate-slide-up">
              <img
                src="/electronics.jpg"
                alt="Electronics"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-card">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Why Buy From Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Authentic Products */}
            <div className="space-y-3">
              <div className="flex justify-center text-green-600">
                <CheckCircle size={48} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl font-semibold">Authentic Products</h3>
              <p className="text-muted-foreground">
                100% genuine products with manufacturer warranty and official support
              </p>
            </div>

            {/* Expert Guidance */}
            <div className="space-y-3">
              <div className="flex justify-center text-blue-500">
                <Target size={48} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl font-semibold">Expert Guidance</h3>
              <p className="text-muted-foreground">
                Our team helps you choose the right device based on your needs and budget
              </p>
            </div>

            {/* Flexible Payment */}
            <div className="space-y-3">
              <div className="flex justify-center text-yellow-600">
                <CreditCard size={48} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl font-semibold">Flexible Payment</h3>
              <p className="text-muted-foreground">
                Trade-in programs, and seasonal discounts available
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Product <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of electronic devices and accessories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.product_id || index}
                productId={product.product_id}
                title={product.product_name}
                description={product.description}
                icon={<Smartphone className="h-6 w-6" />}
                image={product.product_image}
                link={product.product_link}
                category={product.category}
                onRefresh={fetchProducts}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <Footer />
    </div>
  );
};

export default ElectronicsServices;
