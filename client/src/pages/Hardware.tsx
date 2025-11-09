import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import AuthDialog from "@/components/AuthDialog";
import HardwareCategories from "@/components/HardwareCategories";
import ProductCard from "@/components/ProductCard";
import { useAuth } from "@/hooks/useAuth";
import { useLocation } from "wouter";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

const hardwareProducts = [
  {
    id: "h1",
    name: "Smart Interactive Whiteboard",
    description: "4K resolution touch screen with wireless connectivity and collaboration tools",
    price: 2499,
    category: "Classroom Devices",
    inStock: true,
  },
  {
    id: "h2",
    name: "VR Learning Kit",
    description: "Immersive virtual reality headsets and controllers for interactive learning",
    price: 1299,
    category: "Learning Labs",
    inStock: true,
  },
  {
    id: "h3",
    name: "Enterprise Server Rack",
    description: "High-performance server infrastructure for campus-wide applications",
    price: 8999,
    category: "IT Infrastructure",
    inStock: true,
  },
  {
    id: "h4",
    name: "RFID Access Control System",
    description: "Complete biometric and card-based access control for campus security",
    price: 3499,
    category: "Security Systems",
    inStock: true,
  },
  {
    id: "h5",
    name: "3D Printer Pro",
    description: "Professional-grade 3D printer for STEM education and prototyping",
    price: 1899,
    category: "Learning Labs",
    inStock: true,
  },
  {
    id: "h6",
    name: "Solar Power System",
    description: "Complete solar panel installation with battery backup for campus buildings",
    price: 12999,
    category: "Power & Backup",
    inStock: true,
  },
  {
    id: "h7",
    name: "Smart Projector 4K",
    description: "Ultra HD wireless projector with interactive features",
    price: 1599,
    category: "Classroom Devices",
    inStock: true,
  },
  {
    id: "h8",
    name: "CCTV Security Package",
    description: "16-camera HD surveillance system with network video recorder",
    price: 2899,
    category: "Security Systems",
    inStock: true,
  },
];

export default function Hardware() {
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

    const product = hardwareProducts.find(p => p.id === productId);
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
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-heading">
              Hardware Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium hardware equipment for modern educational environments
            </p>
          </div>
        </div>

        <HardwareCategories 
          onCategoryClick={(category) => console.log('Category clicked:', category)}
        />

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Hardware Products</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Top-quality hardware trusted by leading educational institutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hardwareProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onAddToCart={handleAddToCart}
                  onViewDetails={(id) => setLocation(`/product/${id}`)}
                />
              ))}
            </div>
          </div>
        </section>
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
