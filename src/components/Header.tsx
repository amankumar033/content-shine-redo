import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Tiffin Service", href: "/tiffin" },
    { label: "Party Catering", href: "/catering" },
    { label: "About Us", href: "/about", active: true },
    { label: "Contact Us", href: "/contact" },
    { label: "Terms", href: "/terms" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-foreground">Tarneit Tiffin</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  item.active 
                    ? "text-primary border-b-2 border-primary pb-1" 
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Phone Number */}
          <div className="flex items-center space-x-2 text-primary">
            <Phone className="w-4 h-4" />
            <span className="font-semibold">+61 430 060 000</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;