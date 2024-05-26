import type { JSXElementConstructor, ReactElement } from "react";
import { FaGithub, FaItchIo, FaLinkedinIn } from "react-icons/fa";

export interface ISocial {
  url?: string;
  name?: string;
  icon?:
    | ReactElement<unknown, string | JSXElementConstructor<unknown>>
    | undefined;
}

export const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dangazzaneo/",
    icon: <FaLinkedinIn size={18} />,
  },
  {
    name: "Github",
    url: "https://github.com/danielnaoexiste",
    icon: <FaGithub size={18} />,
  },
  {
    name: "itch.io",
    url: "https://bitsdev.itch.io",
    icon: <FaItchIo size={18} />,
  },
] as ISocial[];
