import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

import { Logo } from "@/components/Logo";
import portraitImg from "@/assets/portrait-senior.jpg";

const TITLE = "Our Story — How Bezyde Began | Bezyde";
const DESC =
  "One afternoon, a cup of tea and a man in his seventies who simply wanted someone to talk to. This is the story behind Bezyde's companionship service in Pathanamthitta, Kerala.";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://bezyde-by-your-side.lovable.app/our-story" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://bezyde-by-your-side.lovable.app/our-story" }],
  }),
  component: OurStory,
});

const paragraphs = [
  "We\u2019d found the car on OLX. A fair price, a quick errand, nothing more. Twenty minutes, we figured.",
  "That\u2019s not what happened.",
  "He was in his seventies, moving a little slowly. But the moment he saw us, his whole manner changed. Quicker steps, a wider smile, the particular energy of someone who hasn\u2019t had a visitor in a while and isn\u2019t ready to let this one go quickly. The inspection took no time. What came after took the whole afternoon.",
  "He asked us to sit. Not really a question, more a quiet insistence you don\u2019t say no to. He brought out tea before we could say yes or no to that either, in cups that looked like they\u2019d been waiting in the cupboard for an occasion worth using them. Once we sat, he simply began to talk. His wife had passed a few years back, he mentioned, plainly, in passing, and moved straight on to what filled his days now, which, we slowly realized, was very little.",
  "His children were abroad, building good lives, and he talked about them with real pride: what they\u2019d achieved, the houses they\u2019d bought, the grandchildren he\u2019d only met over video calls. But every story circled back the same way, to how long it had been since anyone had sat across from him like this. At one point he set his cup down, looked at us for a moment, and said, simply, \u201CIt\u2019s good to have someone to talk to.\u201D He said it lightly, almost as a joke on himself, but neither of us laughed. We both understood exactly what he meant.",
  "Even after the deal was done, even after we were ready to pay, he kept finding one more thing to say, one more question to ask, in no hurry at all to watch us go.",
  "We finally left almost two hours after we\u2019d arrived for what should have been a twenty-minute errand, and on the drive home we kept coming back to the same thought. It wasn\u2019t that his children didn\u2019t love him. They called every week, sent money without being asked, worried constantly from thousands of miles away. It was that caring from a distance has a real limit, and no one had quite figured out what to do about the part distance couldn\u2019t reach: the ordinary Tuesday afternoons, the small routines only a regular visitor would ever notice, the simple fact of having someone who shows up.",
  "That\u2019s what Bezyde exists for. Not to watch over someone every hour of the day; no service honestly can. But to put a real, trusted person back into the rhythm of a parent\u2019s week: a verified Companion, the same familiar face every time, who visits regularly, who gets to know them well enough to notice when something\u2019s off, for tea, a story worth hearing again, and the ordinary hours a weekly phone call never quite reaches.",
  "We still think about him. Everything we built traces back to that afternoon.",
];

function OurStory() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/90 backdrop-blur-lg">
        <div className="container-wide flex h-16 items-center justify-between md:h-20">
          <Logo />
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground/80 transition hover:border-primary hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back home
          </Link>
        </div>
      </header>

      <main>
        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container-wide max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
                Our Story
              </span>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                “Nobody drives it anymore,” he said.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Running his hand along the dusty bonnet like he was apologizing to the
                car itself.
              </p>
            </motion.div>
          </div>
        </section>

        <article className="py-16 md:py-20">
          <div className="container-wide max-w-3xl">
            <figure className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <img
                src={portraitImg}
                alt="An elderly man sitting at home with a cup of tea"
                className="h-72 w-full object-cover md:h-96"
                loading="lazy"
              />
            </figure>

            <div className="mt-10 space-y-6">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-foreground/85">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-12 rounded-3xl border border-primary/20 bg-primary-soft/50 p-8 text-center">
              <Quote className="mx-auto h-7 w-7 text-primary" aria-hidden />
              <p className="mt-4 font-display text-2xl font-semibold text-foreground">
                Bezyde — Companionship. Care. Community.
              </p>
              <Link
                to="/"
                hash="contact"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
              >
                Talk to us about your parent
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </article>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container-wide flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground md:flex-row">
          <p>© 2026 Bezyde. All rights reserved.</p>
          <p>hello@bezyde.com · +91 8136979757</p>
        </div>
      </footer>
    </div>
  );
}
