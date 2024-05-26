import { IBentoItem } from "@/interfaces/bento";
import { BentoGames } from "./bento-games";
import { BentoProjects } from "./bento-projects";
import { BentoSocials } from "./bento-socials";

export const BentoItems: IBentoItem[] = [
  ...BentoSocials,
  ...BentoProjects,
  ...BentoGames,
];
