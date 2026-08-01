import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Quote } from "lucide-react";

import { SiteNav } from "@/components/SiteNav";
import carImg from "@/assets/story-old-car.jpg";
import teaImg from "@/assets/story-tea-cups.jpg";
import elderImg from "@/assets/story-elder-talking.jpg";
import visitImg from "@/assets/story-companion-visit.jpg";

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

function StoryImage({
  src,
  alt,
  caption,
  tall = false,
}: {
  src: string;
  alt: string;
  caption: string;
  tall?: boolean;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="my-10 md:my-12"
    >
      <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
        <img
          src={src}
          alt={alt}
          width={1280}
          height={860}
          loading="lazy"
          className={`w-full object-cover ${tall ? "h-72 md:h-[26rem]" : "h-60 md:h-80"}`}
        />
      </div>
      <figcaption className="mt-3 text-center text-sm italic text-muted-foreground">
        {caption}
      </figcaption>
    </motion.figure>
  );
}

function StoryText({ items }: { items: string[] }) {
  return (
    <div className="space-y-6">
      {items.map((p, i) => (
        <p key={i} className="text-lg leading-relaxed text-foreground/85">
          {p}
        </p>
      ))}
    </div>
  );
}

function OurStory() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav active="/our-story" />

      <main>
        <section className="bg-secondary/50 pb-16 pt-28 md:pb-24 md:pt-36">
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

        <article className="py-14 md:py-20">
          <div className="container-wide max-w-3xl">
            <StoryImage
              src={carImg}
              alt="An old car parked in the shaded courtyard of a Kerala home"
              caption="A twenty-minute errand, we figured. It took the whole afternoon."
              tall
            />

            <StoryText items={paragraphs.slice(0, 3)} />

            <StoryImage
              src={teaImg}
              alt="Two cups of tea on a small wooden table in a Kerala living room"
              caption="Cups that looked like they'd been waiting for an occasion worth using them."
            />

            <StoryText items={paragraphs.slice(3, 5)} />

            <figure className="my-12 rounded-3xl border border-primary/20 bg-primary-soft/40 p-7 md:p-9">
              <Quote className="h-6 w-6 text-primary" aria-hidden />
              <blockquote className="mt-3 font-display text-2xl leading-snug text-foreground md:text-3xl">
                “It’s good to have someone to talk to.”
              </blockquote>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                He said it lightly, almost as a joke on himself. Neither of us laughed.
              </figcaption>
            </figure>

            <StoryImage
              src={elderImg}
              alt="An elderly man smiling as he talks, family photographs behind him"
              caption="Every story circled back to how long it had been since anyone sat across from him."
            />

            <StoryText items={paragraphs.slice(5, 8)} />

            <StoryImage
              src={visitImg}
              alt="A Bezyde companion sitting and laughing with an elderly woman on a veranda"
              caption="A real, trusted person back in the rhythm of a parent’s week."
            />

            <StoryText items={paragraphs.slice(8)} />

            <div className="mt-14 rounded-3xl border border-primary/20 bg-primary-soft/50 p-8 text-center">
              <p className="font-display text-2xl font-semibold text-foreground">
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
