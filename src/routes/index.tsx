import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import {
  MessageCircle,
  Footprints,
  ShoppingBag,
  Home,
  Stethoscope,
  BookOpen,
  Smartphone,
  Dices,
  Church,
  Pill,
  Users,
  Car,
  ShieldCheck,
  HeartHandshake,
  CalendarClock,
  Camera,
  Sparkles,
  MapPin,
  ArrowRight,
  Check,
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  Star,
  ChevronDown,
  Hospital,
  Heart,
  Building2,
  PartyPopper,
  UserPlus,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

import heroImg from "@/assets/hero-companion.jpg";
import walkImg from "@/assets/walk-together.jpg";
import portraitImg from "@/assets/portrait-senior.jpg";
import readingImg from "@/assets/reading-together.jpg";
import { Logo } from "@/components/Logo";
import { SiteNav, navLinks } from "@/components/SiteNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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

/* ---------- shared ---------- */

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container-wide">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
      <Sparkles className="h-3.5 w-3.5" aria-hidden />
      {children}
    </span>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 60]);

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 grain-bg opacity-70" aria-hidden />
      <div className="container-wide relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow>Companionship, delivered with care</Eyebrow>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Because everyone deserves{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">someone</span>
                <span
                  className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-full bg-accent/50 md:bottom-2 md:h-4"
                  aria-hidden
                />
              </span>{" "}
              by their side.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              Helping seniors enjoy meaningful companionship through trusted, recurring
              visits that bring comfort, conversation, and joy.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
              >
                Find a Companion
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-base font-semibold text-foreground transition hover:bg-secondary"
              >
                Learn More
              </a>
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

/* ---------- Trust bar ---------- */

const trust = [
  "Background Verified Companions",
  "Compassionately Trained",
  "Flexible Monthly Plans",
  "Serving Pathanamthitta",
  "Expanding Soon",
];

