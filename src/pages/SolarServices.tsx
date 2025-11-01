import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";
import { DollarSign, Leaf, TrendingUp } from "lucide-react";
const SolarServices = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products/category/solar`);
      const data = await response.json();
      setProducts(data);
      console.log('Solar products loaded:', data.map(product => product.product_name));
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
                <span className="gradient-text">Solar Energy</span> Solutions
              </h1>
              <p className="text-xl text-muted-foreground">
                Embrace clean, renewable energy with our comprehensive solar solutions.
                From residential rooftops to large-scale commercial installations, we help
                you harness the power of the sun for a sustainable future.
              </p>

            </div>

            <div className="animate-slide-up">
              <img
                src="/solar-banner.jpg"
                alt="Solar Solutions"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 bg-card">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Solar?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Cost Savings */}
            <div className="space-y-3">
              <div className="flex justify-center text-primary">
                <DollarSign size={48} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl font-semibold">Cost Savings</h3>
              <p className="text-muted-foreground">
                Reduce your electricity bills by up to 90% and protect against rising energy costs
              </p>
            </div>

            {/* Eco-Friendly */}
            <div className="space-y-3">
              <div className="flex justify-center text-green-600">
                <Leaf size={48} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl font-semibold">Eco-Friendly</h3>
              <p className="text-muted-foreground">
                Zero emissions, reduced carbon footprint, and contribution to a cleaner planet
              </p>
            </div>

            {/* Property Value */}
            <div className="space-y-3">
              <div className="flex justify-center text-blue-600">
                <TrendingUp size={48} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl font-semibold">Property Value</h3>
              <p className="text-muted-foreground">
                Increase your property value by 3-4% with a solar installation
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
              Our Solar <span className="gradient-text">Products</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of premium solar products and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.product_id || index}
                productId={product.product_id}
                title={product.product_name}
                description={product.description}
                icon={<Sun className="h-6 w-6" />}
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

export default SolarServices;
