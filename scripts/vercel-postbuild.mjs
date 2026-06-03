// Rearrange Nitro's vercel-preset output (forced into dist/ by the Lovable
// vite wrapper) into the .vercel/output Build Output API layout that Vercel
// expects. Without this, Vercel serves nothing and every route 404s.
import { existsSync, mkdirSync, cpSync, rmSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const out = join(root, ".vercel", "output");
const fnDir = join(out, "functions", "__server.func");
const staticDir = join(out, "static");

if (!existsSync(dist)) {
  console.error("[vercel-postbuild] dist/ missing — did the build run?");
  process.exit(1);
}

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
mkdirSync(fnDir, { recursive: true });

// config.json — describe routes
cpSync(join(dist, "config.json"), join(out, "config.json"));

// static assets (client) -> .vercel/output/static
cpSync(join(dist, "client"), staticDir, { recursive: true });

// server bundle -> serverless function
cpSync(join(dist, "server"), fnDir, { recursive: true });

// Node.js serverless function descriptor
writeFileSync(
  join(fnDir, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs20.x",
      handler: "index.mjs",
      launcherType: "Nodejs",
      shouldAddHelpers: false,
      shouldAddSourcemapSupport: false,
      supportsResponseStreaming: true,
    },
    null,
    2,
  ),
);

console.log("[vercel-postbuild] wrote .vercel/output (functions/__server.func + static)");
