import type { Metadata } from "next";
import Container from "@/components/container";
import { DottedSeparator } from "@/components/separator";
import { Subheading } from "@/components/subheading";

export const metadata: Metadata = {
  title: "Learning - Harivansh",
  description: "Learning notes",
  alternates: {
    canonical: "/learning",
  },
};

export default function LearningPage() {
  return (
    <Container className="min-h-screen pt-8">
      <h1 className="text-foreground text-2xl font-medium">Learning</h1>
      <DottedSeparator className="my-8" />

      <section>
        <Subheading>Learning note</Subheading>
        <article className="border-border mt-4 border-t py-5">
          <h2 className="text-foreground font-medium">Topic</h2>
          <p className="text-foreground/60 mt-1 text-sm">Date · Resource</p>
          <div className="mt-5">
            <Subheading>Notes</Subheading>
          </div>
        </article>
      </section>
    </Container>
  );
}