function TrustBar() {
  return (
    <div className="border-y border-border bg-secondary/60">
      <div className="container-wide flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5">
        {trust.map((t) => (
          <div key={t} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
            <Check className="h-4 w-4 text-primary" />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Problem ---------- */

const problems = [
  "Busy family schedules",
  "Children living away",
  "Loss of social interaction",
  "Limited mobility",
  "Nobody to share quality time with",
];

function Problem() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div {...fadeUp} className="relative">
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
        <motion.div {...fadeUp}>
          <Eyebrow>The quiet challenge</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">
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

/* ---------- Services ---------- */

const services = [
  { icon: MessageCircle, title: "Friendly Conversations", desc: "Long chats, stories, memories shared over tea." },
  { icon: Footprints, title: "Daily Walks", desc: "Gentle walks in the park or around the neighborhood." },
  { icon: ShoppingBag, title: "Grocery Shopping", desc: "A helping hand for weekly essentials and errands." },
  { icon: Home, title: "Light Household Chores", desc: "Small tasks that make everyday life easier." },
  { icon: Stethoscope, title: "Appointment Companion", desc: "Supportive company for hospital and clinic visits." },
  { icon: BookOpen, title: "Reading Together", desc: "Books, newspapers, or scripture — read aloud with warmth." },
  { icon: Smartphone, title: "Technology Assistance", desc: "Video calls with family, phone help, gentle guidance." },
  { icon: Dices, title: "Games & Recreation", desc: "Chess, cards, carrom — laughter and healthy fun." },
  { icon: Church, title: "Temple, Mosque & Church Visits", desc: "Respectful company for places of worship." },
  { icon: Pill, title: "Medication Reminders", desc: "Timely nudges — no medical administration." },
  { icon: Users, title: "Family Updates", desc: "Regular notes so loved ones stay in the loop." },
  { icon: Car, title: "Travel & Local Outings", desc: "A friendly companion for short local trips." },
];

function Services() {
  return (
    <>
      <Section id="services" className="bg-secondary/50">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">
            Small acts of company. Big moments of joy.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From heartfelt conversations to daily walks, our companions bring
            warmth to the moments that matter.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.03 }}
              className="group rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Disclaimer */}
      <section className="-mt-8 pb-8 md:-mt-12 md:pb-12">
        <div className="container-wide">
          <motion.p
            {...fadeUp}
            className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted-foreground"
          >
            Please note: Bezyde provides companionship services only. We do not offer medical care, nursing services, cash handling, or overnight stays.
          </motion.p>
        </div>
      </section>
    </>
  );
}

/* ---------- How it works ---------- */

const steps = [
  { n: "01", title: "Choose Your Plan", desc: "Pick a monthly subscription or request a custom schedule that works for your family." },
  { n: "02", title: "Meet Your Companion", desc: "We carefully match you with a verified companion based on personality and preferences." },
  { n: "03", title: "Recurring Visits", desc: "Your companion visits at scheduled times throughout the week, reliably." },
  { n: "04", title: "Enjoy Peace of Mind", desc: "Real friendships bloom while families stay reassured with regular updates." },
];

function HowItWorks() {
  return (
    <Section id="how">
      <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">
          Four simple steps to a warmer week.
        </h2>
      </motion.div>
      <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" aria-hidden />
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative rounded-3xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          >
            <div className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl bg-primary font-display text-2xl font-semibold text-primary-foreground shadow-soft">
              {s.n}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Why Bezyde ---------- */

const whys = [
  { icon: ShieldCheck, title: "Background Verified", desc: "Every companion goes through thorough verification." },
  { icon: HeartHandshake, title: "Compassionately Trained", desc: "Trained in empathy, patience and elder care basics." },
  { icon: CalendarClock, title: "Flexible Scheduling", desc: "Visits that adjust to your family's rhythm." },
  { icon: Sparkles, title: "Personalized Matching", desc: "The right companion for your loved one's personality." },
  { icon: Users, title: "Trusted & Reliable", desc: "Consistent visits you can count on, every week." },
  { icon: MapPin, title: "Friendly Local Service", desc: "Rooted in Kerala, we understand local culture." },
  { icon: CalendarClock, title: "Monthly Subscriptions", desc: "Simple plans. Cancel or change anytime." },
  { icon: HeartHandshake, title: "Growing Community", desc: "A warm circle of companions and families." },
];

function Why() {
  return (
    <Section id="why" className="bg-secondary/50">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <motion.div {...fadeUp}>
          <Eyebrow>Why Bezyde</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">
            Care you can trust. Warmth you can feel.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We built Bezyde with one goal — to make sure no elder in our
            community spends a day feeling alone. Every detail of our service
            reflects that promise.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl">
            <img
              src={walkImg}
              alt="A companion and an elderly gentleman walking in a park"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {whys.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/25 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Pricing ---------- */

const plans = [
  {
    name: "Nearby",
    price: "₹6,999",
    priceSuffix: "/month",
    tag: "Steady company for an independent parent.",
    popular: false,
    schedule: [
      { label: "Visits", value: "4–5 visits per month" },
      { label: "Frequency", value: "Weekly visits" },
      { label: "Duration", value: "1–1.5 hours per visit" },
    ],
    includes: [
      "Dedicated Primary Companion for every visit",
      "Warm conversations and emotional companionship",
      "Tea-time chats, reading, board games, and walks",
      "Light errands during visits",
      "Dedicated Backup Companion",
      "Emergency escalation protocol",
      "Birthday and festival acknowledgements",
    ],
    cta: "Choose Nearby",
  },
  {
    name: "Together",
    price: "₹10,999",
    priceSuffix: "/month",
    tag: "Regular support and a dependable second set of eyes.",
    popular: true,
    schedule: [
      { label: "Visits", value: "8–9 visits per month" },
      { label: "Frequency", value: "Twice-weekly visits" },
      { label: "Duration", value: "1–1.5 hours per visit" },
    ],
    includesPrefix: "Everything in Nearby, plus",
    includes: [
      "Extended errands",
      "Pharmacy pickups",
      "Bill payment assistance",
      "Light household support",
      "Mid-week wellness phone check-in",
      "Priority scheduling for additional services",
      "Flexible rescheduling",
    ],
    cta: "Choose Together",
  },
  {
    name: "Wholehearted",
    price: "₹16,499",
    priceSuffix: "/month",
    tag: "Comprehensive companionship with greater reassurance.",
    popular: false,
    schedule: [
      { label: "Visits", value: "14–16 visits per month" },
      { label: "Frequency", value: "3–4 visits every week" },
    ],
    includesPrefix: "Everything in Together, plus",
    includes: [
      "Home safety observations during every visit",
      "Priority emergency response coordination",
      "Partner clinic referral benefits",
      "Companion continuity guarantee through familiar backup companions",
    ],
    cta: "Choose Wholehearted",
  },
  {
    name: "All In",
    price: "Talk to Us",
    priceSuffix: "",
    tag: "Personalized care for unique needs.",
    popular: false,
    schedule: [],
    includesPrefix: "May Include",
    includes: [
      "Near-daily visits",
      "Multiple hospital escorts",
      "Dedicated care coordination",
      "Personalized schedules",
      "Priority emergency response",
      "Family-specific support planning",
    ],
    cta: "Talk to Us",
  },
];

const addOns = [
  { name: "Hospital or Clinic Escort", price: "From ₹1,000", icon: Hospital, desc: "A trusted companion by your side for hospital or clinic visits." },
  { name: "Government Office Assistance", price: "From ₹600", icon: Building2, desc: "Help with paperwork, queues, and errands at government offices." },
  { name: "Festival or Special Occasion Visit", price: "From ₹800", icon: PartyPopper, desc: "Company during birthdays, festivals, or family celebrations." },
  { name: "Additional Companion Visit", price: "From ₹500", icon: UserPlus, desc: "An extra visit whenever you need a little more companionship." },
];

const bezydePromise = [
  {
    title: "Trust First",
    desc: "Every companion is police verified before joining Bezyde.",
    icon: ShieldCheck,
  },
  {
    title: "A Familiar Face",
    desc: "You'll see the same Primary Companion every visit, helping build genuine relationships.",
    icon: Users,
  },
  {
    title: "Always Covered",
    desc: "If your companion is unavailable, a familiar Backup Companion is ready to step in.",
    icon: HeartHandshake,
  },
  {
    title: "Stay Connected",
    desc: "Receive a WhatsApp update after every visit so you're always informed.",
    icon: MessageCircle,
  },
  {
    title: "Peace of Mind",
    desc: "With your loved one's consent, we'll share a visit photo after each visit.",
    icon: Camera,
  },
  {
    title: "Ready When Needed",
    desc: "Our emergency escalation protocol ensures families are informed if something unexpected happens.",
    icon: Phone,
  },
  {
    title: "Companionship With Dignity",
    desc: "Every interaction is built on kindness, patience, respect, and meaningful human connection.",
    icon: Heart,
  },
];

function PlanCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  return (
    <motion.div
      key={plan.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`relative flex flex-col rounded-[2rem] border p-5 md:p-6 ${
        plan.popular
          ? "border-primary bg-primary text-primary-foreground shadow-soft lg:-translate-y-3 lg:scale-[1.01]"
          : "border-border bg-card text-foreground"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-accent px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground shadow-glow">
          <Star className="h-3.5 w-3.5 fill-current" />
          Most Popular
        </span>
      )}

      <div className="flex-1">
        <h3 className="font-display text-xl font-semibold md:text-2xl">{plan.name}</h3>
        <p className={`mt-1 text-sm leading-relaxed ${plan.popular ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
          {plan.tag}
        </p>

        <div className="mt-4 flex items-baseline gap-1">
          <span className="font-display text-3xl font-semibold md:text-4xl">{plan.price}</span>
          {plan.priceSuffix && (
            <span className={`text-sm font-medium ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
              {plan.priceSuffix}
            </span>
          )}
        </div>

        {plan.schedule.length > 0 && (
          <div className="mt-4 rounded-2xl border border-border/60 bg-background/40 p-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/70">
              <CalendarClock className="h-4 w-4" />
              Visit Schedule
            </div>
            <ul className="mt-2 space-y-1.5">
              {plan.schedule.map((s) => (
                <li key={s.label} className="flex items-start gap-2 text-sm">
                  <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${plan.popular ? "bg-accent" : "bg-primary"}`} />
                  <span>
                    <span className="font-medium">{s.label}:</span> {s.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
            {plan.includesPrefix || "What's Included"}
          </div>
          <ul className="mt-2 space-y-1.5">
            {plan.includes.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm leading-relaxed">
                <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${plan.popular ? "bg-accent" : "bg-primary"}`} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href="#contact"
        className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
          plan.popular
            ? "bg-accent text-accent-foreground hover:opacity-90"
            : "bg-primary text-primary-foreground hover:opacity-90"
        }`}
      >
        {plan.cta} <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}

function Pricing() {
  return (
    <Section id="pricing" className="bg-secondary/30">
      <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
        <Eyebrow>Simple pricing</Eyebrow>
        <h2 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">
          Plans that grow with your family.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Subscription based. No online payment. We'll help you pick what fits.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((p, i) => (
          <PlanCard key={p.name} plan={p} index={i} />
        ))}
      </div>

      {/* Optional Add-on Services */}
      <motion.div
        {...fadeUp}
        className="mt-16 rounded-[2rem] border border-border bg-card p-6 md:p-10"
      >
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-4 w-4" />
            Optional Add-on Services
          </div>
          <h3 className="mt-3 font-display text-2xl font-semibold text-foreground md:text-3xl">
            Need a little extra support?
          </h3>
          <p className="mt-2 text-muted-foreground">
            Add any of these services to your monthly plan whenever needed.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {addOns.map((addon, i) => {
            const Icon = addon.icon;
            return (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex flex-col rounded-2xl border border-border bg-secondary/50 p-5 transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-5.5 w-5.5" aria-hidden />
                </div>
                <h4 className="mt-4 text-base font-semibold text-foreground">{addon.name}</h4>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">{addon.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-accent-foreground w-fit">
                  {addon.price}
                  <span className="text-xs font-normal text-accent-foreground/70">per visit</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border bg-secondary/40 p-6 text-center md:flex-row md:text-left">
          <div className="flex-1">
            <p className="font-medium text-foreground">Need something else?</p>
            <p className="text-sm text-muted-foreground">
              Contact us for a personalized solution that fits your family.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
          >
            Talk to Us <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>

      {/* The Bezyde Promise */}
      <motion.div
        {...fadeUp}
        className="mt-10 rounded-[2rem] border border-primary/20 bg-primary/5 p-6 md:p-10"
      >
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
            <Star className="h-4 w-4 fill-current" />
            The Bezyde Promise
          </div>
          <h3 className="mt-3 font-display text-2xl font-semibold text-foreground md:text-3xl">
            No matter which plan you choose, these are our promises to every family.
          </h3>
          <div className="mt-3 inline-flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bezydePromise.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h4 className="mt-4 text-base font-semibold text-foreground">{item.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

    </Section>
  );
}

/* ---------- Testimonials ---------- */

const testimonials = [
  {
    quote:
      "Amma looks forward to Wednesdays like a child looks forward to a festival. Her companion has become family. I finally feel at ease from Bengaluru.",
    name: "Anjali Menon",
    role: "Daughter · Bengaluru",
  },
  {
    quote:
      "My morning walks used to feel long and quiet. Now I have a friend who listens to my stories and shares his own. It's the best hour of my day.",
    name: "K.V. Thomas",
    role: "78 · Pathanamthitta",
  },
  {
    quote:
      "The team is warm, punctual, and genuinely kind. Weekly updates keep us reassured. Bezyde gave our parents company and our family peace of mind.",
    name: "Rahul & Divya Nair",
    role: "Family · Ernakulam",
  },
];

function Testimonials() {
  return (
    <Section className="bg-secondary/50">
      <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
        <Eyebrow>Kind words</Eyebrow>
        <h2 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">
          Stories from the people we serve.
        </h2>
      </motion.div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          >
            <div>
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-lg leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
            </div>
            <figcaption className="mt-6 border-t border-border pt-4">
              <div className="font-semibold text-foreground">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

/* ---------- FAQ ---------- */

const faqs = [
  {
    q: "Is Bezyde a medical or nursing service?",
    a: "No. Bezyde is a companionship service. Our companions are not medical professionals and do not administer medication or provide clinical care.",
  },
  {
    q: "Can I choose my companion?",
    a: "Yes. We match you based on personality and preferences, and you're always welcome to request a different companion if it isn't the right fit.",
  },
  {
    q: "Can I customize visit timings?",
    a: "Absolutely. Choose a fixed weekly schedule or work with us on a custom plan that fits your loved one's routine.",
  },
  {
    q: "What if I need additional visits in a month?",
    a: "Extra visits can be added on top of any plan. Just let us know a day or two ahead and we'll arrange it.",
  },
  {
    q: "Are companions background verified?",
    a: "Yes. Every companion goes through a thorough background check and compassion-focused training before their first visit.",
  },
  {
    q: "Which locations do you currently serve?",
    a: "We're based in Pathanamthitta, Kerala, and are expanding to more cities in Kerala very soon.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Yes, monthly plans can be paused or cancelled anytime with no penalty. We only ask for a short notice period.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-3xl border border-border bg-card">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-semibold text-foreground md:text-lg">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 px-6 pb-5 text-muted-foreground">{a}</div>
      </div>
    </div>
  );
}

function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <motion.div {...fadeUp}>
          <Eyebrow>Frequently asked</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">
            Answers, straight from the heart.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Still have questions? We'd love to talk. Reach out anytime — we
            respond within a few hours.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
          >
            Talk to us <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <FaqItem key={f.q} {...f} />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Final CTA ---------- */

function FinalCta() {
  return (
    <Section>
      <motion.div
        {...fadeUp}
        className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center text-primary-foreground md:px-12 md:py-24"
      >
        <div className="pointer-events-none absolute inset-0 opacity-40 grain-bg" aria-hidden />
        <div className="relative mx-auto max-w-2xl">
          <Sparkles className="mx-auto h-8 w-8 text-accent" />
          <h2 className="mt-5 font-display text-4xl font-semibold md:text-5xl lg:text-6xl">
            Give your loved ones the gift of companionship.
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/85">
            A little company can make a big difference. Let us help bring warmth,
            conversation, and meaningful moments to the people who matter most.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-accent-foreground shadow-glow transition hover:opacity-90"
          >
            Book a Free Consultation <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </Section>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  return (
    <Section id="contact" className="bg-secondary/50">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <motion.div {...fadeUp}>
          <Eyebrow>Get in touch</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">
            Let's find the right companion for your family.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us a little about your loved one and we'll be in touch within a few hours.
          </p>

          <form
            className="mt-8 grid gap-4 rounded-3xl border border-border bg-card p-6 md:p-8"
            onSubmit={async (e) => {
              e.preventDefault();
              const formEl = e.currentTarget;
              setStatus("sending");
              try {
                const res = await fetch("https://formsubmit.co/ajax/hello@bezyde.com", {
                  method: "POST",
                  headers: { Accept: "application/json" },
                  body: new FormData(formEl),
                });
                if (!res.ok) throw new Error(`Request failed: ${res.status}`);
                setStatus("sent");
                formEl.reset();
              } catch (err) {
                console.error("Enquiry submission failed", err);
                setStatus("error");
              }
            }}
          >
            <input type="hidden" name="_subject" value="New Bezyde enquiry from the website" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your full name" required />
              <Field label="Phone" name="phone" type="tel" placeholder="+91 …" required />
            </div>
            <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
            <Field label="Who needs a companion?" name="who" placeholder="e.g. My mother, 74" required />
            <Field label="Preferred schedule" name="schedule" placeholder="e.g. Mon, Wed, Fri mornings" />
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-foreground">Message <span className="text-destructive">*</span></span>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Anything we should know?"
                className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
              />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
            >
              {status === "sending"
                ? "Sending…"
                : status === "sent"
                  ? "Thank you — we'll be in touch!"
                  : "Send Enquiry"}
              <ArrowRight className="h-4 w-4" />
            </button>
            {status === "error" && (
              <p className="text-sm text-destructive">
                Something went wrong. Please call us on +91 8136979757 or email hello@bezyde.com.
              </p>
            )}
          </form>
        </motion.div>

        <motion.div {...fadeUp} className="space-y-4">
          <ContactCard icon={Phone} title="Phone" text="+91 8136979757" href="tel:+918136979757" />
          <ContactCard icon={Mail} title="Email" text="hello@bezyde.com" href="mailto:hello@bezyde.com" />
          <ContactCard
            icon={MapPin}
            title="Office"
            text="MC Road, Pathanamthitta, Kerala 686001"
          />
          <ContactCard
            icon={Clock}
            title="Business Hours"
            text="Mon – Sat · 8:00 AM – 8:00 PM"
          />
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <iframe
              title="Bezyde office location in Pathanamthitta"
              src="https://www.google.com/maps?q=Pathanamthitta,Kerala&output=embed"
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
      />
    </label>
  );
}

function ContactCard({
  icon: Icon,
  title,
  text,
  href,
}: {
  icon: typeof Phone;
  title: string;
  text: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5 transition hover:shadow-card">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">{title}</div>
          <div className="text-sm text-muted-foreground">{text}</div>
        </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-wide grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Bezyde brings trusted, caring companions to elderly people across
            Pathanamthitta, Kerala. Because everyone deserves someone by their side.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.instagram.com/_bezide_?igsh=ZG51Znk3MHdzYTJ0"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground/70 transition hover:border-primary hover:text-primary"
            >
              <Instagram className="h-5 w-5" aria-hidden />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground/70 transition hover:border-primary hover:text-primary"
            >
              <Facebook className="h-5 w-5" aria-hidden />
            </a>
            <a
              href="#"
              aria-label="X"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground/70 transition hover:border-primary hover:text-primary"
            >
              <Twitter className="h-5 w-5" aria-hidden />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-foreground">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-foreground">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>+91 8136979757</li>
            <li>hello@bezyde.com</li>
            <li>MC Road, Pathanamthitta, Kerala</li>
            <li>Mon–Sat · 8 AM – 8 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-wide flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© 2026 Bezyde. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Floating WhatsApp ---------- */

function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/918136979757?text=Hi%20Bezyde%2C%20I%27d%20like%20to%20know%20more%20about%20your%20companionship%20service."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Bezyde on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-glow transition hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M19.11 17.68c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.9 1.13-.17.19-.33.22-.62.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.13-.23-.55-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.51.07-.78.36-.26.29-1.01.99-1.01 2.41 0 1.42 1.04 2.8 1.18 2.99.15.19 2.05 3.13 4.96 4.39.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.11.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34zM16.02 5.33c-5.9 0-10.7 4.79-10.7 10.68 0 1.88.49 3.72 1.42 5.34L5 27.2l6-1.57a10.7 10.7 0 0 0 5.02 1.28h.01c5.89 0 10.69-4.79 10.69-10.68 0-2.85-1.11-5.53-3.13-7.55a10.62 10.62 0 0 0-7.57-3.35z" />
      </svg>
    </a>
  );
}

/* ---------- Landing ---------- */

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Services />
        <HowItWorks />
        <Why />
        <Pricing />
        
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
