import { motion, useScroll, useSpring, type Variants } from "framer-motion";
import { Navbar } from "@/components/portfolio/Navbar";
import { LavenderCursor } from "@/components/portfolio/Cursor";
import { Intro } from "@/components/portfolio/Intro";
import { Leaf, Sparkle, Squiggle, CircleOrbit } from "@/components/portfolio/Decor";
import portrait from "@/assets/portfolio/portrait-hero.jpg";
import workspace from "@/assets/portfolio/workspace.png";
import collab from "@/assets/portfolio/collab.png";
import education from "@/assets/portfolio/education.jpg";
import aimled from "@/assets/portfolio/aimled.jpg";
import alervio from "@/assets/portfolio/alervio.jpg";
import aiCreativity from "@/assets/portfolio/ai-creativity.jpg";
import yoke from "@/assets/portfolio/yoke.jpg";
import spike from "@/assets/portfolio/spike-safe.jpg";
import designWall from "@/assets/portfolio/design-wall.jpg";
import lecture from "@/assets/portfolio/lecture.jpg";

const reveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] as const } },
};

function Section({
  id,
  eyebrow,
  className = "",
  children,
}: {
  id: string;
  eyebrow?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`relative px-5 sm:px-8 md:px-10 py-14 md:py-24 ${className}`}>
      {eyebrow && (
        <div className="mb-5 md:mb-6 flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-8 md:w-10 bg-lavender" />
          {eyebrow}
        </div>
      )}
      {children}
    </section>
  );
}


const projects = [
  {
    img: yoke,
    cat: "Mobile · Product",
    title: "Yoke",
    sub: "Community-based matchmaking app",
    body:
      "End-to-end UI/UX for a value-driven matchmaking experience. User flows, personas, wireframes and high-fidelity prototypes in Figma, refined alongside engineering.",
    year: "2025",
  },
  {
    img: aimled,
    cat: "Enterprise · EdTech",
    title: "AIMLED Solutions",
    sub: "Website design & redesign",
    body:
      "Transformed a gaming template into a calm, accessible educational platform — soft skills, digital learning, and resources with clear hierarchy across devices.",
    year: "2024",
  },
  {
    img: alervio,
    cat: "Web · Redesign",
    title: "Alervio",
    sub: "Visual hierarchy & brand coherence",
    body:
      "Self-initiated redesign refining color system, typography, spacing and CTA placement — a calmer interface aligned with usability best practices.",
    year: "2024",
  },
  {
    img: aiCreativity,
    cat: "Research · AI",
    title: "AI for Creativity in Schools",
    sub: "UX framework for high-school classrooms",
    body:
      "Empathy maps, journeys and a strategic framework that helps teachers use AI for inquiry, imagination and self-expression — not just efficiency.",
    year: "2024",
  },
  {
    img: spike,
    cat: "Concept · Safety",
    title: "Spike Safe",
    sub: "Wrong-way driving prevention system",
    body:
      "Motion-activated retractable spikes paired with sensors and cameras. Conceptual diagrams, user journeys and the visual storytelling for the proposal.",
    year: "2024",
  },
  {
    img: collab,
    cat: "Concept · Community",
    title: "Liba Space",
    sub: "A calm digital space for community",
    body:
      "A conceptual platform exploring how soft UI, gentle motion and thoughtful information architecture can make online communities feel safer, slower and more human.",
    year: "2024",
  },
];

const focusAreas = [
  {
    t: "Product Design",
    d: "End-to-end UX for apps and platforms — flows, IA, prototypes and polish.",
  },
  {
    t: "Design Systems",
    d: "Tokens, components and patterns that keep teams shipping consistently.",
  },
  {
    t: "Research & Strategy",
    d: "Interviews, journeys and empathy maps that turn assumptions into evidence.",
  },
  {
    t: "Visual & Editorial",
    d: "Typography, rhythm and storytelling that make products feel considered.",
  },
];

