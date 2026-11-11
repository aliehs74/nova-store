import type { TIconProviderProps } from "./index.types";

const IconProvider = ({ iconName, width = 24, height = 28, className, ...props }: TIconProviderProps) => {
  switch (iconName) {
    case "novaBag":
      return (
        <svg width={width} height={height} viewBox="0 0 24 28" aria-hidden="true" focusable="false" {...props} className={className}>
          <path d="M4 8h16l2 18H2L4 8Z" fill="currentColor" />
          <path d="M8 9V6a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
  }
};

export default IconProvider;
