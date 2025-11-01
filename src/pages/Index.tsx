import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import ServiceCard from "@/components/ServiceCard";
import StatsSection from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { Sun, Smartphone, Zap, ArrowRight } from "lucide-react";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold">
            Powering Your Future with{" "}
            <span className="gradient-text">Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Leading provider of solar energy solutions, cutting-edge electronics, and premium electrical products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              variant="hero"
              size="lg"
              onClick={() => {
                const servicesSection = document.getElementById("services");
                servicesSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a
              href="tel:+919923269825">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <ImageCarousel />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Our <span className="gradient-text">Services</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet your energy and technology needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <ServiceCard

              title="Mahalaxmi Solar "
              description="Harness clean, renewable energy with our state-of-the-art solar panel installations and energy management systems."
              icon={<Sun className="h-6 w-6" />}
              link="/solar"
              image={"/solar-banner.jpg"}
            />
            <ServiceCard
              title="Mahalaxmi Electronics"
              description="Discover the latest consumer electronics, from smartphones to home appliances, all backed by expert support."
              icon={<Smartphone className="h-6 w-6" />}
              link="/electronics"
              image={"/electronics.jpg"}
            />
            <ServiceCard
              title="Mahalaxmi Electrical"
              description="Premium quality electrical equipment and components for residential and commercial applications."
              icon={<Zap className="h-6 w-6" />}
              link="/electrical"
              image={"/electrical.png"}
            />
          </div>
        </div>
      </section>

      {/* About Section with Stats */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="gradient-text">Shreyas Enterprises</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                With over a decade of excellence in the energy and electronics sector,
                Shreyas Enterprises has established itself as a trusted name in providing
                innovative solutions for modern living.
              </p>
              <p className="text-lg text-muted-foreground">
                Our commitment to quality, customer satisfaction, and sustainable practices
                drives everything we do. From residential solar installations to cutting-edge
                electronics, we deliver solutions that make a difference.
              </p>

            </div>

            <div className="animate-slide-up">
              <StatsSection />
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="mt-10 py-20 px-4 bg-card border-t border-border">
        <div className="container mx-auto">
          <div className="rounded-2xl p-10 md:p-14 text-center md:text-left space-y-10 shadow-lg animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Let’s <span className="gradient-text">Connect</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Have a question or want to visit us? Get in touch — we’d love to hear from you!
                </p>

                <div className="space-y-4 text-lg text-muted-foreground">
                  <p className="flex items-center justify-center md:justify-start gap-3">
                    <i className="fa-solid fa-location-dot text-primary"></i>
                    <span>Milkat No. 724, Shri Mahalaxmi Electronics & Electrical Sales & Services, Shri Mahalaxmi Solar, Dhansampada Oil Mill, Fata, Samor, Donawade, Kolhapur, Maharashtra 416204</span>
                  </p>

                  <p className="flex items-center justify-center md:justify-start gap-3">
                    <i className="fa-solid fa-phone text-primary"></i>
                    <a href="tel:+919923269825" className="hover:underline text-foreground">+91 99232 69825</a>

                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-3">
                    <i className="fa-solid fa-phone text-primary"></i>
                    <a href="tel:+919923275379" className="hover:underline text-foreground">+91 99232 75379</a>

                  </p>

                  <p className="flex items-center justify-center md:justify-start gap-3">
                    <i className="fa-solid fa-envelope text-primary"></i>
                    <a href="mailto:info@shreyasenterprises.com" className="hover:underline text-foreground">
                      info@shreyasenterprises.com
                    </a>
                  </p>

                  <p className="flex items-center justify-center md:justify-start gap-3">
                    <i className="fa-solid fa-clock text-primary"></i>
                    <span>Tue – Sun: 9:00 AM – 7:00 PM</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-3">
                    <i className="fa-solid fa-clock text-primary"></i>
                    <span>Monday - Closed </span>
                  </p>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-xl overflow-hidden shadow-md border border-border hover:scale-[1.02] transition-transform duration-300">
                <iframe
                  title="Shreyas Enterprises Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.060632084616!2d74.2186604!3d16.7069041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1ab4aa98e1e19%3A0xe28c20fba7711fe5!2sMilkat+No.+724,+Shri+Mahalaxmi+Electronics+%26+Electrical+Sales+%26+Services,+Shri+Mahalaxmi+Solar,+Dhansampada+Oil+Mill,+Fata,+Samor,+Donawade,+Kolhapur,+Maharashtra+416204!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Index;
