import type { Metadata } from "next";
import Container from "@/components/container";
import { DottedSeparator } from "@/components/separator";
import { Subheading } from "@/components/subheading";

export const metadata: Metadata = {
  title: "Learning - Harivansh",
  description: "Topics Harivansh is learning about.",
  alternates: {
    canonical: "/learning",
  },
};

const topics = [
  {
    title: "Web3 & Blockchain",
    areas: ["Blockchain fundamentals", "Smart contracts", "Solidity"],
  },
  {
    title: "Agentic AI",
    areas: ["AI agents", "Tool calling", "LangGraph"],
  },
];

export default function LearningPage() {
  return (
    <Container className="min-h-screen pt-8">
      <h1 className="text-foreground text-2xl font-medium">Learning</h1>
      <DottedSeparator className="my-8" />

      <section>
        <Subheading>Currently Exploring</Subheading>
        <div className="mt-2">
          {topics.map((topic) => (
            <article
              key={topic.title}
              className="border-border border-b py-5 last:border-b-0"
            >
              <h2 className="text-foreground font-medium">{topic.title}</h2>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {topic.areas.map((area) => (
                  <li
                    key={area}
                    className="inline-flex h-7 items-center rounded-full border border-neutral-200 px-2 text-xs leading-4 text-neutral-700"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
}
