import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { PageHeader, Section } from "@/components/site/shared";
import {
  AddOns,
  BezydePromise,
  Faq,
  FinalCta,
  Footer,
  PlansGrid,
  WhatsAppFab,
} from "@/components/site/sections";
import { DISCLAIMER } from "@/components/site/data";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Companionship Plans & Pricing | Bezyde" },
      {
        name: "description",
        content:
          "Monthly companionship plans from ₹6,999 — Nearby, Together, Wholehearted and All In — plus optional add-ons like hospital escorts.",
      },
      { property: "og:title", content: "Companionship Plans & Pricing | Bezyde" },
      {
        property: "og:description",
        content:
          "Transparent monthly companionship plans for seniors in Pathanamthitta, plus optional add-on visits and escorts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://bezyde-by-your-side.lovable.app/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav active="/pricing" />
      <main>
        <PageHeader
          eyebrow="Simple pricing"
          title="Plans that grow with your family."
          intro="Subscription based. No online payment. Talk to us and we'll help you pick what fits."
        />
        <Section className="pt-8 md:pt-10">
          <PlansGrid />
          <AddOns />
          <div className="mt-14">
            <BezydePromise />
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            {DISCLAIMER}
          </p>
        </Section>
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
