import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { PageHeader } from "@/components/site/shared";
import { Contact, Footer, WhatsAppFab } from "@/components/site/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Talk to Bezyde | Elder Companionship in Pathanamthitta" },
      {
        name: "description",
        content:
          "Tell us about your loved one and we'll reply within a few hours. Call +91 8136979757 or email hello@bezyde.com.",
      },
      { property: "og:title", content: "Talk to Bezyde | Elder Companionship in Pathanamthitta" },
      {
        property: "og:description",
        content:
          "Share a few details about your loved one and our team will get in touch within a few hours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://bezyde-by-your-side.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav active="/contact" />
      <main>
        <PageHeader
          eyebrow="Get in touch"
          title="Let's find the right companion for your family."
        />
        <Contact heading={false} />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
