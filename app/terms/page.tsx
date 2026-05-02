import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Terms of Service – MarketApp",
  description: "Read MarketApp's terms of service before using the platform.",
};

export default function TermsPage() {
  const lastUpdated = "May 2, 2026";

  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Badge variant="secondary" className="w-fit px-4 py-1 text-sm font-medium">
            Legal
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight">Terms of Service</h1>
          <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
        </div>

        <div className="flex flex-col gap-8 text-muted-foreground leading-relaxed">
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing or using MarketApp, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the platform.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-foreground">2. Use of the Platform</h2>
            <p>MarketApp is a product listing platform. You may use it to:</p>
            <ul className="list-disc list-inside flex flex-col gap-1 ml-2">
              <li>Create an account and list your own products.</li>
              <li>Browse and view products listed by other users.</li>
              <li>Edit or delete your own listings at any time.</li>
            </ul>
            <p>
              You may not use MarketApp for any unlawful purpose, to post false or misleading information, or to list products that infringe on intellectual property rights.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-foreground">3. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials. MarketApp uses Clerk for authentication. You agree to provide accurate information when creating your account and to keep it up to date.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-foreground">4. Product Listings</h2>
            <p>
              You are solely responsible for the accuracy and legality of any product you list. MarketApp does not verify listings and is not responsible for transactions between users. The platform currently does not facilitate payments — any purchasing arrangements are made entirely between users.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-foreground">5. Intellectual Property</h2>
            <p>
              You retain ownership of any content you submit to MarketApp. By submitting content, you grant MarketApp a non-exclusive, royalty-free license to display that content on the platform.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-foreground">6. Termination</h2>
            <p>
              We reserve the right to suspend or terminate accounts that violate these Terms of Service, without prior notice.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-foreground">7. Disclaimer of Warranties</h2>
            <p>
              MarketApp is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the platform will be error-free, uninterrupted, or that listings are accurate or lawful.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-foreground">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, MarketApp shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-foreground">9. Changes to These Terms</h2>
            <p>
              We may update these Terms of Service at any time. Continued use of the platform after changes are posted means you accept the revised terms.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-foreground">10. Contact</h2>
            <p>
              If you have any questions about these Terms, please refer to the About page for contact information.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
