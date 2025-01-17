import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.cafe': 'Cafe',
    'nav.store': 'Store',
    'nav.bio': 'Bio',
    'nav.contact': 'Contact',
    'nav.cart': 'Cart',
    
    // Home Page
    'home.welcome': 'Capturing Moments',
    'home.description': 'Fine Art Photography',
    'home.featuredImageAlt': 'Featured photograph',
    
    // Cafe Page
    'cafe.title': 'Boni Cafe & Studio',
    'cafe.description': 'Our studio cafe is a peaceful space where art meets coffee. Enjoy carefully crafted beverages while surrounded by selected prints from our collection.',
    'cafe.menu.drinks': 'Drinks',
    'cafe.menu.food': 'Food',
    'cafe.menu.currency': '$',
    'cafe.menu.items.espresso': 'Espresso',
    'cafe.menu.items.cappuccino': 'Cappuccino',
    'cafe.menu.items.latte': 'Latte',
    'cafe.menu.items.americano': 'Americano',
    'cafe.menu.items.hotChocolate': 'Hot Chocolate',
    'cafe.menu.items.croissant': 'Croissant',
    'cafe.menu.items.chocolateMuffin': 'Chocolate Muffin',
    'cafe.menu.items.avocadoToast': 'Avocado Toast',
    'cafe.menu.items.granolaBowl': 'Granola Bowl',
    
    // Store Page
    'store.title': 'Store',
    'store.description': 'Browse our collection',
    'store.addToCart': 'Add to Cart',
    'store.price': 'Price',
    'store.category': 'Category',
    'store.outOfStock': 'Out of Stock',
    'store.inStock': 'In Stock',
    'store.filters': 'Filters',
    'store.sortBy': 'Sort by',
    'store.newest': 'Newest',
    'store.priceHighToLow': 'Price: High to Low',
    'store.priceLowToHigh': 'Price: Low to High',
    
    // Bio Page
    'bio.title': 'About Us',
    'bio.subtitle': 'Our Story',
    'bio.description': 'Learn about our journey and vision',
    'bio.mission': 'Our Mission',
    'bio.vision': 'Our Vision',
    'bio.team': 'Our Team',
    
    // Contact Page
    'contact.title': 'Contact',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.visitUs': 'Visit Us',
    'contact.hours': 'Hours',
    'contact.mondayClosed': 'Monday: Closed',
    'contact.otherDays': 'Other Days: 11am - 10pm',
    
    // Cart
    'cart.title': 'Shopping Cart',
    'cart.empty': 'Your cart is empty',
    'cart.continue': 'Continue Shopping',
    'cart.checkout': 'Proceed to Checkout',
    'cart.total': 'Total',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Shipping',
    'cart.tax': 'Tax',
    'cart.remove': 'Remove',
    'cart.quantity': 'Quantity',
    'cart.update': 'Update Cart',
    
    // Payment
    'payment.title': 'Payment',
    'payment.billingInfo': 'Billing Information',
    'payment.cardNumber': 'Card Number',
    'payment.expiryDate': 'Expiry Date',
    'payment.cvv': 'CVV',
    'payment.nameOnCard': 'Name on Card',
    'payment.placeOrder': 'Place Order',
    'payment.orderSummary': 'Order Summary',
    
    // Product Detail
    'product.addToCart': 'Add to Cart',
    'product.description': 'Description',
    'product.details': 'Product Details',
    'product.size': 'Size',
    'product.quantity': 'Quantity',
    'product.inStock': 'In Stock',
    'product.outOfStock': 'Out of Stock',
    'product.relatedProducts': 'Related Products',
  },
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.cafe': 'Kafe',
    'nav.store': 'Mağaza',
    'nav.bio': 'Hakkımızda',
    'nav.contact': 'İletişim',
    'nav.cart': 'Sepet',
    
    // Home Page
    'home.welcome': 'Anları Yakalıyoruz',
    'home.description': 'Sanat Fotoğrafçılığı',
    'home.featuredImageAlt': 'Öne çıkan fotoğraf',
    
    // Cafe Page
    'cafe.title': 'Boni Kafe & Stüdyo',
    'cafe.description': 'Stüdyo kafemiz, sanatın kahveyle buluştuğu huzurlu bir mekandır. Koleksiyonumuzdan seçilmiş baskılarla çevrili ortamda özenle hazırlanmış içeceklerimizin tadını çıkarın.',
    'cafe.menu.drinks': 'İçecekler',
    'cafe.menu.food': 'Yiyecekler',
    'cafe.menu.currency': '₺',
    'cafe.menu.items.espresso': 'Espresso',
    'cafe.menu.items.cappuccino': 'Cappuccino',
    'cafe.menu.items.latte': 'Latte',
    'cafe.menu.items.americano': 'Americano',
    'cafe.menu.items.hotChocolate': 'Sıcak Çikolata',
    'cafe.menu.items.croissant': 'Kruvasan',
    'cafe.menu.items.chocolateMuffin': 'Çikolatalı Muffin',
    'cafe.menu.items.avocadoToast': 'Avokadolu Tost',
    'cafe.menu.items.granolaBowl': 'Granola Kasesi',
    
    // Store Page
    'store.title': 'Mağaza',
    'store.description': 'Koleksiyonumuza göz atın',
    'store.addToCart': 'Sepete Ekle',
    'store.price': 'Fiyat',
    'store.category': 'Kategori',
    'store.outOfStock': 'Stokta Yok',
    'store.inStock': 'Stokta Var',
    'store.filters': 'Filtreler',
    'store.sortBy': 'Sırala',
    'store.newest': 'En Yeni',
    'store.priceHighToLow': 'Fiyat: Yüksekten Düşüğe',
    'store.priceLowToHigh': 'Fiyat: Düşükten Yükseğe',
    
    // Bio Page
    'bio.title': 'Hakkımızda',
    'bio.subtitle': 'Hikayemiz',
    'bio.description': 'Yolculuğumuz ve vizyonumuz hakkında bilgi edinin',
    'bio.mission': 'Misyonumuz',
    'bio.vision': 'Vizyonumuz',
    'bio.team': 'Ekibimiz',
    
    // Contact Page
    'contact.title': 'İletişim',
    'contact.name': 'İsim',
    'contact.email': 'E-posta',
    'contact.message': 'Mesaj',
    'contact.send': 'Mesaj Gönder',
    'contact.visitUs': 'Bizi Ziyaret Edin',
    'contact.hours': 'Çalışma Saatleri',
    'contact.mondayClosed': 'Pazartesi: Kapalı',
    'contact.otherDays': 'Diğer Günler: 11:00 - 22:00',
    
    // Cart
    'cart.title': 'Alışveriş Sepeti',
    'cart.empty': 'Sepetiniz boş',
    'cart.continue': 'Alışverişe Devam Et',
    'cart.checkout': 'Ödemeye Geç',
    'cart.total': 'Toplam',
    'cart.subtotal': 'Ara Toplam',
    'cart.shipping': 'Kargo',
    'cart.tax': 'KDV',
    'cart.remove': 'Kaldır',
    'cart.quantity': 'Adet',
    'cart.update': 'Sepeti Güncelle',
    
    // Payment
    'payment.title': 'Ödeme',
    'payment.billingInfo': 'Fatura Bilgileri',
    'payment.cardNumber': 'Kart Numarası',
    'payment.expiryDate': 'Son Kullanma Tarihi',
    'payment.cvv': 'CVV',
    'payment.nameOnCard': 'Kart Üzerindeki İsim',
    'payment.placeOrder': 'Siparişi Tamamla',
    'payment.orderSummary': 'Sipariş Özeti',
    
    // Product Detail
    'product.addToCart': 'Sepete Ekle',
    'product.description': 'Açıklama',
    'product.details': 'Ürün Detayları',
    'product.size': 'Boyut',
    'product.quantity': 'Adet',
    'product.inStock': 'Stokta Var',
    'product.outOfStock': 'Stokta Yok',
    'product.relatedProducts': 'Benzer Ürünler',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('language') as Language) || 'en';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 