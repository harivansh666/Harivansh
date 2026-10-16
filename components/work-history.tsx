import { IconBrandYoutube } from "@tabler/icons-react";
import Image from "next/image";
import { Subheading } from "./subheading";

const projects = [
  {
    period: "Jan 2026 – now",
    name: "Nabuz Technologies",
    role: "Backend Engineer",
    detail:
      "A software development company that builds products and services for clients across the globe.",
    icon: (
      <span className="flex h-9 w-36 items-center rounded-sm bg-neutral-950 px-1.5">
        <Image
          src="/nabuz-logo.png"
          alt="Nabuz Technologies
"
          width={140}
          height={32}
          className="h-8 w-35 object-contain"
        />
      </span>
    ),
    location: "Mohali, India",
  },
  {
    period: "ONGOING",
    name: "YouTube",
    role: "Creator",
    detail: "Design engineering and SaaS",
    icon: (
      <span className="flex size-9 items-center justify-center rounded-md bg-red-600 text-white">
        <IconBrandYoutube className="size-5" />
      </span>
    ),
    location: "Remote",
  },
];

export const WorkHistory = () => {
  return (
    <section aria-label="Current work">
      <Subheading>Where I have worked</Subheading>
      <div className="mt-8 flex flex-col gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="grid grid-cols-1 items-start gap-y-3 sm:grid-cols-[0.8fr_1.5fr_1.2fr_1fr] sm:items-center sm:gap-4"
          >
            <p className="text-foreground/70 font-mono text-xs">
              {project.period}
            </p>
            <div className="flex items-center gap-3">
              {project.icon}
              {project.name !== "NabuzTechnologies" && (
                <p className="text-foreground/70 sm: text-xs ">{project.name}</p>
              )}
            </div>
            <p className="text-foreground/70 text-sm">{project.role}</p>
            <p className="text-foreground/70 text-sm sm:text-right">
              {project.location}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
