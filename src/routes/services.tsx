import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { PageHeader, Section } from "@/components/site/shared";
import {
  Disclaimer,
  FinalCta,
  Footer,
  HowItWorks,
  ServicesGrid,
  TrustBar,
  WhatsAppFab,
  Why,
} from "@/components/site/sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Companionship Services for Seniors | Bezyde" },
      {
        name: "description",
        content:
          "Conversations, walks, errands, appointment company, tech help and more — see the 12 ways Bezyde companions support seniors in Pathanamthitta.",
      },
      { property: "og:title", content: "Companionship Services for Seniors | Bezyde" },
      {
        property: "og:description",
        content:
          "See the 12 ways Bezyde companions support seniors in Pathanamthitta — from tea-time chats to hospital company.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://bezyde-by-your-side.lovable.app/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav active="/services" />
      <main>
        <PageHeader
          eyebrow="What we do"
          title="Small acts of company. Big moments of joy."
          intro="Every visit is built around your loved one — their routine, their interests, and the little things that make their day brighter."
        />
        <Section className="pt-8 md:pt-10">
          <ServicesGrid />
        </Section>
        <Disclaimer />
        <TrustBar />
        <HowItWorks />
        <Why />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
