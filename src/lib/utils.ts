import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "header1",
        "header3",
        "title1",
        "title2",
        "title3",
        "title4",
        "title5",
        "supporting1",
        "supporting1-medium",
        "supporting2",
        "supporting2-medium",
        "body1",
        "body1-bold",
        "body2",
        "body3",
        "body3-bold",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
