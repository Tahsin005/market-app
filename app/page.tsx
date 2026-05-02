
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRight, ShoppingBag, ShieldCheck, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ProductCard";

export const revalidate = 60;

export default async function Home() {
  const user = await currentUser();
  const featuredProducts = await prisma.product.findMany({
    take: 3,
    orderBy: { createdAt: "desc" },
    include: { createdBy: true },
  });

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-20 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center gap-8">
          <Badge variant="secondary" className="px-4 py-1 text-sm font-medium">
            Welcome to MarketApp
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            List, Browse, and <br className="hidden sm:block" />
            <span className="text-primary">Discover Products</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
            A simple marketplace to list your products and discover what others are selling. Sign up to start listing your own products in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <Button size="lg" asChild className="gap-2">
              <Link href="/products">
                Browse Products <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={user ? "/add-product" : "/sign-in"}>
                {user ? "List a Product" : "Start Listing"}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-10">
          <div className="flex flex-col items-center text-center gap-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Recently Listed</h2>
            <p className="text-muted-foreground text-lg">The latest products added to the marketplace</p>
          </div>
          
          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted/30 rounded-xl border border-dashed">
              <p className="text-muted-foreground">No products listed yet. Be the first!</p>
            </div>
          )}

          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/products">View All Products <ArrowRight className="h-4 w-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 lg:py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">Everything you need to list and discover products in one place.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background">
              <CardHeader>
                <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Secure Sign In</CardTitle>
                <CardDescription>Sign in with your existing account via Clerk. Your identity and listings are always protected.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <ShoppingBag className="h-10 w-10 text-primary mb-4" />
                <CardTitle>List Your Product</CardTitle>
                <CardDescription>Add a title, description, price, and image URL. Your product goes live on the marketplace instantly.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Manage Anytime</CardTitle>
                <CardDescription>Edit or remove your listings at any time from your personal Manage Products dashboard.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="w-full py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to list your first product?</h2>
            <p className="text-primary-foreground/80 text-lg">Sign up for free and start adding your products to the marketplace today.</p>
          </div>
          <Button size="lg" variant="secondary" asChild className="shrink-0 text-lg px-8 py-6">
            <Link href={user ? "/add-product" : "/sign-up"}>
              {user ? "Add a Product" : "Create Free Account"}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
