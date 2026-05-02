# MarketApp

A clean, full-stack product marketplace built with Next.js App Router. Users can sign up, list their own products, and browse what others are selling — all in a fast, responsive interface.

## Features

- 🛍️ **Browse Products** — Search and view all listings on the marketplace
- ➕ **List Products** — Add a product with a title, description, price, and image URL
- ✏️ **Edit Listings** — Update your product details at any time
- 🗑️ **Delete Listings** — Remove products you no longer want to list
- 🔒 **Protected Routes** — Add/edit/manage pages require authentication
- 👤 **Auth via Clerk** — Secure sign-in and sign-up with Clerk
- 📱 **Responsive** — Works on both mobile and desktop

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Database | PostgreSQL via [Neon](https://neon.tech) |
| ORM | [Prisma](https://prisma.io) |
| Auth | [Clerk](https://clerk.com) |
| UI Components | [shadcn/ui](https://ui.shadcn.com) |
| Styling | Tailwind CSS v4 |
| Forms | React Hook Form + Zod |
| Notifications | Sonner |

## Getting Started

### 1. Clone the repo and install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file at the root with the following:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
DATABASE_URL=your_neon_postgres_connection_string
```

### 3. Run database migrations

```bash
npx prisma migrate dev
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── (protected)/
│   ├── add-product/        # Add a new product listing
│   ├── edit-product/[id]/  # Edit an existing product
│   └── manage-products/    # View and manage your listings
├── api/
│   └── products/           # REST API routes (GET, POST, PATCH, DELETE)
├── products/               # Browse all products
├── products/[id]/          # Individual product detail page
├── about/                  # About page
├── privacy/                # Privacy policy
├── terms/                  # Terms of service
└── page.tsx                # Landing page
components/
├── layout/
│   ├── Navbar.tsx
│   └── Footer.tsx
└── ui/                     # shadcn/ui components
prisma/
└── schema.prisma           # Database schema (User, Product)
proxy.ts                    # Clerk middleware (route protection)
```

## Database Schema

```prisma
model User {
  id          String    @id @default(cuid())
  clerkUserId String    @unique
  name        String?
  email       String    @unique
  imageUrl    String?
  products    Product[]
}

model Product {
  id               String  @id @default(cuid())
  title            String
  shortDescription String
  description      String
  price            Float
  imageUrl         String?
  createdById      String
  createdBy        User    @relation(...)
}
```

## Deployment

Deploy to [Vercel](https://vercel.com) in one click. Make sure to add your environment variables in the Vercel project settings.
