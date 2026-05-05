import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Jeffrey Zhang",
  DESCRIPTION: "My personal website.",
  EMAIL: "jeffreyjpizhang@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Home page for my personal website.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Coherent thoughts on topics I encounter at work, on personal projects, or life in general.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "Projects that I work on or find really interesting.",
};

export const SOCIALS: Socials = [
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/jeffrey-zhang-b18b0b280/",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/JeffreyJPZ",
  },
  {
    NAME: "Website",
    HREF: "https://jeffreyjpz.com",
  },
];
