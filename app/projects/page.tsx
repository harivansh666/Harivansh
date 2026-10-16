import type { Metadata } from "next";
import Container from "@/components/container";
import { DottedSeparator } from "@/components/separator";
import { Subheading } from "@/components/subheading";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  Cloud,
  CloudUpload,
  Code2,
  Database,
  DatabaseZap,
  KeyRound,
  LockKeyhole,
  MapPin,
  Server,
  Sparkles,
} from "lucide-react";
import {
  IconBrandAws,
  IconBrandDocker,
  IconBrandGithub,
  IconBrandMongodb,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Projects - Harivansh",
  description: "Backend projects and products built by Harivansh.",
  alternates: {
    canonical: "/projects",
  },
};

type ProjectEntryProps = {
  title: string;
  subtitle?: string;
  date: string;
  technologies: string[];
  highlights: string[];
  href?: string;
  linkLabel?: string;
};

const technologyIconClassName = "size-3.5 shrink-0 text-neutral-600";

const technologyIcons: Record<string, ReactNode> = {
  "Node.js": <IconBrandNodejs className={technologyIconClassName} />,
  TypeScript: <IconBrandTypescript className={technologyIconClassName} />,
  "Drizzle ORM": <DatabaseZap className={technologyIconClassName} />,
  PostgreSQL: <Database className={technologyIconClassName} />,
  Redis: <DatabaseZap className={technologyIconClassName} />,
  Docker: <IconBrandDocker className={technologyIconClassName} />,
  "GitHub Actions": <IconBrandGithub className={technologyIconClassName} />,
  Nginx: <Cloud className={technologyIconClassName} />,
  "Express.js": <Server className={technologyIconClassName} />,
  MongoDB: <IconBrandMongodb className={technologyIconClassName} />,
  "React.js": <IconBrandReact className={technologyIconClassName} />,
  "Clerk Auth": <LockKeyhole className={technologyIconClassName} />,
  AWS: <IconBrandAws className={technologyIconClassName} />,
  Cloudinary: <CloudUpload className={technologyIconClassName} />,
  "Tailwind CSS": <IconBrandTailwind className={technologyIconClassName} />,
  "Google Gemini API": <Sparkles className={technologyIconClassName} />,
  JWT: <KeyRound className={technologyIconClassName} />,
  "Geolocation API": <MapPin className={technologyIconClassName} />,
};

function ProjectEntry({
  title,
  subtitle,
  date,
  technologies,
  highlights,
  href,
  linkLabel,
}: ProjectEntryProps) {
  return (
    <article className="border-border border-b py-6 last:border-b-0">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-foreground text-lg font-medium">
          {href ? (
            <Link
              href={href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary inline-flex items-center gap-2"
            >
              {title}
              {linkLabel ? (
                <span className="text-foreground/60 text-xs font-normal">
                  {linkLabel}
                </span>
              ) : null}
            </Link>
          ) : (
            title
          )}
        </h3>
        <p className="text-foreground/60 text-sm">{date}</p>
      </div>
      {subtitle ? (
        <p className="text-foreground/70 mt-1 text-sm">{subtitle}</p>
      ) : null}
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {technologies.map((technology) => (
          <li
            key={technology}
            className="inline-flex h-7 items-center gap-1.5 rounded-full border border-neutral-200 px-2 text-xs leading-4 text-neutral-700"
          >
            {technologyIcons[technology] ?? (
              <Code2 className={technologyIconClassName} />
            )}
            {technology}
          </li>
        ))}
      </ul>
      <ul className="text-foreground/70 mt-4 list-disc space-y-2 pl-5 text-sm leading-6">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <Container className="min-h-screen pt-8">
      <h1 className="text-foreground text-2xl font-medium">Projects</h1>
      <div aria-label="Profile links" className="mt-3 flex gap-4 text-sm">
        <Link
          href="https://github.com/harivansh666"
          target="_blank"
          rel="noreferrer"
          className="text-foreground/70 hover:text-primary"
        >
          GitHub Profile
        </Link>
        <Link
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="text-foreground/70 hover:text-primary"
        >
          LinkedIn
        </Link>
      </div>
      <DottedSeparator className="my-8" />

      <section aria-label="Company project">
        <Subheading className="text-foreground/70">Company Project</Subheading>
        <div className="mt-2">
          <ProjectEntry
            title="Nabuz Technologies (Alliance Jobs)"
            subtitle="Backend Developer · Mohali, Punjab"
            date="Jan 2026 – Present"
            technologies={[
              "Node.js",
              "TypeScript",
              "Drizzle ORM",
              "PostgreSQL",
              "Redis",
              "Docker",
              "GitHub Actions",
              "Nginx",
            ]}
            highlights={[
              "Built an HR and onboarding platform in a modular Node.js/TypeScript architecture, with dedicated employer, employee, job, onboarding, referral, rating, and salary-slip modules.",
              "Designed a recommended-matching engine for employee–job matching using skill-priority sorting to improve relevance.",
              "Added Redis caching to high-traffic endpoints to reduce database load, and introduced cursor-based pagination across services.",
              "Implemented OTP authentication, RBAC access control, job and company ratings, and spam-resistant popular-search tracking.",
              "Shipped PostgreSQL full-text search and FCM push notifications with database-backed persistence.",
              "Built WhatsApp conversational workflows with LangGraph and a bulk-onboarding pipeline that imports Excel uploads into the database.",
              "Owned Docker and GitHub Actions CI/CD deployments with Nginx and SSL on a VPS; resolved a production Drizzle ORM schema mismatch causing a 500 error.",
            ]}
          />
        </div>
      </section>

      <DottedSeparator className="my-8" />

      <section aria-label="Personal projects">
        <Subheading className="text-foreground/70">
          Personal Projects
        </Subheading>
        <div className="mt-2">
          <ProjectEntry
            title="HattiOnline.in — Quick Commerce Platform"
            date="Oct 2025"
            href="https://hattionline.in"
            linkLabel="Live"
            technologies={[
              "Node.js",
              "Express.js",
              "MongoDB",
              "React.js",
              "Clerk Auth",
              "AWS",
              "Cloudinary",
              "Tailwind CSS",
            ]}
            highlights={[
              "Built the backend for a full-stack quick-commerce platform with an admin panel for banner, product, and site-data management.",
              "Secured APIs with JWT and Clerk authentication, configured CORS, and integrated Cloudinary image storage through Multer uploads.",
              "Deployed and load-tested on AWS for performance and scalability, following a modular service architecture.",
            ]}
          />
          <ProjectEntry
            title="AI Code Reviewer"
            date="Feb 2025"
            technologies={[
              "Node.js",
              "Express.js",
              "React.js",
              "MongoDB",
              "Google Gemini API",
            ]}
            highlights={[
              "Built a MERN backend service that analyzes submitted code with the Gemini API to detect errors and suggest improvements.",
              "Optimized response handling, reducing average response time by about 30% under repeated review requests.",
            ]}
          />
          <ProjectEntry
            title="Vibely — Real-time Matching App"
            date="Mar 2025"
            technologies={[
              "Node.js",
              "Express.js",
              "MongoDB",
              "JWT",
              "Gemini API",
              "Geolocation API",
            ]}
            highlights={[
              "Implemented JWT-based authentication and session handling for user registration and login flows.",
              "Built location-aware matching with swipe-based preference storage and Gemini-generated profile suggestions.",
            ]}
          />
        </div>
      </section>
    </Container>
  );
}
