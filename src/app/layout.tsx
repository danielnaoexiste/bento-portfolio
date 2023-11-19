import { ReactNode } from "react";
import "./globals.css";

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return children;
}