const skills = [
  { t: "User Research", d: "Interviews, empathy mapping, behavioral synthesis." },
  { t: "Wireframing", d: "Low-fi to hi-fi flows in Figma with crisp IA." },
  { t: "Interaction Design", d: "Micro-interactions that feel calm and intentional." },
  { t: "Usability Testing", d: "Moderated & unmoderated studies that move the needle." },
  { t: "Visual Storytelling", d: "Editorial layouts, typography, narrative composition." },
  { t: "Responsive Design", d: "Mobile-first systems scaled to large surfaces." },
];

const process = [
  { n: "01", t: "Empathize", d: "Listen. Observe. Find the human inside the problem." },
  { n: "02", t: "Define", d: "Frame the real question — the one worth solving." },
  { n: "03", t: "Ideate", d: "Sketch widely, then choose with conviction." },
  { n: "04", t: "Design", d: "Refine the form until it disappears into use." },
  { n: "05", t: "Test & Refine", d: "Iterate with real people, calmly and quickly." },
];

const experience = [
  {
    role: "UI/UX Designer — Freelance & Self-Initiated",
    org: "Remote",
    period: "2023 — Present",
    points: [
      "Designed apps, websites and concept systems across EdTech, community and safety domains.",
      "Led research, wireframing, prototyping and visual design end-to-end in Figma.",
    ],
  },
  {
    role: "Graduate Researcher & Designer",
    org: "University of New Haven",
    period: "2024 — 2025",
    points: [
      "Built UX frameworks for AI-in-education research projects.",
      "Facilitated usability studies and synthesized findings into design decisions.",
    ],
  },
];

const tools = ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Miro", "Notion", "Framer", "Webflow"];

