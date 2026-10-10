export type MenuCategory = 'hampers' | 'pies' | 'sourdough' | 'sweets' | 'cafe' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: MenuCategory;
  description?: string;
  tags?: string[];
  popular?: boolean;
}

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Items', icon: '🧺' },
  { id: 'hampers', label: 'Gourmet Hampers & Picnics', icon: '🍷' },
  { id: 'pies', label: 'Artisan Pies & Savouries', icon: '🥧' },
  { id: 'sourdough', label: 'Artisan Sourdough & Breads', icon: '🥖' },
  { id: 'sweets', label: 'Cakes, Scones & Pastries', icon: '🥐' },
  { id: 'cafe', label: 'Café Sandwiches & Lunch', icon: '🥪' },
  { id: 'drinks', label: 'Specialty Coffee & Drinks', icon: '☕' },
] as const;

export const MENU_TAGS = ['All', 'Popular', 'Gourmet Hamper', 'Signature Bake', 'Tour Group', 'Vegetarian'] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Gourmet Hampers & Picnic Packs
  {
    id: "h1",
    name: "Milawa Gourmet Artisan Cheese Hamper",
    price: 68.00,
    category: "hampers",
    description: "Curated regional picnic basket featuring local Milawa Cheese Co cheeses, freshly baked artisan sourdough baguette, local quince paste, charcuterie, crackers, and house berry tartlets. Serves 2–3.",
    tags: ["Popular", "Gourmet Hamper"],
    popular: true
  },
  {
    id: "h2",
    name: "Rail Trail Cyclist Picnic Pack",
    price: 32.00,
    category: "hampers",
    description: "Compact backpack-friendly feast for Murray to Mountains cyclists: artisan ham & cheese seeded roll, gourmet beef party pie, fresh energy slice, and regional mineral water. Serves 1.",
    tags: ["Gourmet Hamper", "Tour Group"]
  },
  {
    id: "h3",
    name: "King Valley Vineyard Tasting Hamper",
    price: 85.00,
    category: "hampers",
    description: "Deluxe winery-day spread with three local cheeses, freshly baked herb focaccia, gourmet pork & fennel terrine, High Country olives, house chutney, and artisan dark chocolate brownies. Serves 2–4.",
    tags: ["Popular", "Gourmet Hamper"],
    popular: true
  },
  {
    id: "h4",
    name: "Tour Bus Devonshire Morning Tea Pack (Per Person)",
    price: 14.50,
    category: "hampers",
    description: "Two freshly baked warm Milawa bakery scones, rich strawberry conserve, clotted King Valley double cream, and a barista hot beverage or bottled juice. Minimum 5 packs.",
    tags: ["Tour Group", "Popular"],
    popular: true
  },
  {
    id: "h5",
    name: "Milawa Grazing Picnic Box (4-6 Persons)",
    price: 110.00,
    category: "hampers",
    description: "Generous picnic box packed with two warm crusty sourdough baguettes, Milawa Cheddar & Camembert, cured prosciutto, house roasted nuts, savory quiche slices, and sweet Danish pastries.",
    tags: ["Gourmet Hamper"]
  },

  // Artisan Pies & Savouries
  {
    id: "p1",
    name: "Slow-Cooked Beef & Burgundy Pie",
    price: 9.80,
    category: "pies",
    description: "Tender chunks of local prime beef simmered in rich red wine gravy with button mushrooms, encased in crisp buttery golden puff pastry.",
    tags: ["Popular", "Signature Bake"],
    popular: true
  },
  {
    id: "p2",
    name: "Chunky Pepper Steak Pie",
    price: 9.80,
    category: "pies",
    description: "Generous hand-cut tender beef steak in a bold, cracked black peppercorn reduction inside flaky artisan pastry.",
    tags: ["Signature Bake"]
  },
  {
    id: "p3",
    name: "Roast Chicken, Leek & Camembert Pie",
    price: 10.20,
    category: "pies",
    description: "Succulent shredded free-range chicken breast with braised leeks and melted local creamy Camembert cheese.",
    tags: ["Popular", "Signature Bake"],
    popular: true
  },
  {
    id: "p4",
    name: "Traditional High Country Lamb & Rosemary Pie",
    price: 9.90,
    category: "pies",
    description: "Slow-roasted lamb shoulder with fragrant garden rosemary, sweet caramelized onion, and rich pan pan jus.",
    tags: ["Signature Bake"]
  },
  {
    id: "p5",
    name: "House Pork, Fennel & Apple Sausage Roll",
    price: 7.50,
    category: "pies",
    description: "Hand-rolled seasoned free-range pork mince with toasted fennel seeds, apple, and herbs wrapped in flaky golden puff pastry.",
    tags: ["Popular", "Signature Bake"],
    popular: true
  },
  {
    id: "p6",
    name: "Roasted Pumpkin, Feta & Spinach Roll",
    price: 7.20,
    category: "pies",
    description: "Sweet roasted butternut pumpkin, crumbled Gippsland feta, and fresh spinach in sesame-crusted golden pastry.",
    tags: ["Vegetarian", "Signature Bake"]
  },
  {
    id: "p7",
    name: "Classic Milawa Bakery Steak & Mushroom Pie",
    price: 9.50,
    category: "pies",
    description: "Traditional High Country family recipe with tender beef chunks and wild mushrooms.",
    tags: ["Signature Bake"]
  },
  {
    id: "p8",
    name: "Warm Lorraine or Spinach Quiche",
    price: 8.50,
    category: "pies",
    description: "Deep-dish individual quiche with smoky bacon or baby spinach, rich egg custard, and vintage cheese in shortcrust pastry.",
    tags: ["Vegetarian", "Tour Group"]
  },

  // Artisan Sourdough & Breads
  {
    id: "s1",
    name: "Milawa Signature Country White Sourdough Loaf",
    price: 8.50,
    category: "sourdough",
    description: "Naturally leavened 36-hour slow fermented sourdough with a blistered, crunchy golden crust and tender, airy crumb.",
    tags: ["Popular", "Signature Bake"],
    popular: true
  },
  {
    id: "s2",
    name: "Kalamata Olive & Fresh Rosemary Batard",
    price: 9.80,
    category: "sourdough",
    description: "Artisan sourdough studded with plump Greek Kalamata olives, fresh rosemary, and cold-pressed olive oil.",
    tags: ["Signature Bake", "Vegetarian"]
  },
  {
    id: "s3",
    name: "Heritage Multi-Seed Sourdough",
    price: 9.20,
    category: "sourdough",
    description: "Nutty loaf packed with toasted sunflower, pumpkin, chia seeds, and golden linseed.",
    tags: ["Signature Bake", "Vegetarian"]
  },
  {
    id: "s4",
    name: "Traditional French Crusty Baguette",
    price: 5.50,
    category: "sourdough",
    description: "Stone-baked crisp Parisian-style baguette with golden blistered crust. Perfect for cheese picnics and dipping.",
    tags: ["Popular", "Gourmet Hamper"],
    popular: true
  },
  {
    id: "s5",
    name: "Rosemary & Sea Salt Ciabatta",
    price: 7.80,
    category: "sourdough",
    description: "Light, open-textured Italian ciabatta loaf brushed with extra virgin olive oil and sea salt flakes.",
    tags: ["Vegetarian"]
  },
  {
    id: "s6",
    name: "High Country Spiced Fruit & Nut Loaf",
    price: 10.50,
    category: "sourdough",
    description: "Dense artisan sourdough loaded with plump sultanas, currants, dried figs, cinnamon, and toasted walnuts.",
    tags: ["Signature Bake", "Popular"],
    popular: true
  },

  // Cakes, Scones & Pastries
  {
    id: "sw1",
    name: "Famous Milawa Devonshire Scones (Pair)",
    price: 9.50,
    category: "sweets",
    description: "Two freshly baked fluffy buttermilk scones served warm with house-made King Valley strawberry jam and thick double cream.",
    tags: ["Popular", "Signature Bake", "Tour Group"],
    popular: true
  },
  {
    id: "sw2",
    name: "Twice-Baked Almond Croissant",
    price: 7.50,
    category: "sweets",
    description: "Flaky all-butter croissant filled with almond frangipane cream, topped with toasted sliced almonds and powdered sugar.",
    tags: ["Popular", "Signature Bake"],
    popular: true
  },
  {
    id: "sw3",
    name: "Raspberry & Pistachio Frangipane Tartlet",
    price: 7.80,
    category: "sweets",
    description: "Sweet butter shortcrust filled with pistachio almond cream, topped with fresh raspberries and berry glaze.",
    tags: ["Signature Bake", "Vegetarian"]
  },
  {
    id: "sw4",
    name: "High Country Honey & Walnut Carrot Cake",
    price: 8.00,
    category: "sweets",
    description: "Moist spiced carrot cake enriched with local Milawa honey, toasted walnuts, and a velvety lemon cream cheese frosting.",
    tags: ["Popular", "Signature Bake"],
    popular: true
  },
  {
    id: "sw5",
    name: "Classic Vanilla Bean Custard Tart",
    price: 6.80,
    category: "sweets",
    description: "Traditional baked silky egg custard infused with real Madagascar vanilla bean and freshly grated nutmeg.",
    tags: ["Signature Bake"]
  },
  {
    id: "sw6",
    name: "Gluten-Friendly Chocolate & Hazelnut Brownie",
    price: 6.50,
    category: "sweets",
    description: "Decadent dark chocolate brownie loaded with roasted High Country hazelnuts and melted chocolate chunks.",
    tags: ["Vegetarian"]
  },
  {
    id: "sw7",
    name: "Golden Lemon Meringue Tart",
    price: 7.50,
    category: "sweets",
    description: "Zesty house-cooked lemon curd topped with pillowy toasted Italian meringue torched golden.",
    tags: ["Signature Bake"]
  },

  // Café Sandwiches & Lunch
  {
    id: "cf1",
    name: "Milawa Ham, Gruyere & Dijon Baguette",
    price: 13.50,
    category: "cafe",
    description: "Smoked artisan leg ham, melted Swiss gruyere, seeded Dijon mustard, dill pickles, and crisp rocket on crusty baguette.",
    tags: ["Popular", "Tour Group"],
    popular: true
  },
  {
    id: "cf2",
    name: "Poached Herb Chicken & Avocado Sourdough",
    price: 14.00,
    category: "cafe",
    description: "Tender herb poached chicken breast, smashed fresh avocado, tarragon aioli, and baby spinach on toasted country sourdough.",
    tags: ["Popular"],
    popular: true
  },
  {
    id: "cf3",
    name: "Roasted Med Veg & Pesto Focaccia",
    price: 13.00,
    category: "cafe",
    description: "Char-grilled zucchini, bell peppers, eggplant, local goat feta, and basil pesto toasted on olive oil focaccia.",
    tags: ["Vegetarian"]
  },
  {
    id: "cf4",
    name: "Gourmet BLAT on Toasted Sourdough",
    price: 14.50,
    category: "cafe",
    description: "Crispy double-smoked bacon, wild rocket, ripe heirloom tomatoes, avocado, and smoked garlic mayo.",
    tags: ["Popular"]
  },
  {
    id: "cf5",
    name: "House Quiche & Garden Salad Plate",
    price: 15.50,
    category: "cafe",
    description: "Generous slice of freshly baked quiche served warm with crisp regional salad greens, balsamic glaze, and bakery relish.",
    tags: ["Tour Group", "Vegetarian"]
  },

  // Specialty Coffee & Cold Drinks
  {
    id: "dr1",
    name: "Specialty Barista Coffee (Cup / Mug)",
    price: 4.80,
    category: "drinks",
    description: "Artisan roasted espresso beans prepared with fresh local Alpine Valley dairy milk or premium plant milks.",
    tags: ["Popular"],
    popular: true
  },
  {
    id: "dr2",
    name: "Iced Latte / Iced Coffee with Cream",
    price: 6.80,
    category: "drinks",
    description: "Double espresso shot poured over chilled milk, ice cubes, and crowned with vanilla bean ice cream.",
    tags: ["Popular"]
  },
  {
    id: "dr3",
    name: "High Country Spiced Chai Latte",
    price: 5.20,
    category: "drinks",
    description: "Brewed loose-leaf spiced black tea with local honey, cinnamon, cardamom, and steamed velvety milk.",
    tags: ["Vegetarian"]
  },
  {
    id: "dr4",
    name: "Fresh Regional Apple & Berry Juice (350ml)",
    price: 5.50,
    category: "drinks",
    description: "100% pure cold-pressed Victorian orchard juice without preservatives.",
    tags: ["Gourmet Hamper"]
  },
  {
    id: "dr5",
    name: "Hepburn Springs Flavoured Sparkling Water (330ml)",
    price: 4.80,
    category: "drinks",
    description: "Mineral water from nearby Victorian springs in Blood Orange, Lemon, or Organic Pink Grapefruit.",
    tags: ["Gourmet Hamper"]
  },
  {
    id: "dr6",
    name: "Pure Victorian Spring Water (600ml)",
    price: 3.80,
    category: "drinks",
    description: "Natural still spring water bottle, ideal for tour coaches and cycling trail trips.",
    tags: ["Tour Group"]
  }
];
