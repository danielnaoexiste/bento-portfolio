import { ReactNode } from "react";

export type BentoItemLayout = "1x2" | "2x2" | "2x4" | "responsive";
export type BentoItemType = "social" | "project" | "game" | "skills";

interface IBentoActionItem {
  link: string;
  text?: string;
}

export interface IBentoItem {
  layout: BentoItemLayout;
  type: BentoItemType;
  title: string;
  icon?: ReactNode;
  color?: string;
  subtitle?: string;
  description?: string;
  link?: string;
  buttonTitle?: string;
  actions?: IBentoActionItem[];
}
