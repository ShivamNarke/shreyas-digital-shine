import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              <span className="gradient-text">Shreyas</span> Enterprises
            </h3>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for solar energy, electronics, and electrical solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/solar" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Solar Solutions
                </Link>
              </li>
              <li>
                <Link to="/electronics" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/electrical" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Electrical Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Solar Panel Installation</li>
              <li>Consumer Electronics</li>
              <li>Electrical Equipment</li>
              <li>Consultation Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="mailto:shreyasenterprises99@gmail.com"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>shreyasenterprises99@gmail.com</span>
              </a>
              <a
                href="tel:+919923269825"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+919923269825</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://www.facebook.com/share/1Bd23866Us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <img className="h-7 w-7" src="/facebook.png" alt="Facebook" />
                </a>
                <a
                  href="https://www.instagram.com/bajiraojadhav1983?igsh=MW14MTJreDZvbTBzYQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <img className="h-7 w-7" src="/instagram.png" alt="Instagram" />
                </a>
                <a
                  href="https://wa.me/919923269825"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <img className="h-7 w-7" src="/whatsapp.png" alt="Whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shreyas Enterprises. All rights reserved.
          </p>
          <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
