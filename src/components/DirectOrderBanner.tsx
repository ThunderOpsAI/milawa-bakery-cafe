'use client';

import React from 'react';
import { Phone, CheckCircle2, ShoppingBag, Bike, Wine, Clock, Sparkles } from 'lucide-react';

export default function DirectOrderBanner() {
  return (
    <section id="direct-order" className="py-14 border-b border-amber-900/10 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amber-300/80 bg-gradient-to-br from-amber-50/90 via-stone-50 to-orange-50/60 p-6 sm:p-10 shadow-lg relative overflow-hidden">
          
          {/* Subtle decoration badge */}
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-amber-600/15 text-amber-950 border border-amber-500/30 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" /> High Country Regional Tourism • Pre-Order &amp; Collect
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-stone-950 tracking-tight">
              Pre-Order Gourmet Hampers &amp; Picnic Packs
            </h2>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Exploring the King Valley wineries, Murray to Mountains Rail Trail, or historic Milawa village? Avoid peak-hour queues by reserving your artisanal sourdough hampers and picnic boxes ahead of time for swift collection at 15 Factory Road.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Direct Hamper Pre-Order Card */}
            <div className="rounded-2xl border-2 border-amber-600/50 bg-white p-6 sm:p-7 space-y-5 flex flex-col justify-between shadow-md">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-black text-amber-900 text-lg flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-amber-700" />
                    Reserve Ahead: (03) 5727 3619
                  </span>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full border border-amber-300">
                    Tourists &amp; Cyclists
                  </span>
                </div>

                <ul className="space-y-3 text-sm text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Milawa Cheese &amp; Artisan Bread:</strong> Curated hampers featuring local Milawa Cheese Co cheeses, freshly baked baguettes, and High Country condiments.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Skip Weekend Crowds:</strong> Packed fresh in insulated picnic boxes, chilled and ready for immediate pick-up when you arrive in Milawa.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Custom Dietary Accommodations:</strong> Pre-arrange vegetarian, gluten-friendly, or tailored sweet &amp; savoury ratios directly with our bakers.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>100% High Country Local:</strong> Every loaf, pie, and hamper supports regional dairy farms, grain growers, and artisan producers.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="#menu"
                  className="w-full flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 active:bg-amber-900 text-white font-black py-4 rounded-xl shadow-md transition-all text-sm sm:text-base hover:scale-[1.01]"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Select &amp; Reserve Your Hamper Online
                </a>
              </div>
            </div>

            {/* Cyclist & Tour Group Convenience */}
            <div className="rounded-2xl border border-stone-300/80 bg-white/80 p-6 sm:p-7 space-y-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-extrabold text-stone-800 text-base flex items-center gap-2">
                    <Bike className="w-5 h-5 text-amber-700" />
                    Rail Trail &amp; Winery Tour Ease
                  </span>
                  <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                    Easy Access
                  </span>
                </div>

                <ul className="space-y-3 text-sm text-stone-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                    <span><strong>Dedicated Bike Racks:</strong> Ample parking for Murray to Mountains rail trail riders right beside our outdoor cafe deck.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                    <span><strong>Coach &amp; Minibus Bay:</strong> Easy pull-in access along Factory Road with turnaround space for tour groups and coaches.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                    <span><strong>Barista Coffee on Arrival:</strong> Pair your hampers with freshly extracted espresso roasted for the High Country.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                    <span><strong>Eco-Friendly Packaging:</strong> Recyclable and compostable hamper containers made for scenic outdoor dining.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 text-center">
                <p className="text-xs text-stone-500 font-medium">
                  Located at 15 Factory Rd (Snow Rd), Milawa • Open 7 days a week from 7:30 AM
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
