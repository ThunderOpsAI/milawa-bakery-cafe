'use client';

import React from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink, Car, CheckCircle, Mail, Bike, Bus } from 'lucide-react';

export default function LocationHours() {
  const schedule = [
    { day: 'Monday', hours: '7:30 AM – 4:30 PM', open: true },
    { day: 'Tuesday', hours: '7:30 AM – 4:30 PM', open: true },
    { day: 'Wednesday', hours: '7:30 AM – 4:30 PM', open: true },
    { day: 'Thursday', hours: '7:30 AM – 4:30 PM', open: true },
    { day: 'Friday', hours: '7:30 AM – 4:30 PM', open: true },
    { day: 'Saturday', hours: '7:30 AM – 4:30 PM', open: true },
    { day: 'Sunday', hours: '7:30 AM – 4:30 PM', open: true },
  ];

  return (
    <section id="location" className="py-20 border-b border-amber-900/10 bg-[#faf6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-600/15 text-amber-950 border border-amber-500/30 uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-amber-700" /> Visit Us in Milawa
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-stone-950 tracking-tight">
            Trading Hours &amp; Location
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Conveniently situated at 15 Factory Road (off Snow Road) in the Milawa Gourmet Region, with spacious coach parking and secure cyclist bike bays.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location & Contact Info */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div className="rounded-3xl border border-amber-900/15 bg-white p-6 sm:p-8 space-y-6 shadow-xl">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-600/15 border border-amber-500/30 text-amber-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-950">Bakery &amp; Café Address</h3>
                  <p className="text-stone-800 text-base font-bold mt-1">
                    15 Factory Rd (Snow Rd), Milawa, VIC 3678
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Opposite the cheese factory, right in the heart of the Milawa village
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/15 border border-orange-500/30 text-orange-700 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-950">Phone Reservations &amp; Orders</h3>
                  <a
                    href="tel:0357273619"
                    className="text-amber-800 text-xl font-serif font-black hover:underline block mt-1"
                  >
                    (03) 5727 3619
                  </a>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Mobile: 0458 581 681 • Call to reserve hampers or group seating
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-800 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-950">Email Enquiries</h3>
                  <a
                    href="mailto:info@milawabakery.com.au"
                    className="text-stone-700 font-semibold hover:text-amber-800 text-sm block mt-1"
                  >
                    info@milawabakery.com.au
                  </a>
                  <p className="text-xs text-stone-500 mt-0.5">
                    For corporate catering briefs, coach tour bookings, and wholesale inquiries
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 flex items-center justify-center shrink-0">
                  <Bike className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-950">Cyclists &amp; Coach Operators</h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    Easy turn-in bay for full-sized touring coaches and minibuses. Dedicated bike racks for Murray to Mountains Rail Trail riders, shaded outdoor seating, and water bottle refill stations.
                  </p>
                </div>
              </div>

              {/* Google Maps Embed / Link Card */}
              <div className="rounded-2xl overflow-hidden border border-amber-900/10 h-48 bg-stone-100 relative">
                <iframe
                  title="Milawa Bakery Cafe Location Map"
                  src="https://maps.google.com/maps?q=15+Factory+Rd+Milawa+VIC+3678&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=15+Factory+Rd+Milawa+VIC+3678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md text-sm"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours Table */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-amber-900/15 bg-white p-6 sm:p-8 flex flex-col justify-between h-full shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-700" />
                    <h3 className="text-lg font-bold text-stone-950">Opening Hours</h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-3 py-1 rounded-full">
                    Open 7 Days a Week
                  </span>
                </div>

                <div className="divide-y divide-stone-100">
                  {schedule.map((slot) => (
                    <div
                      key={slot.day}
                      className="py-3.5 flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span className="font-bold text-stone-900">
                          {slot.day}
                        </span>
                      </div>
                      <span className="font-mono text-xs px-3 py-1 rounded-lg bg-amber-50 text-amber-950 border border-amber-200 font-bold">
                        {slot.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order options card */}
              <div className="mt-8 pt-6 border-t border-stone-200 space-y-4">
                <div className="flex items-center justify-between text-xs text-stone-600">
                  <span>Fresh daily bread, pies &amp; coffee from 7:30 AM</span>
                  <span className="text-amber-800 font-bold">• 15 Factory Rd, Milawa</span>
                </div>

                <a
                  href="tel:0357273619"
                  className="w-full flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 active:bg-amber-900 text-white py-4 rounded-xl text-sm font-black transition-all shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  Call (03) 5727 3619 to Reserve Hampers
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
