'use client';

import React from 'react';
import { Phone, ArrowRight, Sparkles, MapPin, CheckCircle2, ShoppingBag, Bus, Bike } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 bg-[#fcfaf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Card Container */}
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-900/15 border border-amber-900/15 bg-stone-950 text-white min-h-[500px] lg:min-h-[560px] flex flex-col justify-end">
          
          {/* Background image & gradient overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-100 hover:scale-105 opacity-40"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-950/25" />
          
          {/* Subtle warm golden amber glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Hero Content */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-16 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-600/20 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-black text-amber-300">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Milawa Gourmet Region • Artisan Baking Heritage</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-black tracking-tight leading-[1.08] text-white">
              Handcrafted Baking, <br />
              <span className="font-sans font-black bg-gradient-to-r from-amber-300 via-amber-100 to-orange-300 bg-clip-text text-transparent">
                Gourmet Hampers &amp; Café
              </span>
            </h1>

            <p className="text-base sm:text-xl text-stone-200 font-medium max-w-2xl leading-relaxed">
              Welcome to Milawa Bakery Café. Savor naturally leavened sourdough loaves, award-winning country pies, fresh Devonshire scones, local Milawa cheese picnic hampers, and group tour catering in Victoria&apos;s High Country.
            </p>

            {/* Quick highlights */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-stone-200 font-semibold">
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Slow-Ferment Artisan Sourdough
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Slow-Braised Beef &amp; Burgundy Pies
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                <ShoppingBag className="w-4 h-4 text-amber-400" />
                Milawa Cheese Picnic Hampers
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                <Bike className="w-4 h-4 text-amber-400" />
                Rail Trail Cyclist Packs
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-black px-7 py-4 rounded-2xl shadow-xl shadow-amber-900/30 text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <ShoppingBag className="w-5 h-5 text-stone-950" />
                <span>Order / Reserve Hamper</span>
              </a>

              <a
                href="tel:0357273619"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-4 rounded-2xl backdrop-blur-md border border-white/20 text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call (03) 5727 3619</span>
              </a>

              <a
                href="#catering"
                className="inline-flex items-center justify-center gap-2 bg-stone-900/80 hover:bg-stone-900 text-amber-300 font-bold px-5 py-4 rounded-2xl border border-stone-700 text-sm transition-all"
              >
                <Bus className="w-4 h-4 text-amber-400" />
                <span>Tour Bus Catering</span>
              </a>
            </div>

            {/* Quick Location & Phone Info Strip */}
            <div className="pt-3 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-stone-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>15 Factory Rd (Snow Rd), Milawa VIC 3678</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Open 7 Days • 7:30 AM – 4:30 PM • Dine-in &amp; Takeaway</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
