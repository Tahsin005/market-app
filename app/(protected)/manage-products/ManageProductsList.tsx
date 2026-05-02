"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DeleteConfirmDialog } from "@/components/DeleteConfirmDialog";
import { Eye, Trash2, Pencil } from "lucide-react";

interface ManageProductsListProps {
  initialProducts: Product[];
}

export function ManageProductsList({ initialProducts }: ManageProductsListProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const handleDeleteSuccess = () => {
    if (deleteId) {
      setProducts((prev) => prev.filter((p) => p.id !== deleteId));
    }
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-20 bg-muted/30 rounded-xl border border-dashed">
        <p className="text-muted-foreground text-lg mb-4">You haven't listed any products yet.</p>
        <Button asChild>
          <Link href="/add-product">Add Your First Product</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Listed On</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.title}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>{new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(product.createdAt))}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/products/${product.id}`}>
                      <Eye className="h-4 w-4 mr-2" /> View
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/edit-product/${product.id}`}>
                      <Pencil className="h-4 w-4 mr-2" /> Edit
                    </Link>
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => setDeleteId(product.id)}>
                    <Trash2 className="h-4 w-4 mr-2" /> Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden grid grid-cols-1 gap-4">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg line-clamp-1">{product.title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span className="font-medium text-foreground">${product.price.toFixed(2)}</span>
                <span>{new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(product.createdAt))}</span>
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button variant="outline" className="w-full" asChild>
                <Link href={`/products/${product.id}`}>View</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href={`/edit-product/${product.id}`}>Edit</Link>
              </Button>
              <Button variant="destructive" className="w-full" onClick={() => setDeleteId(product.id)}>
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <DeleteConfirmDialog
        productId={deleteId!}
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onSuccess={handleDeleteSuccess}
      />
    </>
  );
}
