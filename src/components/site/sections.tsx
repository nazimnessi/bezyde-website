import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CalendarClock,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Star,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

import { Logo } from "@/components/Logo";
import { navLinks } from "@/components/SiteNav";
import { Section, Eyebrow, fadeUp } from "@/components/site/shared";
import {
  DISCLAIMER,
  addOns,
  bezydePromise,
  faqs,
  plans,
  services,
  steps,
  trust,
  whys,
} from "@/components/site/data";
import walkImg from "@/assets/walk-together.jpg";

/* ---------- Trust bar ---------- */

export function TrustBar() {
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

/* ---------- Services ---------- */

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mt-14">
      {list.map(({ icon: Icon, title, desc }, i) => (
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
  );
}

export function Disclaimer() {
  return (
    <section className="pb-10 md:pb-12">
      <div className="container-wide">
        <motion.p
          {...fadeUp}
          className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted-foreground"
        >
          {DISCLAIMER}
        </motion.p>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */

export function HowItWorks() {
  return (
    <Section id="how">
      <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-5xl">
          Four simple steps to a warmer week.
        </h2>
      </motion.div>
      <div className="relative mt-10 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
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
            <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-primary font-display text-xl font-semibold text-primary-foreground shadow-soft md:h-16 md:w-16 md:text-2xl">
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

export function Why() {
  return (
    <Section id="why" className="bg-secondary/50">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <motion.div {...fadeUp}>
          <Eyebrow>Why Bezyde</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-5xl">
            Care you can trust. Warmth you can feel.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We built Bezyde with one goal — to make sure no elder in our
            community spends a day feeling alone. Every detail of our service
            reflects that promise.
          </p>
          <div className="mt-8 hidden overflow-hidden rounded-3xl md:block">
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

function PlanCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  return (
    <motion.div
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

      <Link
        to="/contact"
        className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
          plan.popular
            ? "bg-accent text-accent-foreground hover:opacity-90"
            : "bg-primary text-primary-foreground hover:opacity-90"
        }`}
      >
        {plan.cta} <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}

export function PlansGrid() {
  return (
    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4 md:mt-14">
      {plans.map((p, i) => (
        <PlanCard key={p.name} plan={p} index={i} />
      ))}
    </div>
  );
}

export function AddOns() {
  return (
    <motion.div
      {...fadeUp}
      className="mt-14 rounded-[2rem] border border-border bg-card p-6 md:p-10"
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

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-10">
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
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h4 className="mt-4 text-base font-semibold text-foreground">{addon.name}</h4>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">{addon.desc}</p>
              <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-accent-foreground">
                {addon.price}
                <span className="text-xs font-normal text-accent-foreground/70">per visit</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border bg-secondary/40 p-6 text-center md:mt-10 md:flex-row md:text-left">
        <div className="flex-1">
          <p className="font-medium text-foreground">Need something else?</p>
          <p className="text-sm text-muted-foreground">
            Contact us for a personalized solution that fits your family.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
        >
          Talk to Us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}

export function BezydePromise({ compact = false }: { compact?: boolean }) {
  const list = compact ? bezydePromise.slice(0, 3) : bezydePromise;
  return (
    <motion.div
      {...fadeUp}
      className="rounded-[2rem] border border-primary/20 bg-primary/5 p-6 md:p-10"
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
        {list.map((item, i) => {
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
      {compact && (
        <div className="mt-8 text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            See all seven promises <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </motion.div>
  );
}

/* ---------- FAQ ---------- */

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

export function Faq({ limit }: { limit?: number }) {
  const list = limit ? faqs.slice(0, limit) : faqs;
  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <motion.div {...fadeUp}>
          <Eyebrow>Frequently asked</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-5xl">
            Answers, straight from the heart.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Still have questions? We'd love to talk. Reach out anytime — we
            respond within a few hours.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
          >
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
        <div className="space-y-3">
          {list.map((f) => (
            <FaqItem key={f.q} {...f} />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Final CTA ---------- */

export function FinalCta() {
  return (
    <Section>
      <motion.div
        {...fadeUp}
        className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-14 text-center text-primary-foreground md:px-12 md:py-24"
      >
        <div className="pointer-events-none absolute inset-0 opacity-40 grain-bg" aria-hidden />
        <div className="relative mx-auto max-w-2xl">
          <Sparkles className="mx-auto h-8 w-8 text-accent" />
          <h2 className="mt-5 font-display text-3xl font-semibold md:text-5xl lg:text-6xl">
            Give your loved ones the gift of companionship.
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/85">
            A little company can make a big difference. Let us help bring warmth,
            conversation, and meaningful moments to the people who matter most.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-accent-foreground shadow-glow transition hover:opacity-90"
          >
            Book a Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}

/* ---------- Contact ---------- */

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
      <span className="mb-1.5 block text-sm font-medium text-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </span>
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

export function Contact({ heading = true }: { heading?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  return (
    <Section id="contact" className="bg-secondary/50">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <motion.div {...fadeUp}>
          {heading && (
            <>
              <Eyebrow>Get in touch</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-5xl">
                Let's find the right companion for your family.
              </h2>
            </>
          )}
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
              <span className="mb-1.5 block text-sm font-medium text-foreground">
                Message <span className="text-destructive">*</span>
              </span>
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
          <ContactCard icon={MapPin} title="Office" text="MC Road, Pathanamthitta, Kerala 686001" />
          <ContactCard icon={Clock} title="Business Hours" text="Mon – Sat · 8:00 AM – 8:00 PM" />
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <iframe
              title="Bezyde office location in Pathanamthitta"
              src="https://www.google.com/maps?q=Pathanamthitta,Kerala&output=embed"
              className="h-64 w-full md:h-72"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ---------- Footer ---------- */

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-wide grid gap-10 py-14 md:grid-cols-4 md:py-16">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Bezyde brings trusted, caring companions to elderly people across
            Pathanamthitta, Kerala. Because everyone deserves someone by their side.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.instagram.com/_bezyde_"
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
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary">
                  {l.label}
                </Link>
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
            <a href="#" className="hover:text-primary">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Floating WhatsApp ---------- */

export function WhatsAppFab() {
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