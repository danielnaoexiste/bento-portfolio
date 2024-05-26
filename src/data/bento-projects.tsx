import { IBentoItem } from "@/interfaces/bento";
import { SiWindows95 } from "react-icons/si";
import { FaCogs } from "react-icons/fa";
import { ImagePreview } from "@/components/ImagePreview";

export const BentoProjects: IBentoItem[] = [
  {
    layout: "1x2",
    type: "project",
    title: "aciei.title",
    subtitle: "aciei.subtitle",
    icon: <ImagePreview title="aciei" />,
    description: "aciei.description",
    link: "https://portal.aciei.com.br/",
    color: "#070707",
  },
  {
    layout: "1x2",
    type: "project",
    title: "training.title",
    subtitle: "training.subtitle",
    icon: <ImagePreview title="training" />,
    description: "training.description",
    link: "https://treinamento.allin.com.br/",
    color: "#070707",
  },
  {
    layout: "2x4",
    type: "project",
    title: "raimundo.title",
    subtitle: "raimundo.subtitle",
    icon: <ImagePreview title="raimundo" />,
    description: "raimundo.description",
    link: "https://raimundo.aiqfome.com/",
    color: "#FFF",
  },
  {
    layout: "responsive",
    type: "skills",
    title: "skills",
  },
  {
    layout: "2x4",
    type: "project",
    title: "froggy.title",
    icon: <ImagePreview title="froggy" />,
    description: "froggy.description",
    link: "https://froggy.dangazzaneo.dev/",
    actions: [
      {
        text: "Bot",
        link: "https://github.com/danielnaoexiste/froggy-bot",
      },
      {
        text: "Front-end",
        link: "https://github.com/danielnaoexiste/froggy-web-ts",
      },
      {
        text: "Back-end",
        link: "https://github.com/danielnaoexiste/froggy-api",
      },
    ],
  },
  {
    layout: "2x2",
    type: "project",
    title: "surigu.title",
    icon: <ImagePreview title="surigu" />,
    description: "surigu.description",
    link: "https://surigu.dangazzaneo.dev/",
    actions: [
      {
        text: "Front-end",
        link: "https://github.com/danielnaoexiste/surigu-ui",
      },
    ],
  },
  {
    layout: "2x4",
    type: "project",
    title: "portfolio95.title",
    icon: <SiWindows95 size={32} />,
    description: "portfolio95.description",
    link: "https://portfolio95.dangazzaneo.dev/",
    color: "#070707",
    actions: [
      {
        text: "Front-end",
        link: "https://github.com/danielnaoexiste/react-portfolio95",
      },
    ],
  },
  {
    layout: "2x2",
    type: "project",
    title: "beeper.title",
    icon: <ImagePreview title="beeper" />,
    description: "beeper.description",
    color: "#070707",
    actions: [
      {
        text: "Front-end",
        link: "https://github.com/danielnaoexiste/beeper-client",
      },
      {
        text: "Back-end",
        link: "https://github.com/danielnaoexiste/beeper-server",
      },
    ],
  },
  {
    layout: "2x2",
    type: "project",
    title: "yeop.title",
    icon: <FaCogs size={32} />,
    description: "yeop.description",
    color: "#070707",
    actions: [
      {
        text: "Front-end",
        link: "https://github.com/danielnaoexiste/yeop-engine",
      },
    ],
  },
];
