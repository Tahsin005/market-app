"use client";

import Link from "next/link";
import { useUser, useClerk } from "@clerk/nextjs";
import { Show, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, Package2 } from "lucide-react";

export function Navbar() {
  const { user } = useUser();
  const { signOut } = useClerk();

  const routes = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Add Product", path: "/add-product", protected: true },
    { name: "Manage Products", path: "/manage-products", protected: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Package2 className="h-6 w-6" />
            <span className="inline-block font-bold">MarketApp</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {routes.map((route) => (
              (!route.protected || user) && (
                <Link
                  key={route.path}
                  href={route.path}
                  className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {route.name}
                </Link>
              )
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Show when="signed-out">
            <div className="hidden md:flex gap-4">
              <SignInButton mode="modal">
                <Button variant="ghost">Login</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button>Register</Button>
              </SignUpButton>
            </div>
          </Show>
          
          <Show when="signed-in">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full overflow-hidden p-0">
                  {user?.imageUrl ? (
                    <img src={user.imageUrl} alt="Avatar" className="rounded-full object-cover w-full h-full" />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-muted" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user?.fullName}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user?.primaryEmailAddress?.emailAddress}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/add-product">Add Product</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/manage-products">Manage Products</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut({ redirectUrl: '/' })}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Show>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6">
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  (!route.protected || user) && (
                    <Link
                      key={route.path}
                      href={route.path}
                      className="text-lg font-medium"
                    >
                      {route.name}
                    </Link>
                  )
                ))}
                <Show when="signed-out">
                  <div className="flex flex-col gap-2 mt-4">
                    <SignInButton mode="modal">
                      <Button variant="outline" className="w-full justify-start">Login</Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button className="w-full justify-start">Register</Button>
                    </SignUpButton>
                  </div>
                </Show>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
