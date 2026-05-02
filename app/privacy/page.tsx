import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Privacy Policy – MarketApp",
  description: "Read MarketApp's privacy policy to understand how we handle your data.",
};

export default function PrivacyPage() {
  const lastUpdated = "May 2, 2026";

  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Badge variant="secondary" className="w-fit px-4 py-1 text-sm font-medium">
            Legal
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none flex flex-col gap-8 text-muted-foreground leading-relaxed">
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-foreground">1. Information We Collect</h2>
            <p>
              When you create an account, we collect your name, email address, and profile picture via our authentication provider, Clerk. When you list a product, we store the product details you provide, including title, description, price, and any image URL you supply.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc list-inside flex flex-col gap-1 ml-2">
              <li>Display your name alongside product listings you create.</li>
              <li>Allow you to manage (edit or delete) your own listings.</li>
              <li>Authenticate your identity securely via Clerk.</li>
            </ul>
            <p>We do not sell your personal data to third parties.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-foreground">3. Data Storage</h2>
            <p>
              Your account data is managed by Clerk. Product data is stored in a PostgreSQL database hosted on Neon. We take reasonable measures to keep your data secure.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-foreground">4. Cookies</h2>
            <p>
              MarketApp uses cookies set by Clerk for session management and authentication. No advertising or tracking cookies are used.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-foreground">5. Your Rights</h2>
            <p>
              You can delete your product listings at any time from the Manage Products page. To request deletion of your account and associated data, please contact us directly.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-foreground">6. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Continued use of MarketApp after changes are posted constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-foreground">7. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please reach out via the contact details provided on the About page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
