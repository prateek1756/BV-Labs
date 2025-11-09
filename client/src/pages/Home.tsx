import { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import ValuePropositions from "@/components/ValuePropositions";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import AuthDialog from "@/components/AuthDialog";
import { useAuth } from "@/hooks/useAuth";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

export default function Home() {
  const [, setLocation] = useLocation();
  const { isAuthenticated } = useAuth();
  const [cartOpen, setCartOpen] = useState(false);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (productId: string) => {
    if (!isAuthenticated) {
      setAuthDialogOpen(true);
      return;
    }

    const products = {
      "1": { id: "1", name: "Smart Interactive Whiteboard", price: 2499, category: "Classroom Devices" },
      "2": { id: "2", name: "Campus Management ERP", price: 4999, category: "Admin & Management" },
      "3": { id: "3", name: "VR Learning Kit", price: 1299, category: "Learning Labs" },
      "4": { id: "4", name: "Student Information System", price: 3499, category: "Student Support" },
    };

    const product = products[productId as keyof typeof products];
    if (!product) return;

    const existingItem = cartItems.find(item => item.id === productId);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    
    setCartOpen(true);
    console.log('Added to cart:', productId);
  };

  const handleViewDetails = (id: string) => {
    setLocation(`/product/${id}`);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout');
    setLocation('/checkout');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setCartOpen(true)}
        onSearchChange={(value) => console.log('Search:', value)}
      />
      
      <main className="flex-1">
        <Hero 
          onBrowseSoftware={() => setLocation('/software')}
          onBrowseHardware={() => setLocation('/hardware')}
        />
        <CategorySection 
          onCategoryClick={(category) => console.log('Category clicked:', category)}
        />
        <FeaturedProducts 
          onAddToCart={handleAddToCart}
          onViewDetails={handleViewDetails}
        />
        <ValuePropositions />
      </main>

      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      <AuthDialog
        isOpen={authDialogOpen}
        onClose={() => setAuthDialogOpen(false)}
      />
    </div>
  );
}
