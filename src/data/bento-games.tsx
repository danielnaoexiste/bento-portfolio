import { IBentoItem } from "@/interfaces/bento";
import { ImagePreview } from "@/components/ImagePreview";

export const BentoGames: IBentoItem[] = [
  {
    layout: "2x2",
    type: "game",
    link: "https://bitsdev.itch.io/torrato",
    title: "torrato.title",
    icon: <ImagePreview title="torrato" />,
    description: "torrato.description",
    actions: [
      {
        link: "https://github.com/danielnaoexiste/Torrato",
      },
    ],
  },
  {
    layout: "2x4",
    type: "game",
    link: "https://bitsdev.itch.io/cavescape",
    title: "cavescape.title",
    subtitle: "cavescape.subtitle",
    icon: <ImagePreview title="cavescape" />,
    description: "cavescape.description",
    color: "#070707",
    actions: [
      {
        text: "Godot",
        link: "https://github.com/danielnaoexiste/cavescape",
      },
    ],
  },
  {
    layout: "2x2",
    type: "game",
    title: "awaken.title",
    description: "awaken.description",
    icon: <ImagePreview title="awaken" />,
    actions: [
      {
        link: "https://github.com/danielnaoexiste/Awaken-the-Dev-U",
      },
    ],
  },
  {
    layout: "2x2",
    type: "game",
    link: "https://bitsdev.itch.io/spacial-dog",
    title: "spacial.title",
    description: "spacial.description",
    icon: <ImagePreview title="spacial" />,
  },
];
