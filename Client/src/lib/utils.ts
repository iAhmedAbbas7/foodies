// <== SHADCN-UI UTILS ==>
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

// <== UTILITY FUNCTION TO MERGE CLASSNAMES ==>
export function cn(...inputs: ClassValue[]) {
  // MERGE CLASSNAMES USING TAILWIND-MERGE
  return twMerge(clsx(inputs));
}
