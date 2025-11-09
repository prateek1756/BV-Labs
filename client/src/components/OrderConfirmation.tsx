import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface OrderConfirmationProps {
  orderNumber: string;
  customerEmail: string;
  total: number;
  onContinueShopping?: () => void;
}

export default function OrderConfirmation({
  orderNumber,
  customerEmail,
  total,
  onContinueShopping
}: OrderConfirmationProps) {
  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="text-center">
        <CardContent className="pt-12 pb-12 space-y-6">
          <div className="flex justify-center">
            <div className="p-4 bg-green-100 dark:bg-green-950 rounded-full">
              <CheckCircle2 className="h-16 w-16 text-green-600 dark:text-green-400" />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold" data-testid="text-confirmation-heading">
              Order Confirmed!
            </h1>
            <p className="text-muted-foreground">
              Thank you for your purchase
            </p>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Order Number</span>
              <span className="font-mono font-semibold" data-testid="text-order-number">
                {orderNumber}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total Amount</span>
              <span className="text-xl font-bold" data-testid="text-order-amount">
                ₹{total.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              A confirmation email has been sent to{" "}
              <span className="font-medium text-foreground" data-testid="text-customer-email">
                {customerEmail}
              </span>
            </p>
            <p>
              Our team will contact you shortly to discuss delivery and implementation.
            </p>
          </div>

          <div className="pt-6 space-y-3">
            <Button 
              size="lg" 
              className="w-full"
              onClick={onContinueShopping}
              data-testid="button-continue-shopping"
            >
              Continue Shopping
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
