import type { SVGProps } from "react";

export type TIconProviderProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  iconName: "novaBag";
};
