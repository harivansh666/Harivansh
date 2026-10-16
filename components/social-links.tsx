import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandX,
} from "@tabler/icons-react";
import { Mail } from "lucide-react";

const links = [
  {
    name: "GitHub",
    href: "https://github.com/harivansh666",
    icon: <IconBrandGithub className="size-4" />,
  },
  {
    name: "X",
    href: "https://x.com/harivansh666",
    icon: <IconBrandX className="size-4" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/harivansh666/",
    icon: <IconBrandLinkedin className="size-4" />,
  },
  {
    name: "Telegram",
    href: "https://t.me/harivansh666",
    icon: <IconBrandTelegram className="size-4" />,
  },
  {
    name: "Email",
    href: "mailto:vanshh399@gmail.com",
    icon: <Mail className="size-4" />,
  },
];

export const SocialLinks = () => {
  return (
    <nav
      aria-label="Social links"
      className="mt-4 flex flex-wrap justify-center gap-3 pb-10"
    >
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target={link.name === "Email" ? undefined : "_blank"}
          rel={link.name === "Email" ? undefined : "noreferrer"}
          className="inline-flex h-10 items-center gap-2.5 rounded-full border border-neutral-200 px-4 text-[16px] leading-5 font-normal text-neutral-900 transition-colors hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
        >
          {link.icon}
          <span>{link.name}</span>
        </a>
      ))}
    </nav>
  );
};
