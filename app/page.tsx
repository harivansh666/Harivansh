import type { Metadata } from "next";
import Container from "@/components/container";
import { Header } from "@/components/header";
import { DottedSeparator } from "@/components/separator";
import { Companies } from "@/components/companies";
import { WorkWithMe } from "@/components/work-with-me";
import { Work } from "@/components/work";

export const metadata: Metadata = {
  title: "Harivansh",
  description: "Founder, Creator, YouTuber, Shitposter, and a Learner.",
  alternates: {
    canonical: "/",
  },
};


export default async function Home() {
  return (
    <Container>
      <Header />
      <DottedSeparator className="my-10" />
      <Work />
      <DottedSeparator className="my-10" />
      <Companies />
      <DottedSeparator className="my-10" />
      <WorkWithMe />
      <DottedSeparator className="my-10" />
    </Container>
  );
}
