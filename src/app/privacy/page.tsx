import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

// TODO: have counsel review this placeholder policy before launch.
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="September 30, 2026">
      <p>
        {site.name} (&ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your privacy. This policy explains what information
        we collect through this website and how we use it.
      </p>
      <h2>Information we collect</h2>
      <p>
        When you submit our contact form, we collect the details you provide, such as your name, email address, phone
        number, company, and message. We may also collect standard technical data such as browser type and pages
        visited.
      </p>
      <h2>How we use information</h2>
      <p>
        We use your information to respond to your inquiry, provide our services, and improve this website. We do not
        sell your personal information.
      </p>
      <h2>Sharing</h2>
      <p>
        We share information only with service providers who help us operate this website and our business (such as
        hosting and email providers), or when required by law.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy? Email us at <a href={`mailto:${site.email}`} className="text-brand-600 underline">{site.email}</a>.
      </p>
    </LegalPage>
  );
}
