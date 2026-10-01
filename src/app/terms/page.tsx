import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Use" };

// TODO: have counsel review these placeholder terms before launch.
export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="September 30, 2026">
      <p>By using this website, you agree to these terms.</p>
      <h2>Informational purposes only</h2>
      <p>
        Content on this website is provided for general information and does not constitute legal advice. Licensing
        requirements change frequently and vary by state. Contact us or the appropriate regulator for guidance on your
        specific situation.
      </p>
      <h2>No client relationship</h2>
      <p>
        Submitting a form or contacting us does not create a client relationship. Services are provided only under a
        signed engagement agreement.
      </p>
      <h2>Intellectual property</h2>
      <p>
        The {site.name} name, logo, and website content are owned by {site.name} and may not be used without
        permission.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms? Email <a href={`mailto:${site.email}`} className="text-brand-600 underline">{site.email}</a>.
      </p>
    </LegalPage>
  );
}
