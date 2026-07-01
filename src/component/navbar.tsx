"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Verse from "./versebar";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/program" },
  { label: "Impact", href: "/impact" },
  { 
    label: "Get Involved", 
    items: [
      { label: "Volunteer", href: "/volunteer" },
      { label: "Partner With Us", href: "/partner" },
      { label: "Donate", href: "/donate" },
    ]
  },
  { 
    label: "Resources", 
    items: [
      { label: "News & Events", href: "/news" },
      { label: "Annual Reports", href: "/reports" },
      { label: "Gallery", href: "/gallery" },
    ]
  },
];

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to check if a main link or any of its sub-items are currently active
  const checkActive = (link: typeof navLinks[number]) => {
    if (link.href === pathname) return true;
    if (link.items) {
      return link.items.some((sub) => sub.href === pathname);
    }
    return false;
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      {!isSticky && <Verse />}

      <div className={`flex w-full justify-center transition-all duration-300 ${isSticky ? "pt-0" : "pt-4"}`}>
        <div className={`flex w-[96%] max-w-[1400px] items-center justify-between px-6 transition-all duration-300 ${
            isSticky
              ? "h-[70px] bg-white text-gray-900 shadow-md"
              : "h-[82px] rounded-[24px] bg-[#0F1F11]/45 backdrop-blur-lg text-white border border-white/10"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight z-50">
            <div className={`h-9 w-9 flex items-center justify-center rounded-lg ${isSticky ? "bg-green-700 text-white" : "bg-white text-green-700"}`}>P</div>
            PARAKLETUS
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-2 items-center h-full">
            {navLinks.map((link) => {
              const isActive = checkActive(link);
              
              return (
                <div 
                  key={link.label} 
                  className="relative h-full flex items-center" 
                  onMouseEnter={() => setActiveDropdown(link.label)} 
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.items ? (
                    <button className={`flex items-center gap-1 text-sm font-medium px-4 py-2 transition-all duration-300 relative group
                      ${isActive ? "text-green-500 font-semibold" : isSticky ? "text-gray-700 hover:text-green-600" : "text-white/90 hover:text-white"}
                    `}>
                      <span>{link.label}</span>
                      <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                      
                      {/* Premium sliding underline animation */}
                      <span className={`absolute bottom-2 left-4 right-4 h-[2px] bg-green-500 transform transition-transform duration-300 origin-left
                        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                      `} />
                    </button>
                  ) : (
                    <Link 
                      href={link.href!} 
                      className={`text-sm font-medium px-4 py-2 transition-all duration-300 relative group
                        ${isActive ? "text-green-500 font-semibold" : isSticky ? "text-gray-700 hover:text-green-600" : "text-white/90 hover:text-white"}
                      `}
                    >
                      <span>{link.label}</span>
                      <span className={`absolute bottom-2 left-4 right-4 h-[2px] bg-green-500 transform transition-transform duration-300 origin-left
                        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                      `} />
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {link.items && activeDropdown === link.label && (
                    <div className="absolute top-[80%] left-0 pt-4 w-52 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="bg-white text-gray-800 rounded-2xl shadow-2xl border border-gray-100 py-2 overflow-hidden">
                        {link.items.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link 
                              key={sub.href} 
                              href={sub.href} 
                              className={`block px-5 py-3 text-sm transition-all duration-200
                                ${isSubActive ? "bg-green-50 text-green-700 font-semibold border-l-4 border-green-600 pl-4" : "hover:bg-gray-50 hover:text-green-600"}
                              `}
                            >
                              {sub.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA Contact Button */}
          <Link href="/contact" className="hidden md:block rounded-full bg-green-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-800 hover:shadow-lg hover:shadow-green-700/20 transition duration-300">
            Contact
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 z-50 text-current" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} className="text-gray-900" /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white text-gray-900 pt-28 px-6 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-6 overflow-y-auto max-h-[80vh] pr-2">
            {navLinks.map((link) => {
              const isActive = checkActive(link);
              return (
                <div key={link.label} className="border-b border-gray-100 pb-4 last:border-none">
                  {link.items ? (
                    <div className="space-y-3">
                      <p className={`font-bold uppercase text-xs tracking-widest ${isActive ? "text-green-600" : "text-gray-400"}`}>{link.label}</p>
                      <div className="flex flex-col gap-3 pl-3 border-l-2 border-gray-100">
                        {link.items.map((sub) => (
                          <Link 
                            key={sub.href} 
                            href={sub.href} 
                            className={`block text-base font-medium py-1 ${pathname === sub.href ? "text-green-600 font-bold" : "text-gray-600"}`} 
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={link.href!} 
                      className={`text-lg font-bold block ${isActive ? "text-green-600" : "text-gray-800"}`} 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              );
            })}
            <Link 
              href="/contact" 
              className="mt-4 w-full text-center rounded-xl bg-green-700 py-3.5 text-base font-semibold text-white hover:bg-green-800 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}