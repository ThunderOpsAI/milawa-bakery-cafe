'use client';

import React from 'react';
import { Phone, MapPin, Clock, Heart, Database, Mail } from 'lucide-react';

interface FooterProps {
  onOpenLeadsModal?: () => void;
}

export default function Footer({ onOpenLeadsModal }: FooterProps) {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 text-stone-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-700 border border-amber-600 flex items-center justify-center text-amber-100 font-serif font-black text-xl">
                M
              </div>
              <div>
                <span className="font-serif font-black tracking-tight text-lg text-white">
                  Milawa Bakery <span className="text-amber-500 font-sans">Café</span>
                </span>
                <p className="text-[10px] tracking-wider text-amber-400 uppercase font-semibold">
                  Milawa Gourmet Region
                </p>
              </div>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              Handcrafting artisanal sourdough loaves, slow-braised country pies, famous Devonshire scones, and regional Milawa cheese picnic hampers for travelers and locals alike.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:0357273619"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-white bg-stone-900 border border-stone-800 px-3 py-2 rounded-xl transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call (03) 5727 3619</span>
              </a>
              <a
                href="mailto:info@milawabakery.com.au"
                className="inline-flex items-center gap-2 text-xs font-semibold text-stone-300 hover:text-amber-400 bg-stone-900/60 border border-stone-800 px-3 py-1.5 rounded-xl transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>info@milawabakery.com.au</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Artisan Menu &amp; Hampers</a></li>
              <li><a href="#direct-order" className="hover:text-amber-400 transition-colors">Picnic Packs &amp; Rail Trail</a></li>
              <li><a href="#catalogue" className="hover:text-amber-400 transition-colors">Regional Tour Packages</a></li>
              <li><a href="#catering" className="hover:text-amber-400 transition-colors">Group Bus &amp; Tour Catering</a></li>
              <li><a href="#story" className="hover:text-amber-400 transition-colors">Our Milawa Baking Heritage</a></li>
              <li><a href="#location" className="hover:text-amber-400 transition-colors">Trading Hours &amp; Location</a></li>
            </ul>
          </div>

          {/* Contact Details with exact hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact &amp; Location</h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-stone-300">
                  15 Factory Rd (Snow Rd), <br />
                  Milawa, VIC 3678
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:0357273619" className="hover:text-white font-black text-amber-400 text-sm">
                  (03) 5727 3619
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-stone-300">
                  Monday – Sunday: <br />
                  7:30 AM – 4:30 PM (7 Days)
                </span>
              </div>
            </div>
          </div>

          {/* Direct Pickups & Lead Hub */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Hamper Reservations</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Pre-order gourmet cheese hampers and group coach morning tea for fast collection on Factory Road.
            </p>
            <div className="space-y-2.5 pt-1">
              <a
                href="tel:0357273619"
                className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-stone-950 font-black py-2.5 rounded-xl text-xs shadow-md transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                Call (03) 5727 3619
              </a>

              {onOpenLeadsModal && (
                <button
                  onClick={onOpenLeadsModal}
                  className="w-full flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-amber-400 border border-stone-800 py-2 rounded-xl text-xs transition-colors"
                >
                  <Database className="w-3.5 h-3.5 text-amber-500" />
                  <span>⚡ Open Tour &amp; Hamper Leads (Neon DB)</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Milawa Bakery Café. All rights reserved.</p>
          <p className="flex items-center gap-1 text-stone-400">
            Handcrafted in the Milawa Gourmet Region <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
