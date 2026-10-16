import {
  Activity,
  Anchor,
  Boxes,
  Code2,
  Cloud,
  Database,
  DatabaseZap,
  KeyRound,
  Layers,
  LockKeyhole,
  MousePointer2,
  Network,
  Radio,
  Route,
  Send,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import {
  IconBrandAws,
  IconBrandChrome,
  IconBrandDocker,
  IconBrandGit,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandRust,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";
import { Subheading } from "./subheading";

const iconClassName = "size-4 shrink-0 text-neutral-700";

const categories = [
  {
    name: "Languages",
    description: "Languages and scripting",
    skills: [
      { name: "Rust", icon: <IconBrandRust className={iconClassName} /> },
      {
        name: "TypeScript",
        icon: <IconBrandTypescript className={iconClassName} />,
      },
      {
        name: "JavaScript",
        icon: <IconBrandJavascript className={iconClassName} />,
      },
      { name: "Solidity", icon: <Code2 className={iconClassName} /> },
      { name: "SQL", icon: <Database className={iconClassName} /> },
    ],
  },
  //   {
  //     name: "ZK and crypto",
  //     description: "Primitives I implement, not libraries I call",
  //     skills: [
  //       {
  //         name: "RISC Zero",
  //         icon: (
  //           <span className="flex size-4 items-center justify-center rounded-sm bg-lime-100 font-mono text-[8px] font-semibold text-lime-800">
  //             RZ
  //           </span>
  //         ),
  //       },
  //       {
  //         name: "STARKs",
  //         icon: <LockKeyhole className="size-4 shrink-0 text-orange-400" />,
  //       },
  //       {
  //         name: "ML-KEM-768",
  //         icon: <LockKeyhole className="size-4 shrink-0 text-orange-400" />,
  //       },
  //       {
  //         name: "ChaCha20-Poly1305",
  //         icon: <LockKeyhole className="size-4 shrink-0 text-orange-400" />,
  //       },
  //       {
  //         name: "AES-GCM",
  //         icon: <LockKeyhole className="size-4 shrink-0 text-orange-400" />,
  //       },
  //       {
  //         name: "Fiat-Shamir",
  //         icon: <LockKeyhole className="size-4 shrink-0 text-orange-400" />,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Solana",
  //     description: "Programs, indexing, oracles, on-chain proofs",
  //     skills: [
  //       { name: "Anchor", icon: <Anchor className={iconClassName} /> },
  //       { name: "PDAs", icon: <Layers className={iconClassName} /> },
  //       { name: "SPL Token", icon: <Layers className={iconClassName} /> },
  //       { name: "Geyser gRPC", icon: <Network className={iconClassName} /> },
  //       { name: "Pyth", icon: <Activity className={iconClassName} /> },
  //       {
  //         name: "On-chain verification",
  //         icon: <Layers className={iconClassName} />,
  //       },
  //     ],
  //   },
  {
    name: "Backend",
    description: "APIs, authentication, and background jobs",
    skills: [
      { name: "Node.js", icon: <IconBrandNodejs className={iconClassName} /> },
      { name: "NestJS", icon: <Network className={iconClassName} /> },
      { name: "Express.js", icon: <Server className={iconClassName} /> },
      { name: "REST APIs", icon: <Route className={iconClassName} /> },
      { name: "JWT", icon: <KeyRound className={iconClassName} /> },
      { name: "RBAC", icon: <ShieldCheck className={iconClassName} /> },
      { name: "BullMQ", icon: <Workflow className={iconClassName} /> },
      { name: "WebSockets", icon: <Radio className={iconClassName} /> },
    ],
  },
  {
    name: "Databases & ORM",
    description: "Relational, document, and cache storage",
    skills: [
      { name: "PostgreSQL", icon: <Database className={iconClassName} /> },
      { name: "MongoDB", icon: <IconBrandMongodb className={iconClassName} /> },
      { name: "Redis", icon: <Database className={iconClassName} /> },
      { name: "Drizzle ORM", icon: <DatabaseZap className={iconClassName} /> },
    ],
  },
  {
    name: "DevOps & Cloud",
    description: "Infrastructure, deployment, and CI/CD",
    skills: [
      { name: "Docker", icon: <IconBrandDocker className={iconClassName} /> },
      {
        name: "AWS (EC2, ECR, ECS)",
        icon: <IconBrandAws className={iconClassName} />,
      },
      {
        name: "GitHub Actions (CI/CD)",
        icon: <IconBrandGithub className={iconClassName} />,
      },
      { name: "Nginx", icon: <Cloud className={iconClassName} /> },
    ],
  },
  {
    name: "Tools",
    description: "Tools I use to build and ship",
    skills: [
      { name: "Postman", icon: <Send className={iconClassName} /> },
      { name: "Git", icon: <IconBrandGit className={iconClassName} /> },
      { name: "Cursor", icon: <MousePointer2 className={iconClassName} /> },
    ],
  },
  {
    name: "Frontend",
    description: "Including an extension live on the Chrome Web Store",
    skills: [
      { name: "React", icon: <IconBrandReact className={iconClassName} /> },
      { name: "Next.js", icon: <IconBrandNextjs className={iconClassName} /> },
      {
        name: "Chrome MV3",
        icon: <IconBrandChrome className={iconClassName} />,
      },
      {
        name: "Tailwind",
        icon: <IconBrandTailwind className={iconClassName} />,
      },
    ],
  },
];

export const WhatIBuildWith = () => {
  return (
    <section aria-labelledby="what-i-build-with-heading">
      <Subheading>What I build with</Subheading>
      <div className="mt-8 border-neutral-200">
        {categories.map((category) => (
          <div
            key={category.name}
            className="grid grid-cols-1 gap-y-3 border-b border-neutral-200 py-5 last:border-b-0 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:items-start sm:gap-4"
          >
            <div className="flex flex-wrap items-baseline gap-x-1">
              <h3 className="font-mono text-[10px] leading-4 font-normal text-neutral-600 uppercase">
                {category.name}
              </h3>
              <span className="text-[12px] leading-4 text-neutral-500">·</span>
              <p className="text-[12px] leading-4 font-normal text-neutral-600">
                {category.description}
              </p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="inline-flex h-10 items-center gap-2.5 rounded-full border border-neutral-200 px-3 text-[16px] leading-5 font-normal text-neutral-900"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
