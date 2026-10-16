import type { Metadata } from "next";
import Container from "@/components/container";
import { Header } from "@/components/header";
import { DottedSeparator } from "@/components/separator";
// import { Companies } from "@/components/companies";
import { WorkWithMe } from "@/components/work-with-me";
import { Work } from "@/components/work";
import { WorkHistory } from "@/components/work-history";
import { WhatIBuildWith } from "@/components/what-i-build-with";
import { SocialLinks } from "@/components/social-links";

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
      <WorkHistory />
      <DottedSeparator className="my-10" />
      <WorkWithMe />
      <DottedSeparator className="my-10" />
      <WhatIBuildWith />
      <DottedSeparator className="my-10" />
      <SocialLinks />
      <DottedSeparator className="my-10" />
    </Container>
  );
}
