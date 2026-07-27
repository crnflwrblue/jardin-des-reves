import React, { useEffect, useState } from "react";
import { navItems } from "../constant/data";
import {
  RiMenuLine,
  RiSearchLine,
  RiHeartLine,
  RiShoppingBagLine,
} from "react-icons/ri";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <h1 className="text-2xl font-bold font-cormorant text-dark">
            Jardin des Rêves
          </h1>

          {/* LG MENU */}
          <div className="hidden md:flex items-center gap-10">
            <nav>
              <ul className="flex items-center gap-8 text-base font-medium">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="hover:text-sage transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ICONS */}
            <div className="flex items-center gap-5 ">
              <button className="hover:text-blush relative" aria-label="Search">
                <RiSearchLine size={20} />
              </button>
              <button
                className="hover:text-blush relative"
                aria-label="Wishlist"
              >
                <RiHeartLine size={20} />
              </button>
              <button className="hover:text-blush relative" aria-label="Cart">
                <RiShoppingBagLine size={20} />
              </button>
            </div>
          </div>

          {/* MOBILE */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <RiMenuLine className="hover:text-blush" size={24} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-sage/20 bg-neutral/80">
            <nav className="flex flex-col gap-4 text-center">
              {navItems.map((item) => (
                <a key={item.id} href={item.link} className="hover:text-blush">
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex justify-center gap-8 mt-6">
              <button className="hover:text-blush relative" aria-label="Search">
                <RiSearchLine size={20} />
              </button>
              <button
                className="hover:text-blush relative"
                aria-label="Wishlist"
              >
                <RiHeartLine size={20} />
              </button>
              <button className="hover:text-blush relative" aria-label="Cart">
                <RiShoppingBagLine size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
