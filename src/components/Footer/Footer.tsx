import { ThemeToggle } from "../ThemeToggle";
import { LanguageToggle } from "../LanguageToggle";
import { socials } from "@/data/footer-socials";

export const Footer = () => (
  <footer className="flex items-center justify-center w-full pt-6 border-t border-y-base-content">
    <div className="container flex items-center justify-between">
      <div className="flex gap-4">
        {socials.map((social) => (
          <a
            aria-label={social.name}
            key={social.name}
            data-tip={social.name}
            target="_blank"
            href={social.url}
            className="tooltip text-base-content transition-all hover:scale-105 hover:opacity-75"
            rel="noreferrer"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <div className="flex gap-4">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </div>
  </footer>
);
