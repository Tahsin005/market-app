import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ManageProductsList } from "./ManageProductsList";

export const dynamic = "force-dynamic";

export default async function ManageProductsPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const products = await prisma.product.findMany({
    where: {
      createdBy: {
        clerkUserId: userId,
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 w-full flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Manage Products</h1>
        <p className="text-muted-foreground mt-1">View and manage your product listings.</p>
      </div>

      <ManageProductsList initialProducts={products} />
    </div>
  );
}
