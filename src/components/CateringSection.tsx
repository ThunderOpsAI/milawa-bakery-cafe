'use client';

import React, { useState } from 'react';
import { Users, Calendar, Utensils, CheckCircle, Sparkles, Send, PhoneCall, AlertCircle, Clock, Bus, Coffee } from 'lucide-react';

export default function CateringSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('Tour Bus Morning Tea & Scone Platter');
  const [guestCount, setGuestCount] = useState('25');
  const [eventDate, setEventDate] = useState('');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Estimate calculation: ~$16 per person base package
  const estimatedTotal = Math.max(8, parseInt(guestCount || '8', 10)) * 16;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          service_type: serviceType,
          guest_count: guestCount,
          event_date: eventDate,
          notes: notes ? `${notes} (Est. budget: ~$${estimatedTotal})` : `Est. budget: ~$${estimatedTotal}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitSuccess(true);
        setName('');
        setPhone('');
        setEmail('');
        setNotes('');
      } else {
        setErrorMessage(data.error || 'Failed to submit inquiry. Please call our bakery coordinator directly.');
      }
    } catch {
      setErrorMessage('Network error occurred. Please call our bakery directly on (03) 5727 3619.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="catering" className="py-20 border-b border-amber-900/15 bg-stone-950 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Catering Pitch & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-widest">
              <Bus className="w-3.5 h-3.5 text-amber-400" /> Group Tours &amp; Regional Bus Catering
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight leading-snug">
              Effortless Tour &amp; Group Catering in Milawa
            </h2>

            <p className="text-stone-300 text-base leading-relaxed">
              Managing a coach tour group, seniors excursion, King Valley winery minibus, wedding morning tea, or Rail Trail cycling team? Milawa Bakery Café coordinates rapid, generous, and delicious High Country catering.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 bg-stone-900/90 p-4 rounded-2xl border border-stone-800">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Tour Bus Morning Tea &amp; Scone Platters</h4>
                  <p className="text-stone-300 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    Warm buttermilk Devonshire scones, local strawberry conserve, King Valley double cream, and barista espresso coffees ready the moment your coach arrives.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-stone-900/90 p-4 rounded-2xl border border-stone-800">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Hot Artisan Pie &amp; Savoury Platters</h4>
                  <p className="text-stone-300 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    Platters of slow-braised beef &amp; burgundy party pies, pork &amp; fennel sausage rolls, and roasted vegetable quiches kept warm in professional transport packaging.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-stone-900/90 p-4 rounded-2xl border border-stone-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Milawa Picnic Hampers &amp; Cyclist Boxes</h4>
                  <p className="text-stone-300 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    Individually boxed or grazing basket spreads with local Milawa Cheese Co cheeses, freshly baked artisan sourdough baguettes, charcuterie, and house pastries.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-stone-300 flex items-center justify-between gap-4">
              <div>
                <span className="font-bold text-amber-300 block">Same-Day Tour Inquiries?</span>
                <span>Call our kitchen directly for rapid coach turnaround times.</span>
              </div>
              <a
                href="tel:0357273619"
                className="shrink-0 inline-flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-black px-3.5 py-2 rounded-xl text-xs transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" /> (03) 5727 3619
              </a>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-6">
            <div className="bg-stone-900/95 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-serif font-black text-white">
                  Request Group Tour Catering
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 mt-1">
                  Tell us your tour dates and party size. Our catering coordinator will follow up promptly with menu confirmation.
                </p>
              </div>

              {submitSuccess ? (
                <div className="py-10 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Catering Request Received!</h4>
                  <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you! Your tour catering request has been logged. Our Milawa Bakery Café coordinator will review your booking and call you back shortly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs rounded-xl flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Your Name / Coordinator *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 0428 512 890"
                        className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Email Address (optional)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="eleanor@tours.com.au"
                        className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Catering Style
                      </label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="Tour Bus Morning Tea & Scone Platter">Tour Bus Morning Tea &amp; Scone Platter</option>
                        <option value="Gourmet Milawa Picnic Hamper Boxes">Gourmet Milawa Picnic Hamper Boxes</option>
                        <option value="Hot Bakery Pie & Savoury Platters">Hot Bakery Pie &amp; Savoury Platters</option>
                        <option value="Cyclist Group Lunch Packs (Rail Trail)">Cyclist Group Lunch Packs (Rail Trail)</option>
                        <option value="Artisan Sandwich & Baguette Grazing Trays">Artisan Sandwich &amp; Baguette Grazing Trays</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Estimated Guests: <span className="text-amber-400 font-bold">{guestCount} guests</span>
                      </label>
                      <input
                        type="number"
                        min="5"
                        max="200"
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Preferred Date / Arrival Time
                      </label>
                      <input
                        type="text"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        placeholder="e.g. Saturday 11:30 AM"
                        className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Tour Notes &amp; Dietary Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. 35 guests, coach drop-off on Factory Rd, 4 gluten-friendly scones, 3 vegetarian quiches..."
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  {/* Dynamic Estimate Badge */}
                  <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 flex items-center justify-between text-xs">
                    <span className="text-stone-400">Estimated Guide Budget:</span>
                    <span className="text-amber-400 font-serif font-black text-sm">~${estimatedTotal} AUD</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-600 hover:bg-amber-500 active:bg-amber-700 disabled:opacity-50 text-stone-950 font-black py-3.5 px-4 rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Tour &amp; Hamper Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
