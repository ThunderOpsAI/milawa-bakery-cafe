'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Clock, Menu as MenuIcon, X, Database, ShoppingBag, MapPin, Sparkles, Coffee } from 'lucide-react';

interface NavbarProps {
  onOpenLeadsModal?: () => void;
  cartCount?: number;
  onCartClick?: () => void;
}

export default function Navbar({ onOpenLeadsModal, cartCount = 0, onCartClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    // Check Melbourne/Sydney time (AEST / AEDT)
    const checkOpenStatus = () => {
      try {
        const now = new Date();
        const melbourneTime = new Date(now.toLocaleString("en-US", { timeZone: "Australia/Melbourne" }));
        const hour = melbourneTime.getHours();
        const minute = melbourneTime.getMinutes();
        const decimalHour = hour + minute / 60;

        // Milawa Bakery Café: Open 7 Days, 7:30 AM to 4:30 PM
        setIsOpenNow(decimalHour >= 7.5 && decimalHour <= 16.5);
      } catch {
        setIsOpenNow(true);
      }
    };

    checkOpenStatus();
    const timer = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-900/10 bg-amber-50/95 backdrop-blur-md shadow-sm">
      {/* Top announcement / regional tourism bar */}
      <div className="bg-stone-900 border-b border-stone-800 px-4 py-1.5 text-xs font-semibold text-stone-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-amber-500 text-stone-950 px-2 py-0.5 font-extrabold uppercase tracking-wider text-[10px]">
              Milawa Gourmet Region
            </span>
            <span className="text-stone-300 text-xs font-medium">📍 15 Factory Rd (Snow Rd), Milawa VIC 3678</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-stone-300 hidden md:flex">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Open 7 Days: 7:30am – 4:30pm (Fresh Sourdough, Pies &amp; Hampers)</span>
            </div>
            <a
              href="tel:0357273619"
              className="inline-flex items-center gap-1 bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:text-white px-2.5 py-0.5 rounded-full transition-colors font-bold"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              (03) 5727 3619
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2.5">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-700 via-amber-800 to-stone-900 border border-amber-600/40 flex items-center justify-center shadow-md shadow-amber-900/20 text-amber-200 font-serif font-black text-2xl group-hover:scale-105 transition-transform">
              M
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-extrabold tracking-tight text-xl sm:text-2xl text-stone-950">
                  Milawa Bakery <span className="text-amber-800 font-sans font-black">Café</span>
                </span>
                <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                  isOpenNow 
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-700' 
                    : 'bg-stone-100 border-stone-300 text-stone-600'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-stone-400'}`} />
                  {isOpenNow ? 'Open Now' : 'Closed'}
                </span>
              </div>
              <p className="text-[11px] tracking-wide text-amber-950/70 font-semibold hidden sm:block">
                Artisan Sourdough • Gourmet Bakery Pies • Milawa Cheese Hampers
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-stone-800">
            <a href="#menu" className="hover:text-amber-800 transition-colors">
              Menu &amp; Hampers
            </a>
            <a href="#direct-order" className="hover:text-amber-800 transition-colors">
              Picnic Packs
            </a>
            <a href="#catalogue" className="hover:text-amber-800 transition-colors">
              Tour Packages
            </a>
            <a href="#catering" className="hover:text-amber-800 transition-colors">
              Bus Catering
            </a>
            <a href="#story" className="hover:text-amber-800 transition-colors">
              Our Story
            </a>
            <a href="#location" className="hover:text-amber-800 transition-colors">
              Location &amp; Hours
            </a>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {onOpenLeadsModal && (
              <button
                onClick={onOpenLeadsModal}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 bg-white hover:bg-amber-100/60 border border-stone-300 px-3 py-2 rounded-xl transition-colors shadow-sm"
                title="Tour &amp; Hamper Leads Portal"
              >
                <Database className="w-3.5 h-3.5 text-amber-700" />
                <span>Admin Leads</span>
              </button>
            )}

            {cartCount > 0 && onCartClick && (
              <button
                onClick={onCartClick}
                className="inline-flex items-center gap-1.5 bg-stone-900 text-white hover:bg-stone-800 px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all"
              >
                <ShoppingBag className="w-4 h-4 text-amber-400" />
                <span>{cartCount} in Hamper</span>
              </button>
            )}

            <a
              href="tel:0357273619"
              className="inline-flex items-center gap-1.5 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-amber-900/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call (03) 5727 3619</span>
              <span className="sm:hidden">Call</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-stone-700 hover:text-stone-950 hover:bg-amber-100/50 border border-stone-200 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-amber-50 border-b border-amber-900/10 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="flex flex-col space-y-2.5 text-sm font-bold text-stone-800">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-amber-100/80 hover:text-amber-800"
            >
              🧺 Full Menu &amp; Gourmet Hampers
            </a>
            <a
              href="#direct-order"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-amber-100/80 hover:text-amber-800"
            >
              🚲 Cyclist &amp; Tourist Picnic Packs
            </a>
            <a
              href="#catalogue"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-amber-100/80 hover:text-amber-800"
            >
              📋 Group Tour &amp; Bus Packages
            </a>
            <a
              href="#catering"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-amber-100/80 hover:text-amber-800"
            >
              🥐 Group Catering &amp; Quote Form
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-amber-100/80 hover:text-amber-800"
            >
              🌾 Our Milawa Baking Heritage
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-amber-100/80 hover:text-amber-800"
            >
              📍 Location: 15 Factory Rd, Milawa
            </a>
          </div>

          <div className="pt-3 border-t border-amber-900/10 flex flex-col gap-2">
            <a
              href="tel:0357273619"
              className="w-full flex items-center justify-center gap-2 bg-amber-700 text-white font-bold py-3 rounded-xl shadow-md text-sm"
            >
              <Phone className="w-4 h-4" />
              Call (03) 5727 3619
            </a>
            {onOpenLeadsModal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadsModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-white border border-stone-300 text-stone-700 font-bold py-2.5 rounded-xl text-xs"
              >
                <Database className="w-4 h-4 text-amber-700" />
                Open Tour &amp; Hamper Lead Hub
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
