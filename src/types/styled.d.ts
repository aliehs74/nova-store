import "styled-components";
import type theme from "@/shared/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof theme.colors;
    space: typeof theme.space;
    radius: typeof theme.radius;
    contentWidth: typeof theme.contentWidth;
    shadow: typeof theme.shadow;
    breakpoints: typeof theme.breakpoints;
  }
}
