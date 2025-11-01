import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { Award, Wrench } from "lucide-react";

const ElectricalServices = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products/category/electrical`);
      const data = await response.json();
      setProducts(data);
      console.log('Electrical products loaded:', data.map(product => product.product_name));
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
                <span className="gradient-text">Electrical</span> Products & Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Premium quality electrical equipment and components for residential and
                commercial applications. From lighting solutions to complete electrical
                installations, we ensure safety and reliability in every product.
              </p>

            </div>

            <div className="animate-slide-up">
              <img
                src="/electrical2.png"
                alt="Electrical Products"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Products Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="gradient-text">Products & Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive electrical solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.product_id || index}
                productId={product.product_id}
                title={product.product_name}
                description={product.description}
                icon={<Zap className="h-6 w-6" />}
                image={product.product_image}
                link={product.product_link}
                category={product.category}
                onRefresh={fetchProducts}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Standards Section */}
      <section className="py-12 px-4 bg-card">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Our Quality Standards</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Certified Products */}
            <div className="space-y-3">
              <div className="flex justify-center text-yellow-500">
                <Award size={48} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl font-semibold">Certified Products</h3>
              <p className="text-muted-foreground">
                All products are ISI certified and meet national safety standards
              </p>
            </div>

            {/* Expert Installation */}
            <div className="space-y-3">
              <div className="flex justify-center text-gray-700">
                <Wrench size={48} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl font-semibold">Expert Installation</h3>
              <p className="text-muted-foreground">
                Licensed electricians with years of experience in safe installations
              </p>
            </div>

            {/* Safety First */}
            <div className="space-y-3">
              <div className="flex justify-center text-blue-600">
                <Zap size={48} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl font-semibold">Safety First</h3>
              <p className="text-muted-foreground">
                Comprehensive safety inspections and compliance with electrical codes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Electrical Safety Tips</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-background p-6 rounded-lg space-y-2">
              <h3 className="font-semibold text-primary">Regular Inspections</h3>
              <p className="text-sm text-muted-foreground">
                Schedule professional electrical inspections every 3-5 years to identify potential hazards
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg space-y-2">
              <h3 className="font-semibold text-primary">Avoid Overloading</h3>
              <p className="text-sm text-muted-foreground">
                Don't overload power outlets or extension cords beyond their rated capacity
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg space-y-2">
              <h3 className="font-semibold text-primary">GFCI Protection</h3>
              <p className="text-sm text-muted-foreground">
                Install GFCI outlets in wet areas like bathrooms, kitchens, and outdoor spaces
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg space-y-2">
              <h3 className="font-semibold text-primary">Professional Work</h3>
              <p className="text-sm text-muted-foreground">
                Always hire licensed electricians for installations and major repairs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}


      <Footer />
    </div>
  );
};

export default ElectricalServices;
