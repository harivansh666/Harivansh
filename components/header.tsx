import React from "react";
import { LinkPreview } from "./link-preview";

export const Header = () => {
  return (
    <div>
      <div className="text-foreground pt-4 text-base">
        I'm a software engineer at heart, tinkering with AI and code almost 90%
        of the time. I'm mostly active on{" "}
        <LinkPreview url="https://x.com/harivansh666">X / Twitter</LinkPreview>{" "}
        where I share everything.
      </div>
      <div className="text-foreground pt-4 text-base">
        When I'm not coding, I usually talk about system design, agentic ai, AI
        Tools{" "}
        <LinkPreview url="https://www.instagram.com/harivansh666">
          Instagram.
        </LinkPreview>
      </div>
      <div className="text-foreground pt-4 text-base">
        I've been building my own component library{" "}
        <LinkPreview url="https://hattionline.in">Hattionline</LinkPreview> for
        the past 1 years. My favourite thing is to update this library everyday
        with new components and features.
      </div>
    </div>
  );
};
