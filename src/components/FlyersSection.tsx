'use client';

import React from 'react';
import { Sparkles, Phone, Check, ArrowRight, Bus, PackageCheck, Utensils, Heart } from 'lucide-react';

export default function FlyersSection() {
  const packages = [
    {
      id: 'package-1',
      title: 'Milawa Gourmet Picnic Hampers & Cyclist Packs',
      subtitle: 'Regional Tourism Pack 1 — Vineyard Picnics & Rail Trail Expeditions',
      tag: 'Gourmet Hampers • Rail Trail',
      highlights: [
        'Local Milawa Cheese Co Artisanal Cheeses (Camembert & King River Gold)',
        'Stone-Baked Handcrafted Sourdough Baguettes & Ciabattas',
        'High Country Quince Paste, Marinated Olives & Prosciutto',
        'House-Baked Raspberry Pistachio Tartlets & Chocolate Brownies',
        'Individual Rail Trail Cyclist Fuel Packs ($32 per cyclist)',
        'Deluxe Couples Grazing Basket with Local Mineral Waters ($68 - $85)'
      ],
      description: 'The definitive High Country outdoor tasting experience. Packed in eco-friendly boxes ready to collect before your winery crawl or trail ride.'
    },
    {
      id: 'package-2',
      title: 'Group Tour Buses, Winery Coaches & Club Banquets',
      subtitle: 'Regional Tourism Pack 2 — Coordinated Coach Hospitality',
      tag: 'Group Tours • Bus Catering',
      highlights: [
        'Warm Devonshire Buttermilk Scones with King Valley Double Cream ($14.50pp)',
        'Award-Winning Slow-Cooked Beef & Burgundy Cocktail Pies',
        'House-Rolled Free-Range Pork, Fennel & Apple Sausage Rolls',
        'Gourmet Baguette & Sandwich Grazing Platters for Large Parties',
        'Freshly Brewed High Country Espresso & Specialty Teas on Arrival',
        'Dedicated Coach Drop-off & Quick 20-Minute Bus Turnaround Service'
      ],
      description: 'Catering specifically designed for regional coach tour operators, seniors groups, wedding parties, and cycling pelotons visiting Milawa.'
    }
  ];

  return (
    <section id="catalogue" className="py-20 border-b border-amber-900/10 bg-[#faf6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-600/15 text-amber-950 border border-amber-500/30 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" /> Regional Tourism Catalogue
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-stone-950 tracking-tight">
            High Country Gourmet Menus &amp; Tour Packages
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Planning a King Valley winery day, a scenic pedal along the Murray to Mountains rail trail, or managing a tour bus of 40 guests? Pre-order with Milawa Bakery Café on (03) 5727 3619.
          </p>
        </div>

        {/* Flyer Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-3xl border border-amber-900/15 bg-white shadow-xl hover:shadow-2xl hover:border-amber-600/60 transition-all flex flex-col justify-between overflow-hidden"
            >
              {/* Card visual header */}
              <div className="p-7 bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider bg-amber-400/15 border border-amber-400/30 px-3 py-1 rounded-full">
                    {pkg.tag}
                  </span>
                  <span className="text-amber-200/80 text-xs font-semibold flex items-center gap-1">
                    <PackageCheck className="w-3.5 h-3.5 text-amber-400" /> Milawa Bakery Curated
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-black text-white leading-tight">
                  {pkg.title}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Package Highlights */}
              <div className="p-7 space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black text-amber-950 uppercase tracking-wider block mb-3">
                    Featured Highlights:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700">
                    {pkg.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-[#fcfaf7] border border-amber-900/10 p-2.5 rounded-xl font-medium">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-amber-900/10 flex flex-wrap items-center gap-3">
                  <a
                    href="#menu"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow transition-colors"
                  >
                    <span>Browse Catalogue &amp; Reserve</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </a>

                  <a
                    href="tel:0357273619"
                    className="inline-flex items-center justify-center gap-1.5 bg-amber-700 hover:bg-amber-800 text-white font-black py-3 px-5 rounded-xl text-xs sm:text-sm shadow transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call (03) 5727 3619</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tour Coordinator Notice Box */}
        <div className="mt-10 rounded-2xl bg-amber-100/90 border border-amber-300 p-6 sm:p-7 text-amber-950 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h4 className="font-serif font-black text-lg text-amber-950 flex items-center gap-2">
              <Bus className="w-5 h-5 text-amber-800" /> Tour Coach &amp; Group Hospitality Coordination
            </h4>
            <p className="text-sm text-amber-900 mt-1 leading-relaxed">
              We provide effortless bus logistics: coaches can pull directly into Factory Road with easy turning circle. Scones, tea, coffee, and gourmet picnic boxes are pre-labeled by seat or guest name for rapid morning tea stops. <br />
              <strong className="text-amber-950">Dietary Friendly:</strong> Gluten-friendly cakes, dairy-free picnic options, and vegetarian bakes baked fresh daily.
            </p>
          </div>
          <a
            href="tel:0357273619"
            className="shrink-0 bg-amber-700 hover:bg-amber-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-sm transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Book Coach Morning Tea
          </a>
        </div>

      </div>
    </section>
  );
}
