import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meghana Reddy Madi — UI/UX Designer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Meghana Reddy Madi — a UI/UX designer crafting meaningful, human-centered digital experiences with empathy, research and editorial craft.",
      },
      { property: "og:title", content: "Meghana Reddy Madi — UI/UX Designer" },
      {
        property: "og:description",
        content:
          "Selected work, design process, and writing from Meghana Reddy Madi — UI/UX Designer.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "https://soft-lavender-dream.lovable.app/" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
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
