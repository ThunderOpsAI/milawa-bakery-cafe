'use client';

import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, Plus, Minus, Trash2, CheckCircle2, Sparkles, X, Phone, Utensils, Coffee } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, MENU_TAGS, MenuItem, MenuCategory } from '@/data/menu';

export type CartItem = MenuItem & { quantity: number };

interface MenuProps {
  onCartChange?: (items: CartItem[]) => void;
}

export default function Menu({ onCartChange }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>('all');
  const [activeTag, setActiveTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Filter items based on Category, Tag, and Search Query
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      // Tag match
      if (activeTag !== 'All') {
        if (activeTag === 'Popular') {
          if (!item.popular && !item.tags?.includes('Popular')) return false;
        } else {
          if (!item.tags?.includes(activeTag)) return false;
        }
      }

      // Search query match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description ? item.description.toLowerCase().includes(query) : false;
        const matchesCat = item.category.toLowerCase().includes(query);
        const matchesTags = item.tags ? item.tags.some(t => t.toLowerCase().includes(query)) : false;

        if (!matchesName && !matchesDesc && !matchesCat && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, activeTag, searchQuery]);

  const updateQuantity = (id: string, delta: number) => {
    setCart((prevCart) => {
      const nextCart = prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = Math.min(Math.max(item.quantity + delta, 0), 99);
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);

      if (onCartChange) onCartChange(nextCart);
      return nextCart;
    });
  };

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((ci) => ci.id === item.id);
      let nextCart: CartItem[];
      if (existing) {
        nextCart = prevCart.map((ci) =>
          ci.id === item.id ? { ...ci, quantity: Math.min(ci.quantity + 1, 99) } : ci
        );
      } else {
        nextCart = [...prevCart, { ...item, quantity: 1 }];
      }
      if (onCartChange) onCartChange(nextCart);
      return nextCart;
    });
    setOrderPlaced(false);
  };

  const clearCart = () => {
    setCart([]);
    if (onCartChange) onCartChange([]);
  };

  const placeOrder = () => {
    if (cart.length > 0) {
      setOrderPlaced(true);
      setCart([]);
      if (onCartChange) onCartChange([]);
    }
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section id="menu" className="text-stone-900 font-sans pb-16 pt-8 bg-[#fcfaf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-600/15 text-amber-950 border border-amber-500/30 uppercase tracking-widest">
            <Utensils className="w-3.5 h-3.5 text-amber-700" /> Artisan Bakery &amp; Hamper Selection
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-stone-950 tracking-tight">
            Explore Our Milawa Menu
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            From warm stone-baked sourdough and slow-cooked gourmet pies to local cheese picnic hampers and barista coffee. Select items below, reserve your hamper, and collect at 15 Factory Road!
          </p>
        </div>

        {/* Search Bar & Tag Filter Row */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-md border border-amber-900/10 mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            {/* Live Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sourdough, beef burgundy pie, scones, Milawa cheese hamper, croissant, sandwich..."
                className="w-full bg-[#faf7f2] border border-amber-900/10 rounded-2xl pl-11 pr-10 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Result Count */}
            <div className="shrink-0 text-xs font-bold text-stone-600 px-3 py-2 bg-amber-100/60 rounded-xl">
              Showing <span className="text-stone-950 font-black">{filteredItems.length}</span> items
            </div>
          </div>

          {/* Tag Badges */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="font-bold text-stone-400 uppercase tracking-wider text-[10px] shrink-0 mr-1">
              Filter by:
            </span>
            {MENU_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3.5 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all ${
                  activeTag === tag
                    ? 'bg-amber-700 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Layout: Menu Items + Cart Drawer Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Menu Items Main Column */}
          <div className="flex-1 min-w-0 w-full">
            {/* Category Tabs Bar */}
            <div className="sticky top-[110px] z-30 py-2.5 bg-[#fcfaf7]/95 backdrop-blur-md mb-6">
              <div className="flex items-center gap-2 overflow-x-auto p-1.5 bg-white rounded-2xl shadow-sm border border-amber-900/10 scrollbar-none">
                {MENU_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id as MenuCategory | 'all')}
                    className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-1.5 transition-all ${
                      activeCategory === cat.id
                        ? 'bg-stone-950 text-white shadow-md'
                        : 'text-stone-700 hover:bg-amber-50 hover:text-stone-950'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items Grid */}
            {filteredItems.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
                <Utensils className="w-10 h-10 text-stone-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-stone-900">No matching items found</h3>
                <p className="text-sm text-stone-500 mt-1 max-w-sm mx-auto">
                  Try clearing your search query or switching to &ldquo;All Items&rdquo; to browse the full bakery menu.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                    setActiveTag('All');
                  }}
                  className="mt-4 px-4 py-2 bg-amber-700 text-white text-xs font-bold rounded-xl hover:bg-amber-800"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="group relative border border-amber-900/10 p-5 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(180,83,9,0.12)] hover:border-amber-500/50 flex flex-col justify-between bg-white hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
                  >
                    <div>
                      {/* Tags & Popular Badge */}
                      <div className="flex items-center gap-1.5 mb-2.5 flex-wrap">
                        {item.popular && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider bg-amber-600 text-white px-2 py-0.5 rounded-full">
                            <Sparkles className="w-3 h-3 text-amber-200" /> High Country Favourite
                          </span>
                        )}
                        {item.tags?.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200/60 px-2 py-0.5 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <h3 className="font-bold text-base sm:text-lg text-stone-950 leading-snug group-hover:text-amber-800 transition-colors">
                        {item.name}
                      </h3>

                      {item.description && (
                        <p className="text-stone-600 text-xs sm:text-sm mt-1.5 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-stone-100">
                      <span className="font-serif font-black text-lg sm:text-xl text-stone-950">
                        ${item.price.toFixed(2)}
                      </span>
                      <button
                        type="button"
                        onClick={() => addToCart(item)}
                        aria-label={`Add ${item.name} to hamper order`}
                        className="inline-flex items-center justify-center h-8 sm:h-9 px-3.5 text-xs font-bold rounded-xl bg-amber-700 hover:bg-amber-800 active:bg-amber-900 text-white transition-all shadow-sm active:scale-95"
                      >
                        <Plus className="w-3.5 h-3.5 mr-1" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Fresh Daily High Country Sourdough callout */}
            <div className="mt-8 p-6 bg-gradient-to-r from-amber-100/90 via-orange-50 to-amber-100/70 rounded-3xl border border-amber-300 shadow-sm text-amber-950">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xl">🥖</span>
                <h4 className="font-serif font-black text-amber-950 text-base">Fresh Artisan Bakes Daily from 7:30 AM</h4>
              </div>
              <p className="text-amber-950/80 text-xs sm:text-sm leading-relaxed font-medium">
                Our sourdoughs undergo 36 hours of cold natural fermentation for peak digestive wellness and rich crusty flavor. Hampers and cyclist packs include our freshly pulled stone-baked baguettes and local King Valley dairy butter.
              </p>
            </div>
          </div>

          {/* Cart / Hamper Sidebar Column */}
          <div className="w-full lg:w-[380px] xl:w-[420px] flex-shrink-0">
            <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-xl sticky top-28 border border-amber-900/15">
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <h3 className="text-xl sm:text-2xl font-serif font-black text-stone-950 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-amber-700" />
                  <span>Your Hamper Order</span>
                </h3>
                {cart.length > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="bg-stone-950 text-white text-xs py-1 px-3 rounded-full font-bold">
                      {cartItemCount} items
                    </span>
                    <button
                      onClick={clearCart}
                      className="text-stone-400 hover:text-rose-500 p-1"
                      title="Clear Cart"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {orderPlaced && (
                <div className="my-5 p-4 bg-emerald-50 text-emerald-900 rounded-2xl border border-emerald-300 shadow-sm animate-in fade-in slide-in-from-top-4">
                  <p className="font-black text-base flex items-center gap-1.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Hamper Details Ready!
                  </p>
                  <p className="text-xs sm:text-sm mt-1 text-emerald-800 leading-relaxed font-medium">
                    Your hamper and bakery selection has been noted. Please call our bakery on (03) 5727 3619 to confirm your collection time and counter reservation at 15 Factory Road.
                  </p>
                  <a
                    href="tel:0357273619"
                    className="mt-3 inline-flex items-center justify-center gap-2 w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call (03) 5727 3619 to Confirm
                  </a>
                </div>
              )}

              {cart.length === 0 ? (
                !orderPlaced && (
                  <div className="text-stone-500 text-center py-12 bg-[#faf7f2] rounded-2xl border-2 border-dashed border-amber-900/15 mt-5">
                    <ShoppingBag className="w-10 h-10 mx-auto mb-2 text-amber-700/40" />
                    <p className="font-bold text-base text-stone-700">Your hamper basket is empty</p>
                    <p className="text-xs mt-1 text-stone-500">Add cheese hampers, sourdough baguettes, pies, or scones above!</p>
                  </div>
                )
              ) : (
                <div className="mt-5 space-y-5">
                  <div className="max-h-[380px] overflow-y-auto pr-1 space-y-3 scrollbar-thin">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col text-xs sm:text-sm bg-[#faf7f2] p-3.5 rounded-xl border border-amber-900/10"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <p className="font-extrabold text-stone-900 leading-tight pr-2">
                            {item.name}
                          </p>
                          <span className="font-black text-stone-950 shrink-0">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between pt-1">
                          <span className="text-[11px] text-stone-500">
                            ${item.price.toFixed(2)} each
                          </span>
                          <div className="flex items-center bg-white rounded-lg border border-stone-300 shadow-sm">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, -1)}
                              aria-label={`Decrease ${item.name} quantity`}
                              className="w-7 h-7 flex items-center justify-center text-stone-700 hover:bg-stone-100 rounded font-bold"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-black w-6 text-center text-stone-950">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, 1)}
                              aria-label={`Increase ${item.name} quantity`}
                              className="w-7 h-7 flex items-center justify-center text-stone-700 hover:bg-stone-100 rounded font-bold"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-dashed border-stone-300">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-base font-bold text-stone-600">Estimated Total</span>
                      <span className="text-2xl sm:text-3xl font-serif font-black text-stone-950">
                        ${cartTotal.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={placeOrder}
                      className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3.5 rounded-xl font-black text-sm transition-all shadow-md active:scale-[0.98] flex justify-center items-center gap-2"
                    >
                      <span>Reserve &amp; Finalize Hamper</span>
                    </button>

                    <div className="mt-3 text-center">
                      <p className="text-[11px] text-stone-500">
                        No prepayment required online • Pay upon collection at 15 Factory Rd, Milawa
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
