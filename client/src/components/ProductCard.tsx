import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  inStock: boolean;
  onAddToCart?: (id: string) => void;
  onViewDetails?: (id: string) => void;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  category,
  image,
  inStock,
  onAddToCart,
  onViewDetails
}: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full hover-elevate transition-all" data-testid={`card-product-${id}`}>
      <CardHeader className="p-0">
        <div className="aspect-[4/3] bg-muted rounded-t-lg overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover"
              data-testid="img-product"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              No Image
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 p-4 space-y-2">
        <Badge variant="secondary" className="text-xs" data-testid="badge-category">
          {category}
        </Badge>
        <h3 className="font-semibold line-clamp-2" data-testid="text-product-name">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2" data-testid="text-product-description">
          {description}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex flex-col gap-3">
        <div className="flex items-center justify-between w-full">
          <span className="text-2xl font-bold" data-testid="text-product-price">
            ${price.toLocaleString()}
          </span>
          {inStock ? (
            <Badge variant="outline" className="text-xs bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800" data-testid="badge-stock-status">
              In Stock
            </Badge>
          ) : (
            <Badge variant="outline" className="text-xs" data-testid="badge-stock-status">
              Out of Stock
            </Badge>
          )}
        </div>
        
        <div className="flex gap-2 w-full">
          <Button 
            size="sm" 
            className="flex-1"
            onClick={() => onAddToCart?.(id)}
            disabled={!inStock}
            data-testid="button-add-to-cart"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            onClick={() => onViewDetails?.(id)}
            data-testid="button-view-details"
          >
            Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
