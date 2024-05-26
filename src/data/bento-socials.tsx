import { IBentoItem } from "@/interfaces/bento";
import { FaGithub, FaItchIo, FaLinkedin } from "react-icons/fa";

export const BentoSocials: IBentoItem[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Linkedin",
    icon: <FaLinkedin size={32} />,
    subtitle: "@dangazzaneo",
    description: "linkedin.description",
    color: "#0E76A8",
    link: "https://linkedin.com/in/dangazzaneo",
    buttonTitle: "linkedin.button",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: <FaGithub size={32} />,
    subtitle: "@danielnaoexiste",
    buttonTitle: "github.button",
    description: "github.description",
    color: "#070707",
    link: "https://github.com/danielnaoexiste",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Itch.io",
    icon: <FaItchIo size={32} />,
    subtitle: "@bitsdev",
    buttonTitle: "itch.button",
    description: "itch.description",
    color: "#f26b6b",
    link: "https://bitsdev.itch.io/",
  },
];
