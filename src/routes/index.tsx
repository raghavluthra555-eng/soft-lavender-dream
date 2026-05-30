import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meghana Reddy Madi — UI/UX Designer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Meghana Reddy Madi — UI/UX designer crafting calm, research-led digital experiences. Selected work, focus areas, story, resume and contact.",
      },
      { name: "author", content: "Meghana Reddy Madi" },
      {
        name: "keywords",
        content:
          "Meghana Reddy Madi, UI UX Designer, Product Designer, UX Research, Figma, Portfolio, Information Science, University of New Haven",
      },
      { property: "og:title", content: "Meghana Reddy Madi — UI/UX Designer" },
      {
        property: "og:description",
        content:
          "Calm, research-led UI/UX design. Selected work, focus areas, story and resume by Meghana Reddy Madi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://soft-lavender-dream.lovable.app/" },
      { property: "og:site_name", content: "Meghana Reddy Madi — Portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Meghana Reddy Madi — UI/UX Designer" },
      {
        name: "twitter:description",
        content:
          "Calm, research-led UI/UX design — selected work, focus areas, story and resume.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://soft-lavender-dream.lovable.app/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Portfolio,
});
