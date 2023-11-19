import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mocha: {
          primary: "#89b4fa",
          secondary: "#f5c2e7",
          accent: "#94e2d5",
          neutral: "#11111b",
          "base-100": "#1e1e2e",
          info: "#74c7ec",
          success: "#a6e3a1",
          warning: "#f9e2af",
          error: "#f38ba8",
        },
        latte: {
          primary: "#1e66f5",
          secondary: "#ea76cb",
          accent: "#179299",
          neutral: "#dce0e8",
          "base-100": "#eff1f5",
          info: "#209fb5",
          success: "#40a02b",
          warning: "#df8e1d",
          error: "#d20f39",
        },
      },
    ],
    darkMode: ["class", '[data-theme="mocha"]'],
  },
};
export default config;