export function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Meghana Reddy Madi",
              jobTitle: "UI/UX Designer",
              description:
                "UI/UX designer crafting meaningful, human-centered digital experiences with empathy, research and editorial craft.",
              url: "https://soft-lavender-dream.lovable.app/",
              email: "mailto:Meghanareddymadi@gmail.com",
              telephone: "+1-203-589-9609",
              address: {
                "@type": "PostalAddress",
                addressLocality: "West Haven",
                addressRegion: "CT",
                addressCountry: "USA",
              },
              alumniOf: [
                { "@type": "CollegeOrUniversity", name: "University of New Haven" },
                { "@type": "CollegeOrUniversity", name: "Osmania University" },
              ],
              sameAs: ["https://www.linkedin.com/in/meghana-reddy-madi/"],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Meghana Reddy Madi — UI/UX Designer Portfolio",
              url: "https://soft-lavender-dream.lovable.app/",
            },
          ]),
        }}
      />
      <Intro />
      <LavenderCursor />
      <Navbar />

      {/* Scroll progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left"
      >
        <div className="h-full w-full" style={{
          background: "linear-gradient(90deg, transparent, var(--lavender), var(--lavender-deep), transparent)"
        }} />
      </motion.div>

      {/* Floating decor — hidden on mobile to prevent overflow */}
      <Leaf className="pointer-events-none hidden md:block fixed top-32 -left-6 w-32 text-lavender/40 animate-sway" />
      <Leaf className="pointer-events-none hidden md:block fixed bottom-24 -right-10 w-40 text-lavender-deep/30 animate-sway" />


      {/* HERO */}
      <Section id="home" className="pt-28 md:pt-48">
        <div className="mx-auto grid max-w-7xl gap-10 md:gap-16 md:grid-cols-12 items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            className="md:col-span-7 relative order-2 md:order-1"
          >
            <div className="mb-5 flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-muted-foreground">
              <Sparkle className="h-3 w-3 text-lavender-deep shrink-0" />
              <span>UI / UX Designer · Portfolio 2025</span>
            </div>

            <h1 className="font-display text-[clamp(2.1rem,8.5vw,5.6rem)] leading-[1.05] md:leading-[1.02] text-balance">
              <span className="italic font-light">Curious</span> about people,{" "}
              <span className="relative inline-block">
                systems
                <Squiggle className="absolute -bottom-2 md:-bottom-3 left-0 w-full text-lavender-deep" />
              </span>{" "}
              and why some{" "}
              <span className="relative inline-block">
                designs
                <Squiggle className="absolute -bottom-2 md:-bottom-3 left-0 w-full text-lavender-deep" />
              </span>{" "}
              just feel easier.
            </h1>

            <p className="mt-6 md:mt-8 max-w-xl text-base md:text-lg text-muted-foreground text-pretty">
              I'm <span className="text-foreground">Meghana Reddy Madi</span> — a UI/UX designer
              focused on usability, storytelling and the quiet details that turn
              a product into an experience worth returning to.
            </p>
            <p className="mt-4 max-w-xl text-sm md:text-base italic text-lavender-deep">
              Assumptions are expensive. Research is cheaper.
            </p>


            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3 md:gap-4">
              <a
                href="#projects"
                data-cursor="hover"
                className="group relative inline-flex items-center gap-3 rounded-pill px-6 md:px-7 py-3.5 md:py-4 text-sm text-white transition-transform duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, var(--lavender), var(--lavender-deep))",
                  boxShadow: "0 20px 50px -15px color-mix(in oklab, var(--lavender-deep) 70%, transparent)",
                }}
              >
                Explore Work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/my-story"
                data-cursor="hover"
                className="inline-flex items-center gap-3 rounded-pill border border-border bg-card/60 px-6 md:px-7 py-3.5 md:py-4 text-sm backdrop-blur transition-colors hover:bg-lavender-light"
              >
                My Story
              </a>
            </div>

            <div className="mt-12 md:mt-16 grid max-w-xl grid-cols-2 gap-3 md:gap-6 text-sm">
              {[
                ["20+", "Projects"],
                ["MS", "Info. Science"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl border border-border bg-card/50 p-3 md:p-4 text-center md:text-left">
                  <div className="font-display text-2xl md:text-3xl text-lavender-deep">{n}</div>
                  <div className="mt-1 text-[11px] md:text-sm text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
            className="md:col-span-5 relative mx-auto w-full max-w-[280px] md:max-w-md order-1 md:order-2"
          >

            <CircleOrbit className="absolute -inset-10 text-lavender/30 animate-[spin_60s_linear_infinite]" />

            <div className="relative animate-float-slow">
              <div
                className="absolute -inset-6 -z-10 rounded-[48%_52%_45%_55%/55%_45%_55%_45%] blur-2xl"
                style={{
                  background:
                    "conic-gradient(from 90deg, var(--lavender-light), var(--pink-soft), var(--lavender), var(--lavender-light))",
                  opacity: 0.85,
                }}
              />
              <img
                src={portrait}
                alt="Portrait of Meghana Reddy Madi"
                className="w-full object-cover lavender-glow"
                style={{
                  borderRadius: "48% 52% 45% 55% / 55% 45% 55% 45%",
                  aspectRatio: "4 / 5",
                  border: "none",
                }}
              />
              <span className="absolute -top-4 -right-2 inline-flex items-center gap-2 rounded-pill border border-border bg-card/80 px-4 py-2 text-xs backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Available for new work
              </span>
              <Sparkle className="absolute -left-6 top-12 h-6 w-6 text-lavender-deep animate-float-slow" />
              <Leaf className="absolute -bottom-6 -right-4 w-16 text-lavender animate-sway" />
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="relative mt-20 md:mt-28 overflow-hidden border-y border-border/60 py-5 md:py-6">
          <div className="marquee flex gap-10 md:gap-16 whitespace-nowrap font-display text-xl md:text-2xl text-muted-foreground/70">
            {[...Array(2)].flatMap((_, k) =>
              ["UI Design", "✦", "UX Research", "✦", "Wireframing", "✦", "Prototyping", "✦", "Design Systems", "✦", "Interaction Design", "✦", "Usability Testing", "✦", "Visual Design", "✦"].map(
                (w, i) => (
                  <span key={`${k}-${i}`} className="italic">
                    {w}
                  </span>
                ),
              ),
            )}
          </div>
        </div>

      </Section>

      {/* FOCUS AREAS */}
      <Section id="focus" eyebrow="Focus Areas">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-tight max-w-2xl text-balance">
              Less noise.{" "}
              <span className="italic text-lavender-deep">More clarity.</span>
            </h2>
            <p className="max-w-sm text-muted-foreground">
              The kinds of problems I love to sit with — and the lenses I bring
              to each of them.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((f, i) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="hover-lift rounded-3xl border border-border bg-card p-7"
              >
                <Sparkle className="h-5 w-5 text-lavender-deep" />
                <h3 className="mt-5 font-display text-2xl">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" eyebrow="About" className="bg-section">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12 md:gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={reveal}
            className="md:col-span-5 relative"
          >
            <div className="relative">
              <img
                src={workspace}
                alt="Workspace with laptop, books and plants"
                className="rounded-3xl lavender-glow object-cover w-full aspect-[4/5]"
              />
              <img
                src={collab}
                alt="Educational platform design mockups"
                className="absolute -bottom-10 -right-6 w-2/3 rounded-3xl shadow-2xl object-cover aspect-square hidden md:block"
              />
              <Leaf className="absolute -top-8 -left-6 w-20 text-lavender-deep/60 animate-sway" />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={reveal}
            className="md:col-span-7 md:pl-6"
          >
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] leading-tight text-balance">
              Curious about people,{" "}
              <span className="italic">systems</span>, and why some designs
              just feel <span className="text-lavender-deep">easier</span>.
            </h2>

            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              My journey into design is rooted in curiosity — about how people think,
              interact and engage with the world. I approach every project with empathy
              and a love for the quiet details: spacing, rhythm, words, intention.
            </p>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              With a background in Information Science and hands-on experience across
              app design, educational platforms and branding, I translate complex ideas
              into visuals that inform, inspire and make an impact.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
              {[
                ["3+", "Years"],
                ["20+", "Projects"],
                ["MS", "UNH '25"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="hover-lift rounded-3xl border border-border bg-card p-5"
                >
                  <div className="font-display text-3xl text-lavender-deep">{n}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="Selected Work">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-tight text-balance max-w-3xl">
              A collection of work shaped by{" "}
              <span className="italic text-lavender-deep">research</span>, refined by craft.
            </h2>
            <p className="max-w-sm text-muted-foreground">
              Each project is a step in the journey — grounded in empathy, strategy,
              and a drive to design with meaning.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:gap-14">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
                className={`group relative ${i % 2 === 1 ? "lg:translate-y-16" : ""}`}
                data-cursor="hover"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-lavender-light/40 via-card to-pink-soft/30 hover-lift">
                  <div className="aspect-[4/3] overflow-hidden flex items-center justify-center p-4 md:p-6">
                    <img
                      src={p.img}
                      alt={`${p.title} — ${p.sub} UI/UX case study`}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(60% 60% at 50% 100%, color-mix(in oklab, var(--lavender) 30%, transparent), transparent 70%)",
                    }}
                  />
                </div>

                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-lavender-deep">
                      {p.cat} · {p.year}
                    </div>
                    <h3 className="mt-2 font-display text-3xl md:text-4xl">
                      {p.title}
                    </h3>
                    <p className="mt-1 italic text-muted-foreground">{p.sub}</p>
                    <p className="mt-4 max-w-lg text-muted-foreground text-pretty">
                      {p.body}
                    </p>
                  </div>
                  <span
                    className="mt-2 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card transition-all group-hover:bg-lavender-light group-hover:-translate-y-1"
                    aria-hidden
                  >
                    ↗
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section id="process" eyebrow="Design Process" className="bg-section">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-tight max-w-3xl text-balance">
            A calm, repeatable rhythm — from{" "}
            <span className="italic">listening</span> to{" "}
            <span className="text-lavender-deep">shipping</span>.
          </h2>

          <div className="mt-16 relative">
            <svg
              className="hidden md:block absolute inset-x-0 top-12 w-full text-lavender/40"
              height="60"
              viewBox="0 0 1000 60"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M0 30 C 150 -10, 300 70, 500 30 S 850 -10, 1000 30"
                fill="none"
                stroke="currentColor"
                strokeDasharray="3 8"
              />
            </svg>

            <ol className="grid gap-6 md:grid-cols-5 relative">
              {process.map((s, i) => (
                <motion.li
                  key={s.t}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="rounded-3xl border border-border bg-card/80 p-6 backdrop-blur hover-lift"
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl text-sm text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--lavender), var(--lavender-deep))",
                    }}
                  >
                    {s.n}
                  </div>
                  <div className="mt-5 font-display text-2xl">{s.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </motion.li>
              ))}
            </ol>
          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-2 items-center">
            <img
              src={education}
              alt="Designer collaborating with team on UX research"
              loading="lazy"
              className="rounded-3xl lavender-glow object-cover w-full aspect-[5/3]"
            />
            <div>
              <h3 className="font-display text-3xl md:text-4xl text-balance">
                Research first. <span className="italic">Always.</span>
              </h3>
              <p className="mt-4 text-muted-foreground text-pretty">
                Assumptions are expensive. Research is cheaper. Every product begins
                with conversations, observations and a relentless effort to understand
                the people we're designing for.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Skills & Expertise">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-tight max-w-2xl text-balance">
              Where <span className="italic">aesthetics</span> meet{" "}
              <span className="text-lavender-deep">behavior</span>.
            </h2>
            <p className="max-w-sm text-muted-foreground">
              A toolkit shaped by research, refined by craft, and held together by
              an editorial sense of taste.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="hover-lift relative overflow-hidden rounded-3xl border border-border bg-card p-7"
              >
                <span
                  className="absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-50 transition-all duration-500 group-hover:scale-125"
                  style={{
                    background:
                      "radial-gradient(closest-side, var(--lavender-light), transparent)",
                  }}
                />
                <div className="relative">
                  <Sparkle className="h-5 w-5 text-lavender-deep" />
                  <h3 className="mt-5 font-display text-2xl">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools */}
          <div className="mt-20">
            <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-10 bg-lavender" />
              Tools of the craft
            </div>
            <div className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <span
                  key={t}
                  className="hover-lift rounded-pill border border-border bg-card px-6 py-3 font-display text-lg"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* MY STORY */}
      <Section id="story" eyebrow="My Story" className="bg-section">
        <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 relative"
          >
            <img
              src={lecture}
              alt="Meghana attending a UX community lecture at the University of New Haven"
              loading="lazy"
              className="rounded-3xl lavender-glow object-cover w-full aspect-[4/3]"
            />
            <img
              src={designWall}
              alt="Designers studying a typography wall of editorial posters"
              loading="lazy"
              className="absolute -bottom-10 -right-6 w-2/3 rounded-3xl shadow-2xl object-cover aspect-[3/4] hidden md:block"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-6"
          >
            <h2 className="font-display text-[clamp(2rem,5vw,3.8rem)] leading-tight text-balance">
              From <span className="italic">Public Administration</span> to{" "}
              <span className="text-lavender-deep">people-centered design</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              I started in Public Administration — fascinated by how systems
              shape everyday life. That curiosity carried me into Information
              Science at the University of New Haven, where I found design as
              the most honest way to translate research into things people can
              actually use.
            </p>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Today I work across apps, educational platforms and concept
              systems — sitting between research, engineering and craft.
              I care most about clarity: the kind that comes from listening
              first and decorating last.
            </p>
            <blockquote className="mt-8 rounded-3xl border border-border bg-card/70 p-6 backdrop-blur">
              <p className="font-display italic text-xl text-lavender-deep">
                "Less noise. More clarity."
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Assumptions are expensive. Research is cheaper.
              </p>
            </blockquote>
          </motion.div>
        </div>
      </Section>

      {/* RESUME */}
      <Section id="resume" eyebrow="Resume">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-tight max-w-2xl text-balance">
              A short version of a{" "}
              <span className="italic text-lavender-deep">long curiosity</span>.
            </h2>
            <a
              href="mailto:Meghanareddymadi@gmail.com?subject=Resume%20request"
              data-cursor="hover"
              className="inline-flex items-center gap-3 rounded-pill px-7 py-4 text-sm text-white transition-transform duration-300 hover:-translate-y-0.5 self-start md:self-auto"
              style={{
                background: "linear-gradient(135deg, var(--lavender), var(--lavender-deep))",
                boxShadow: "0 20px 50px -15px color-mix(in oklab, var(--lavender-deep) 70%, transparent)",
              }}
            >
              Request full resume
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7 space-y-6">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Experience
              </div>
              {experience.map((e) => (
                <article
                  key={e.role}
                  className="rounded-3xl border border-border bg-card/70 p-6 backdrop-blur hover-lift"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl">{e.role}</h3>
                    <span className="text-xs uppercase tracking-[0.25em] text-lavender-deep">
                      {e.period}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">{e.org}</div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="md:col-span-5 space-y-6">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Education
              </div>
              <div className="rounded-3xl border border-border bg-card/70 p-6 backdrop-blur">
                <h3 className="font-display text-xl">University of New Haven</h3>
                <p className="text-sm text-muted-foreground">
                  M.S. Information Science · 2024–2025 · GPA 3.67/4
                </p>
              </div>
              <div className="rounded-3xl border border-border bg-card/70 p-6 backdrop-blur">
                <h3 className="font-display text-xl">Osmania University</h3>
                <p className="text-sm text-muted-foreground">
                  B.A. Public Administration · 2018–2021 · GPA 3.36/4

                </p>
              </div>

              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground pt-2">
                Tools
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-pill border border-border bg-card px-4 py-2 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="bg-section">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-border p-8 md:p-16"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--lavender-light) 80%, white), color-mix(in oklab, var(--pink-soft) 60%, white))",
            }}
          >
            <CircleOrbit className="absolute -top-20 -left-20 w-56 md:w-72 text-lavender/40" />
            <CircleOrbit className="absolute -bottom-24 -right-16 w-64 md:w-80 text-lavender-deep/30" />
            <Sparkle className="absolute top-6 right-6 md:top-10 md:right-12 h-5 w-5 md:h-6 md:w-6 text-lavender-deep animate-float-slow" />
            <Leaf className="absolute bottom-6 left-6 md:bottom-10 md:left-10 w-12 md:w-16 text-lavender-deep/60 animate-sway" />

            <div className="relative grid gap-10 md:grid-cols-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
                className="md:col-span-5 order-2 md:order-1 mx-auto w-full max-w-sm"
                aria-hidden
              >
                <CollabScene />
              </motion.div>

              <div className="md:col-span-7 order-1 md:order-2 text-center md:text-left">
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Let's collaborate
                </div>
                <h2 className="mt-5 font-display text-[clamp(2rem,5.2vw,4rem)] leading-[1.05] text-balance">
                  Let's create something{" "}
                  <span className="italic text-lavender-deep">amazing</span> together.
                </h2>
                <p className="mt-5 max-w-xl mx-auto md:mx-0 text-base md:text-lg text-muted-foreground text-pretty">
                  Whether it's a product redesign, a brand-new app, or a quiet
                  refinement — I'd love to hear what you're working on.
                </p>
                <a
                  href="mailto:Meghanareddymadi@gmail.com"
                  data-cursor="hover"
                  className="mt-8 inline-flex items-center gap-3 rounded-pill px-8 py-4 text-base text-white transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(135deg, var(--lavender), var(--lavender-deep))",
                    boxShadow: "0 25px 60px -20px color-mix(in oklab, var(--lavender-deep) 70%, transparent)",
                  }}
                >
                  Say hello
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            {/* Contact tiles — email wider for uniformity */}
            <div className="relative mt-12 grid gap-4 md:grid-cols-4 text-sm">
              <a
                href="mailto:Meghanareddymadi@gmail.com"
                className="md:col-span-2 group rounded-2xl border border-border bg-card/80 p-5 backdrop-blur hover-lift flex items-center gap-4 min-w-0"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lavender-light text-lavender-deep">✉</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Email</span>
                  <span className="mt-1 block font-display text-base md:text-lg truncate group-hover:text-lavender-deep">
                    Meghanareddymadi@gmail.com
                  </span>
                </span>
              </a>
              <a
                href="tel:+12035899609"
                className="group rounded-2xl border border-border bg-card/80 p-5 backdrop-blur hover-lift flex items-center gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lavender-light text-lavender-deep">☏</span>
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Phone</span>
                  <span className="mt-1 block font-display text-base md:text-lg group-hover:text-lavender-deep">
                    +1 (203) 589-9609
                  </span>
                </span>
              </a>
              <div className="rounded-2xl border border-border bg-card/80 p-5 backdrop-blur flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lavender-light text-lavender-deep">◎</span>
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Location</span>
                  <span className="mt-1 block font-display text-base md:text-lg">West Haven, CT</span>
                </span>
              </div>
            </div>
          </motion.div>

          <footer className="mt-12 md:mt-16 flex flex-col md:grid md:grid-cols-3 gap-6 items-center text-sm text-muted-foreground text-center md:text-left">
            <div className="font-display italic text-lg text-foreground">
              Meghana<span className="text-lavender-deep">.</span>
              <div className="not-italic mt-1 text-xs text-muted-foreground">
                Less noise. More clarity.
              </div>
              <div className="not-italic text-xs italic text-muted-foreground">
                Assumptions are expensive. Research is cheaper.
              </div>
            </div>
            <div className="text-center text-xs order-3 md:order-2">
              © {new Date().getFullYear()} Meghana Reddy Madi · All rights reserved
            </div>
            <div className="flex justify-center md:justify-end gap-4 order-2 md:order-3">
              <a
                className="hover:text-foreground"
                href="https://www.linkedin.com/in/meghana-reddy-madi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
              <a className="hover:text-foreground" href="mailto:Meghanareddymadi@gmail.com">
                Email ↗
              </a>
              <a className="hover:text-foreground" href="#home">Back to top ↑</a>
            </div>
          </footer>

        </div>
      </Section>
    </main>
  );
}

