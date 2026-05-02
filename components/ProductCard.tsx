import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    price: number;
    shortDescription: string;
    imageUrl: string | null;
    createdBy?: {
      name: string | null;
    };
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden group flex flex-col transition-all hover:shadow-lg">
      <div className="aspect-[4/3] bg-muted relative overflow-hidden">
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.title} className="object-cover w-full h-full transition-transform group-hover:scale-105" />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-muted-foreground">
            <ShoppingBag className="h-12 w-12 opacity-20" />
          </div>
        )}
      </div>
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="line-clamp-1">{product.title}</CardTitle>
          <span className="font-bold whitespace-nowrap">${product.price.toFixed(2)}</span>
        </div>
        <CardDescription className="line-clamp-2">{product.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto pt-0 flex justify-between items-center">
        {product.createdBy && (
          <p className="text-xs text-muted-foreground">By {product.createdBy.name || 'Unknown'}</p>
        )}
        <Button variant="secondary" size="sm" asChild className={!product.createdBy ? "w-full" : ""}>
          <Link href={`/products/${product.id}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
