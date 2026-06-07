import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/portfolio/Navbar";
import { LavenderCursor } from "@/components/portfolio/Cursor";
import { Leaf, Sparkle } from "@/components/portfolio/Decor";
import lecture from "@/assets/portfolio/lecture.jpg";
import designWall from "@/assets/portfolio/design-wall.jpg";
import workspace from "@/assets/portfolio/workspace.png";

export const Route = createFileRoute("/my-story")({
  head: () => ({
    meta: [
      { title: "My Story — Meghana Reddy Madi" },
      {
        name: "description",
        content:
          "The journey of Meghana Reddy Madi — from Public Administration to people-centered UI/UX design.",
      },
      { property: "og:title", content: "My Story — Meghana Reddy Madi" },
      {
        property: "og:description",
        content:
          "From Public Administration to UX research and product design — how curiosity became a craft.",
      },
    ],
  }),
  component: MyStoryPage,
});

function MyStoryPage() {
  return (
    <main className="relative">
      <LavenderCursor />
      <Navbar />

      <section className="relative px-5 sm:px-8 md:px-10 pt-28 md:pt-40 pb-14 md:pb-24">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/"
            hash="story"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors"
          >
            <span aria-hidden>←</span> Back to portfolio
          </Link>

          <div className="mt-6 flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <Sparkle className="h-3 w-3 text-lavender-deep shrink-0" />
            <span>My Story</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-5 font-display text-[clamp(2.2rem,6vw,4.6rem)] leading-[1.05] text-balance"
          >
            From <span className="italic">Public Administration</span> to{" "}
            <span className="text-lavender-deep">people-centered design</span>.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative mt-10 md:mt-14"
          >
            <img
              src={lecture}
              alt="Meghana at a UX community lecture"
              className="rounded-3xl lavender-glow object-cover w-full aspect-[16/10]"
            />
            <Leaf className="hidden md:block absolute -top-8 -left-6 w-20 text-lavender-deep/60 animate-sway" />
          </motion.div>

          <div className="mt-12 md:mt-16 space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            <p>
              I started in Public Administration — fascinated by how systems
              shape everyday life. The bureaucracies. The forms. The quiet
              ways structure can either lift people up or wear them down.
            </p>
            <p>
              That curiosity carried me into Information Science at the
              University of New Haven, where I discovered design as the most
              honest way to translate research into things people can
              actually use. Empathy became my method. Clarity, my craft.
            </p>
            <p>
              Today I work across apps, educational platforms and concept
              systems — sitting between research, engineering and craft. I
              care most about the quiet details: spacing, rhythm, words,
              intention.
            </p>
            <p>
              My favorite designs are the ones you don't notice — the ones
              that disappear into use, that respect your attention, that
              feel like someone took the time to listen.
            </p>
          </div>

          <blockquote className="mt-12 md:mt-16 rounded-3xl border border-border bg-card/70 p-7 md:p-10 backdrop-blur">
            <p className="font-display italic text-2xl md:text-3xl text-lavender-deep leading-snug">
              "Less noise. More clarity."
            </p>
            <p className="mt-3 text-sm md:text-base text-muted-foreground">
              Assumptions are expensive. Research is cheaper.
            </p>
          </blockquote>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <img
              src={designWall}
              alt="Editorial typography wall"
              loading="lazy"
              className="rounded-3xl object-cover w-full aspect-[4/3] lavender-glow"
            />
            <img
              src={workspace}
              alt="A calm workspace with notebooks and plants"
              loading="lazy"
              className="rounded-3xl object-cover w-full aspect-[4/3] lavender-glow"
            />
          </div>

          <div className="mt-16 md:mt-20 flex flex-wrap gap-4">
            <Link
              to="/"
              hash="projects"
              className="inline-flex items-center gap-3 rounded-pill px-7 py-4 text-sm text-white transition-transform duration-300 hover:-translate-y-0.5"
              style={{
                background:
                  "linear-gradient(135deg, var(--lavender), var(--lavender-deep))",
                boxShadow:
                  "0 20px 50px -15px color-mix(in oklab, var(--lavender-deep) 70%, transparent)",
              }}
            >
              See my work
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-3 rounded-pill border border-border bg-card/60 px-7 py-4 text-sm backdrop-blur transition-colors hover:bg-lavender-light"
            >
              Say hello
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
