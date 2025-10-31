import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckoutForm, { CheckoutData } from "@/components/CheckoutForm";
import OrderConfirmation from "@/components/OrderConfirmation";

export default function Checkout() {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderData, setOrderData] = useState<{ orderNumber: string; email: string; total: number } | null>(null);

  const handleSubmit = (data: CheckoutData) => {
    const orderNumber = `ORD-2025-${Math.floor(Math.random() * 999999).toString().padStart(6, '0')}`;
    const total = 10997;
    
    console.log('Order submitted:', { ...data, orderNumber, total });
    
    setOrderData({
      orderNumber,
      email: data.customerEmail,
      total
    });
    setOrderPlaced(true);
  };

  const handleContinueShopping = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartCount={0} />
      
      <main className="flex-1 py-8">
        {orderPlaced && orderData ? (
          <OrderConfirmation
            orderNumber={orderData.orderNumber}
            customerEmail={orderData.email}
            total={orderData.total}
            onContinueShopping={handleContinueShopping}
          />
        ) : (
          <CheckoutForm
            total={9997}
            onSubmit={handleSubmit}
            onCancel={() => window.location.href = '/'}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
