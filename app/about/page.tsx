import { Package2, Users, ShoppingBag, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "About – MarketApp",
  description: "Learn about MarketApp, a simple marketplace to list and discover products.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="w-full py-20 lg:py-28 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center gap-6">
          <Badge variant="secondary" className="px-4 py-1 text-sm font-medium">
            About Us
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            What is <span className="text-primary">MarketApp</span>?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            MarketApp is a straightforward product marketplace where anyone can sign up, list their products, and browse what others are selling — no hassle, no unnecessary steps.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="w-full py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-8">
          <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We believe listing and discovering products should be simple. MarketApp gives individuals and small creators a clean, focused space to showcase their products to a real audience — without the complexity of large e-commerce platforms.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you want to sell a physical item, a digital download, or a service, MarketApp gives you the tools to get listed in minutes. And if you&apos;re a buyer, you get a distraction-free browsing experience to find exactly what you&apos;re looking for.
          </p>
        </div>
      </section>

      {/* Features at a Glance */}
      <section className="w-full py-16 lg:py-20 bg-muted/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
          <h2 className="text-3xl font-bold tracking-tight">What You Can Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <Package2 className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-lg">List Products</h3>
              <p className="text-muted-foreground text-sm">
                Add a title, description, price, and image to get your product listed on the marketplace instantly.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <ShoppingBag className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-lg">Browse Listings</h3>
              <p className="text-muted-foreground text-sm">
                Search and browse all products listed by other users on the platform.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Zap className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-lg">Manage Anytime</h3>
              <p className="text-muted-foreground text-sm">
                Edit or remove your listings at any time from your personal dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built With */}
      <section className="w-full py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
          <h2 className="text-3xl font-bold tracking-tight">Built With</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            MarketApp is built using modern web technologies: <strong>Next.js</strong> for the frontend and server logic, <strong>Prisma</strong> with a <strong>PostgreSQL</strong> database (via Neon) for data storage, and <strong>Clerk</strong> for secure authentication. The UI is powered by <strong>shadcn/ui</strong> components and styled with <strong>Tailwind CSS</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
