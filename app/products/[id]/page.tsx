import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ShoppingCart, User as UserIcon } from "lucide-react";
import Link from "next/link";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: { id },
    include: { createdBy: true },
  });

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 w-full">
      <Button variant="ghost" asChild className="mb-6 -ml-4">
        <Link href="/products">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted border relative">
            {product.imageUrl ? (
              <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-muted-foreground">
                No image available
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">{product.title}</h1>
            <p className="text-2xl font-semibold text-primary">${product.price.toFixed(2)}</p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {product.shortDescription}
          </p>

          <div className="h-px bg-border w-full" />

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Description</h3>
            <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
              {product.description.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>

          <div className="h-px bg-border w-full" />

          <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <UserIcon className="h-4 w-4" />
              <span>Created by {product.createdBy.name || 'Unknown'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(product.createdAt))}</span>
            </div>
          </div>

          <Button size="lg" className="w-full sm:w-auto mt-4 gap-2 text-lg h-14">
            <ShoppingCart className="h-5 w-5" /> Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}
