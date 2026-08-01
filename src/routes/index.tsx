import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, HeartHandshake, ShieldCheck, Star } from "lucide-react";

import heroImg from "@/assets/hero-companion.jpg";
import walkImg from "@/assets/walk-together.jpg";
import portraitImg from "@/assets/portrait-senior.jpg";
import readingImg from "@/assets/reading-together.jpg";
import { SiteNav } from "@/components/SiteNav";
import { Section, Eyebrow, fadeUp } from "@/components/site/shared";
import { problems } from "@/components/site/data";
import {
  BezydePromise,
  Contact,
  Faq,
  FinalCta,
  Footer,
  HowItWorks,
  PlansGrid,
  ServicesGrid,
  TrustBar,
  Why,
  WhatsAppFab,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bezyde — Trusted Elder Companionship in Pathanamthitta" },
      {
        name: "description",
        content:
          "Bezyde brings verified, caring companions to elderly people in Pathanamthitta, Kerala. Warm visits, walks, errands and real conversation.",
      },
      { property: "og:title", content: "Bezyde — Trusted Elder Companionship in Pathanamthitta" },
      {
        property: "og:description",
        content:
          "Verified, compassionate companions for seniors in Pathanamthitta. Because everyone deserves someone by their side.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:image",
        content: "https://bezyde-by-your-side.lovable.app/og-image.jpg",
      },
      {
        name: "twitter:image",
        content: "https://bezyde-by-your-side.lovable.app/og-image.jpg",
      },
      { property: "og:url", content: "https://bezyde-by-your-side.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://bezyde-by-your-side.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Bezyde",
          description:
            "Companionship service for elderly people in Pathanamthitta, Kerala.",
          areaServed: "Pathanamthitta, Kerala, India",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pathanamthitta",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
          telephone: "+91 8136979757",
        }),
      },
    ],
  }),
  component: Landing,
});

/* ---------- Hero ---------- */

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 60]);

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 grain-bg opacity-70" aria-hidden />
      <div className="container-wide relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow>Companionship, delivered with care</Eyebrow>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Because everyone deserves someone by their side.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              Bezyde is a compassionate companionship service dedicated to improving the
              lives of elderly people through trusted, caring companions who offer
              meaningful human connection.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
              >
                Find a Companion
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-base font-semibold text-foreground transition hover:bg-secondary"
              >
                Learn More
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[portraitImg, readingImg, walkImg].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="h-10 w-10 rounded-full border-2 border-background object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs">Loved by families across Pathanamthitta</p>
              </div>
            </div>
          </motion.div>

          <motion.div style={{ y }} className="relative">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-accent/30 blur-2xl" aria-hidden />
              <img
                src={heroImg}
                alt="A companion laughing with an elderly woman at home"
                width={1600}
                height={1200}
                className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-card"
                fetchPriority="high"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -left-4 bottom-8 hidden max-w-[240px] rounded-2xl border border-border bg-card p-4 shadow-card md:block"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft text-primary">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">2,400+ visits</p>
                  <p className="text-xs text-muted-foreground">of shared moments</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -right-2 top-8 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-card md:block"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Background verified
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Problem ---------- */

function Problem() {
  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <motion.div {...fadeUp} className="relative order-2 hidden md:block lg:order-1">
          <img
            src={portraitImg}
            alt="Elderly woman sitting quietly by a window"
            width={1008}
            height={1200}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-card"
          />
          <div className="absolute -bottom-6 -right-4 hidden max-w-[260px] rounded-2xl bg-primary p-5 text-primary-foreground shadow-soft md:block">
            <p className="text-sm leading-relaxed">
              “The best gift you can give an elder is your time — and a friend who shows up.”
            </p>
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="order-1 lg:order-2">
          <Eyebrow>The quiet challenge</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-5xl">
            Growing older shouldn't mean growing lonely.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Loneliness is one of the most overlooked struggles in later life. Even
            surrounded by a loving family, many seniors quietly go days without a
            real conversation. We're here to change that — one warm visit at a time.
          </p>
          <ul className="mt-8 space-y-3">
            {problems.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-2xl border border-border bg-card px-4 py-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}

/* ---------- Services preview ---------- */

function ServicesPreview() {
  return (
    <Section id="services" className="bg-secondary/50">
      <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
        <Eyebrow>What we do</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-5xl">
          Small acts of company. Big moments of joy.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          From heartfelt conversations to daily walks, our companions bring
          warmth to the moments that matter.
        </p>
      </motion.div>

      <ServicesGrid limit={6} />

      <div className="mt-10 text-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
        >
          View all 12 services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}

/* ---------- Pricing preview ---------- */

function PricingPreview() {
  return (
    <Section id="pricing" className="bg-secondary/30">
      <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
        <Eyebrow>Simple pricing</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-5xl">
          Plans that grow with your family.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Subscription based. No online payment. We'll help you pick what fits.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className={`rounded-3xl border p-5 ${
              p.popular ? "border-primary bg-primary text-primary-foreground shadow-soft" : "border-border bg-card"
            }`}
          >
            {p.popular && (
              <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">
                <Star className="h-3 w-3 fill-current" /> Most Popular
              </span>
            )}
            <h3 className="font-display text-lg font-semibold">{p.name}</h3>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="font-display text-2xl font-semibold">{p.price}</span>
              {p.priceSuffix && (
                <span className={`text-xs ${p.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {p.priceSuffix}
                </span>
              )}
            </div>
            <p className={`mt-2 text-sm leading-relaxed ${p.popular ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
              {p.schedule[0]?.value ?? "Built around your family's needs"}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/pricing"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
        >
          Compare plans &amp; add-ons <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}

/* ---------- Landing ---------- */

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav active="/" />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <ServicesPreview />
        <HowItWorks />
        <PricingPreview />
        <Section>
          <BezydePromise compact />
        </Section>
        <Faq limit={4} />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
