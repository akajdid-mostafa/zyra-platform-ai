import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Pin tracing to this app root so a parent yarn.lock / monorepo does not expand the trace (slow or OOM on Vercel).
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
    outputFileTracingRoot: projectRoot,
};

export default nextConfig;
