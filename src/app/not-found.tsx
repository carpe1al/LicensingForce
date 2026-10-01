import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="py-32 text-center">
      <Container>
        <p className="font-display text-6xl font-bold text-gradient">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold text-navy-900">Page not found</h1>
        <p className="mt-3 text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-8">
          <ButtonLink href="/">Back to Home</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
