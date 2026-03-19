import type { SVGProps } from "react";

export type CustomIconProps = Omit<SVGProps<SVGSVGElement>, "width" | "height" | "fill"> & {
  size?: number | string;
  color?: string;
};
