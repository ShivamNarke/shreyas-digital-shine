import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth } from "../contexts/AuthContext";
import AddProductModal from "./AddProductModal";

import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isLoggedIn, user, logout } = useAuth();

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  const handleSwitchToSignup = () => {
    setLoginModalOpen(false);
    setSignupModalOpen(true);
  };

  const handleSwitchToLogin = () => {
    setSignupModalOpen(false);
    setLoginModalOpen(true);
  };
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-6">
            <img src="/logo3.png" alt="Shreyas Enterprises Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-16">
            <Link
              to="/"
              className={`transition-colors ${isActive("/")
                ? "text-primary font-semibold"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border">
                <DropdownMenuItem asChild>
                  <Link
                    to="/solar"
                    className={`w-full ${isActive("/solar") ? "text-primary font-semibold" : ""
                      }`}
                  >
                    Solar Solutions
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/electronics"
                    className={`w-full ${isActive("/electronics") ? "text-primary font-semibold" : ""
                      }`}
                  >
                    Electronics
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/electrical"
                    className={`w-full ${isActive("/electrical") ? "text-primary font-semibold" : ""
                      }`}
                  >
                    Electrical Products
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/privacy"
              className={`transition-colors ${isActive("/privacy")
                ? "text-primary font-semibold"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Privacy Policy
            </Link>

            <Button
              variant="ghost"
              onClick={() => {
                window.open("https://maps.app.goo.gl/d2a9PjhA73JXk8io9", "_blank");
              }}
            >
              Location
            </Button>

            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                {user?.is_verified == 1 && (
                  <AddProductModal>
                    <Button variant="outline" size="sm">
                      Add Product
                    </Button>
                  </AddProductModal>
                )}
                <Button variant="outline" size="sm" onClick={logout}>
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button variant="ghost" onClick={() => setLoginModalOpen(true)}>
                  Login
                </Button>
                <Button variant="ghost" onClick={() => setSignupModalOpen(true)}>
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Modals - always rendered */}
          {!isLoggedIn && (
            <>
              <Login
                open={loginModalOpen}
                onOpenChange={setLoginModalOpen}
                onSwitchToSignup={handleSwitchToSignup}
              />
              <Signup
                open={signupModalOpen}
                onOpenChange={setSignupModalOpen}
                onSwitchToLogin={handleSwitchToLogin}
              />
            </>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 ${isActive("/")
                ? "text-primary font-semibold"
                : "text-muted-foreground"
                }`}
            >
              Home
            </Link>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-muted-foreground">Services</div>
              <Link
                to="/solar"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 pl-4 ${isActive("/solar")
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
                  }`}
              >
                Solar Solutions
              </Link>
              <Link
                to="/electronics"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 pl-4 ${isActive("/electronics")
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
                  }`}
              >
                Electronics
              </Link>
              <Link
                to="/electrical"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 pl-4 ${isActive("/electrical")
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
                  }`}
              >
                Electrical Products
              </Link>
            </div>
            <Link
              to="/privacy"
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 ${isActive("/privacy")
                ? "text-primary font-semibold"
                : "text-muted-foreground"
                }`}
            >
              Privacy Policy
            </Link>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                window.open("https://maps.app.goo.gl/d2a9PjhA73JXk8io9", "_blank");
              }}
              className="block py-2 text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              Location
            </button>
            {isLoggedIn ? (
              <div className="flex flex-col space-y-2">
                {user?.is_verified == 1 && (
                  <AddProductModal>
                    <Button variant="outline" size="sm" className="w-full">
                      Add Product
                    </Button>
                  </AddProductModal>
                )}
                <Button variant="outline" size="sm" className="w-full" onClick={logout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    setLoginModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    setSignupModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
