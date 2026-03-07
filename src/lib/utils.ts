import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Prepend the GitHub Pages basePath to any public/ asset path. */
export const bp = (path: string) => `/algarvesimracing-web${path}`;
