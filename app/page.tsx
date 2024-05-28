import type { Metadata } from "next";
import { fetchMetadata } from "frames.js/next";
import { DebugLink } from "./components/DebugLink";
import { appURL } from "./utils";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Frames.js Multi protocol Example",
    other: {
      ...(await fetchMetadata(new URL("/frames", appURL()))),
    },
  };
}

export default async function Home() {
  return (
    <div>
      Frames.js Multi protocol example <DebugLink />
    </div>
  );
}