/* Animated "let's collaborate" scene */
function CollabScene() {
  return (
    <div className="relative aspect-square w-full">
      <div
        className="absolute inset-4 rounded-[42%_58%_46%_54%/55%_45%_55%_45%] blur-2xl"
        style={{
          background:
            "conic-gradient(from 120deg, var(--lavender-light), var(--pink-soft), var(--lavender), var(--lavender-light))",
          opacity: 0.75,
        }}
      />
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full text-lavender-deep/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
      >
        <circle cx="100" cy="100" r="86" fill="none" stroke="currentColor" strokeDasharray="2 8" />
        <circle cx="100" cy="100" r="64" fill="none" stroke="currentColor" strokeDasharray="1 6" opacity="0.6" />
      </motion.svg>

      {/* Floating paper plane — quietly carrying a hello */}
      <motion.div
        initial={{ y: 6, rotate: -8 }}
        animate={{ y: -10, rotate: -2 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 w-[58%] -translate-x-1/2 -translate-y-1/2"
      >
        <svg viewBox="0 0 200 200" className="w-full h-auto" aria-hidden>
          {/* dashed flight path */}
          <motion.path
            d="M 10 170 Q 70 110 110 130 T 195 40"
            fill="none"
            stroke="var(--lavender-deep)"
            strokeOpacity="0.45"
            strokeWidth="1.5"
            strokeDasharray="3 6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
          {/* paper plane body */}
          <g transform="translate(108 70) rotate(-18)">
            <path
              d="M0 30 L80 0 L52 70 L40 44 Z"
              fill="var(--card)"
              stroke="var(--lavender-deep)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M40 44 L80 0 L52 70 Z"
              fill="var(--lavender-light)"
              stroke="var(--lavender-deep)"
              strokeWidth="1.2"
              strokeLinejoin="round"
              opacity="0.85"
            />
            <path
              d="M0 30 L40 44 L52 70"
              fill="none"
              stroke="var(--lavender-deep)"
              strokeWidth="1"
              opacity="0.5"
            />
          </g>
        </svg>
      </motion.div>


      <motion.div
        className="absolute top-4 right-6 text-lavender-deep"
        animate={{ y: [0, -8, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkle className="h-5 w-5" />
      </motion.div>
      <motion.div
        className="absolute bottom-6 left-4 text-lavender"
        animate={{ y: [0, 6, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkle className="h-4 w-4" />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-8"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf className="w-10 text-lavender-deep/70" />
      </motion.div>
    </div>
  );
}
