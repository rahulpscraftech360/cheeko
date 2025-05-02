import { MenuIcon, ShoppingCart, X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useScreenSize } from "../../hooks/useScreenSize";
import { Button } from "../ui/button";

export const Header = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { isMobile } = useScreenSize();

  const menuItems = [
    { label: "Features", path: "/", icon: "✨" },
    { label: "Demo", path: "/", icon: "🎮" },
    { label: "Testimonials", path: "/", icon: "💬" },
    { label: "Pricing", path: "/", icon: "💰" },
    { label: "Cart", path: "/cart", icon: <ShoppingCart className="w-4 h-4" /> },
  ];
  
  const scrollToMobileTestimonials = () => {
    const testimonialsSection = document.getElementById('mobile-testimonials');
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Function to handle scrolling to sections
  const handleFeatureClick = (label: string, e: React.MouseEvent) => {
    if (label === "Features") {
      e.preventDefault();
      if (isMobile) {
        // For mobile, scroll to FeaturesSection
        const featuresSection = document.querySelector('.FeaturesSection');
        if (featuresSection) {
          featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // For desktop, scroll to MainContentSection
        const mainContentSection = document.querySelector('.w-full.bg-\\[\\#f7fbfe\\].py-\\[135px\\]');
        if (mainContentSection) {
          mainContentSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (label === "Testimonials") {
      e.preventDefault();
      if (isMobile) {
        // For mobile, use the dedicated function to scroll to testimonials
        scrollToMobileTestimonials();
      } else {
        // For desktop, scroll to RelatedProductsSection
        const relatedProductsSection = document.querySelector('.RelatedProductsSection');
        if (relatedProductsSection) {
          relatedProductsSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Fallback if the section doesn't have the class
          const sections = document.querySelectorAll('section');
          if (sections.length >= 8) {
            sections[7].scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }else if (label === "Pricing") {
      e.preventDefault();
      if (isMobile) {
        // For mobile, scroll to LogoSection with the new class
        const mobilePricingSection = document.querySelector('.mobile-pricing-section');
        if (mobilePricingSection) {
          mobilePricingSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // For desktop, scroll to CallToActionSection with the new class
        const desktopPricingSection = document.querySelector('.desktop-pricing-section');
        if (desktopPricingSection) {
          desktopPricingSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 ${isMobile ? 'bg-[#FF6B01]' : 'bg-white'} z-50 `}>
      <div className="w-full  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center  h-16">
          {/* Logo - Always Left Aligned */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="/logo.png"
                alt="AI Teddy Logo"
                className="h-9 w-auto sm:h-12"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          {!isMobile && (
            <div className="flex-1 flex justify-center">
              <nav className="flex items-center space-x-8">
                {menuItems.slice(0, -1).map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="text-[#FF6B01] font-medium hover:text-[#FF6B01]/80 transition-colors"
                    onClick={(e) => handleFeatureClick(item.label, e)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}

          {/* Cart Button - Right */}
          {!isMobile && (
            <div className="flex-shrink-0">
              <Link to="/cart">
                <Button className="bg-[#FF6B01] text-white hover:bg-[#FF6B01]/80 rounded-full px-6">
                  Cart
                  <ShoppingCart className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button - Moved to right */}
          {isMobile && (
            <div className="flex-1 flex justify-end">
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 bg-white rounded-sm hover:bg-white/90 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-[#FF6B01]" />
                ) : (
                  <MenuIcon className="h-6 w-6 text-[#FF6B01]" />
                )}
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMobileMenuOpen && (
          <div className="border-t border-[#FF6B01]/20 bg-white rounded-xl mb-4 mt-4 shadow-lg overflow-hidden">
            <div className="px-4 py-3 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="block px-4 py-3 rounded-lg text-base font-medium text-[#FF6B01] hover:bg-[#FF6B01]/10 transition-all duration-200 flex items-center gap-2"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  handleFeatureClick(item.label, e);
                }}
              >
                <span className="w-4 h-4 flex items-center justify-center">
                  {item.icon}
                </span>
                {item.label}
              </Link>
            ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};