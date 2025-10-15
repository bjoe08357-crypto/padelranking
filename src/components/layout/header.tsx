"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navigation = [
  { 
    name: "Rankings", 
    href: "/rankings",
    hasDropdown: true,
    dropdownItems: [
      { name: "National Rankings", href: "/rankings/national" },
      { name: "Regional Rankings", href: "/rankings/regional" },
      { name: "Player Rankings", href: "/rankings/players" }
    ]
  },
  { 
    name: "Tournaments", 
    href: "/tournaments",
    hasDropdown: true,
    dropdownItems: [
      { name: "Upcoming Tournaments", href: "/tournaments/upcoming" },
      { name: "Past Tournaments", href: "/tournaments/past" },
      { name: "Tournament Calendar", href: "/tournaments/calendar" }
    ]
  },
  { name: "Players", href: "/players" },
  { name: "Clubs", href: "/clubs" },
  { name: "Membership", href: "/membership" },
  { name: "News", href: "/news" },
  { name: "About", href: "/about" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState<'EN' | 'ID'>('EN');

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'EN' ? 'ID' : 'EN');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between gap-8">
          {/* Logo and Company Name */}
          <Link href="/" className="flex items-center space-x-2.5 flex-shrink-0">
            {/* Logo */}
            <div className="relative h-10 w-10 flex-shrink-0">
              <Image
                src="/logo.webp"
                alt="PBPI Logo"
                fill
                className="object-contain"
              />
            </div>
            
            {/* Company Name - 3 lines as shown in screenshot */}
            <div className="flex flex-col text-blue-600 font-semibold text-sm leading-tight">
              <span>Perkumpulan</span>
              <span>Besar Padel</span>
              <span>Indonesia</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-1 px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap",
                    pathname === item.href
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"
                  )}
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            {/* Search Bar */}
            <div className="hidden md:flex items-center relative">
              <Search className="absolute left-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search Players"
                className="pl-10 pr-4 py-2 w-48 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Language Toggle */}
            <div className="flex items-center space-x-1">
              <button
                onClick={toggleLanguage}
                className={cn(
                  "px-3 py-1 rounded-md font-bold text-sm transition-colors",
                  currentLanguage === 'EN' 
                    ? "bg-blue-600 text-white" 
                    : "text-gray-700 hover:text-blue-600"
                )}
              >
                EN
              </button>
              <button
                onClick={toggleLanguage}
                className={cn(
                  "px-3 py-1 rounded-md font-bold text-sm transition-colors",
                  currentLanguage === 'ID' 
                    ? "bg-blue-600 text-white" 
                    : "text-gray-700 hover:text-blue-600"
                )}
              >
                ID
              </button>
            </div>

            <Button className="bg-red-600 hover:bg-red-700 text-white font-medium">
              Club Login
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                      pathname === item.href
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-4 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Language Toggle */}
              <div className="flex items-center space-x-1 px-3 py-2">
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "px-3 py-1 rounded-md font-bold text-sm transition-colors",
                    currentLanguage === 'EN' 
                      ? "bg-blue-600 text-white" 
                      : "text-gray-700 hover:text-blue-600"
                  )}
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "px-3 py-1 rounded-md font-bold text-sm transition-colors",
                    currentLanguage === 'ID' 
                      ? "bg-blue-600 text-white" 
                      : "text-gray-700 hover:text-blue-600"
                  )}
                >
                  ID
                </button>
              </div>
              
              <Button className="mt-4 mx-3 bg-red-600 hover:bg-red-700 text-white font-medium">
                Club Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}