'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DirectOrderBanner from '@/components/DirectOrderBanner';
import FlyersSection from '@/components/FlyersSection';
import Menu, { CartItem } from '@/components/Menu';
import CateringSection from '@/components/CateringSection';
import StorySection from '@/components/StorySection';
import LocationHours from '@/components/LocationHours';
import Footer from '@/components/Footer';
import AdminLeadsDrawer from '@/components/AdminLeadsDrawer';

export default function Home() {
  const [isLeadsDrawerOpen, setIsLeadsDrawerOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleCartChange = (items: CartItem[]) => {
    const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalCount);
  };

  const scrollToMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#fcfaf7] text-stone-900 font-sans selection:bg-amber-200 selection:text-amber-950">
      {/* Sticky Modular Header */}
      <Navbar
        onOpenLeadsModal={() => setIsLeadsDrawerOpen(true)}
        cartCount={cartCount}
        onCartClick={scrollToMenu}
      />

      {/* Hero Section */}
      <Hero />

      {/* Pre-Order Hampers & Picnic Packs */}
      <DirectOrderBanner />

      {/* Regional Tourism Menu Catalogue & Tour Hospitality */}
      <FlyersSection />

      {/* Interactive Food Menu & Shopping Cart */}
      <Menu onCartChange={handleCartChange} />

      {/* Tour Bus & Large Group Catering Coordinator Form */}
      <CateringSection />

      {/* The Milawa Baking Heritage Story */}
      <StorySection />

      {/* Trading Hours, Location Map & Contact */}
      <LocationHours />

      {/* Site Footer with Admin Drawer Trigger */}
      <Footer onOpenLeadsModal={() => setIsLeadsDrawerOpen(true)} />

      {/* Admin Leads Slide-Over Drawer (Neon Postgres / Fallback DB) */}
      <AdminLeadsDrawer
        isOpen={isLeadsDrawerOpen}
        onClose={() => setIsLeadsDrawerOpen(false)}
      />
    </main>
  );
}
