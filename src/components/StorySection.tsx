'use client';

import React from 'react';
import { Heart, Sparkles, Store, CheckCircle, Wheat, Coffee } from 'lucide-react';

export default function StorySection() {
  return (
    <section id="story" className="py-20 border-b border-amber-900/10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image & Location badge */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-amber-900/15 shadow-2xl bg-stone-900 group">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                alt="Artisan bakery sourdough loaves and gourmet pastries in Milawa"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-2 bg-amber-600 text-stone-950 font-black text-xs px-3.5 py-1.5 rounded-full mb-2.5 shadow-md">
                  <Store className="w-3.5 h-3.5" /> 15 Factory Rd, Milawa VIC
                </div>
                <h4 className="text-xl sm:text-2xl font-serif font-black text-white">
                  &ldquo;Honest Artisan Baking &amp; High Country Hospitality&rdquo;
                </h4>
                <p className="text-xs text-stone-300 mt-1">
                  Rooted in the heart of Victoria&apos;s premier gourmet food &amp; wine region.
                </p>
              </div>
            </div>

            {/* Corner floating badge */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-4 bg-white border border-amber-900/15 rounded-2xl p-4 shadow-xl hidden sm:flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-amber-700 text-amber-100 flex items-center justify-center font-serif font-black text-lg">
                M
              </div>
              <div>
                <span className="text-xs font-bold text-stone-950 block">Milawa Bakery Café</span>
                <span className="text-[11px] text-amber-800 font-semibold">Sourdough • Pies • Regional Hampers</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative text */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-600/15 text-amber-950 border border-amber-500/30 uppercase tracking-widest">
              <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" /> Our Milawa Heritage
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-stone-950 tracking-tight leading-tight">
              Baking In The Heart Of Victoria&apos;s Gourmet Epicenter
            </h2>

            <p className="text-stone-700 text-base leading-relaxed">
              Situated on Factory Road in the center of Milawa, we celebrate the culinary abundance of Victoria&apos;s High Country. From crisp morning air to golden late afternoons, our ovens work around the clock baking traditional 36-hour slow-fermented sourdoughs, all-butter puff pastry pies, and iconic country Devonshire scones.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              We proudly partner with neighboring regional heroes—including the renowned Milawa Cheese Company, local olive groves, King Valley berry growers, and High Country dairy farms—to craft our signature picnic hampers and banquet catering. Whether you arrive by bicycle on the rail trail, on a wine tour coach, or for Sunday family brunch, you are welcomed as family.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              <div className="rounded-2xl border border-amber-900/10 bg-[#fdfbf7] p-4">
                <span className="text-amber-800 font-serif font-black text-2xl block">36-Hour</span>
                <span className="text-xs font-bold text-stone-900 block mt-0.5">Cold Fermentation</span>
                <span className="text-[11px] text-stone-600 mt-1 block">Wild levain sourdough with deep roasted crust and gentle crumb.</span>
              </div>

              <div className="rounded-2xl border border-amber-900/10 bg-[#fdfbf7] p-4">
                <span className="text-emerald-700 font-serif font-black text-2xl block">Local</span>
                <span className="text-xs font-bold text-stone-900 block mt-0.5">Milawa Cheeses</span>
                <span className="text-[11px] text-stone-600 mt-1 block">Ashed goat cheese, gold washed rind, and vintage cheddar hampers.</span>
              </div>

              <div className="rounded-2xl border border-amber-900/10 bg-[#fdfbf7] p-4">
                <span className="text-amber-800 font-serif font-black text-2xl block">High Country</span>
                <span className="text-xs font-bold text-stone-900 block mt-0.5">Prime Ingredients</span>
                <span className="text-[11px] text-stone-600 mt-1 block">Slow-cooked local beef, King Valley cream, and free-range eggs.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
