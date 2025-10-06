import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Anvil: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Anvil(
    {
      color = "currentColor",
      fill,
      size = 24,
      strokeWidth,
      strokeLinecap,
      strokeLinejoin,
      strokeDasharray,
      opacity,
      className,
      ...props
    },
    forwardedRef,
  ) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M7 10H6C4.939 10 3.922 9.579 3.172 8.828 2.421 8.078 2 7.061 2 6 2 5.735 2.105 5.48 2.293 5.293 2.48 5.105 2.735 5 3 5H7M7 5C7 4.735 7.105 4.48 7.293 4.293 7.48 4.105 7.735 4 8 4H21C21.265 4 21.52 4.105 21.707 4.293 21.895 4.48 22 4.735 22 5 22 6.857 21.263 8.637 19.95 9.95 18.637 11.263 16.857 12 15 12H8C7.735 12 7.48 11.895 7.293 11.707 7.105 11.52 7 11.265 7 11V5ZM9 12V17M15 12V17M5 20C5 19.204 5.316 18.441 5.879 17.879 6.441 17.316 7.204 17 8 17H16C16.796 17 17.559 17.316 18.121 17.879 18.684 18.441 19 19.204 19 20 19 20.265 18.895 20.52 18.707 20.707 18.52 20.895 18.265 21 18 21H6C5.735 21 5.48 20.895 5.293 20.707 5.105 20.52 5 20.265 5 20Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Anvil.displayName = "Anvil";

Anvil.metadata = {
  name: "Anvil",
  category: "stroke/buildings",
  tags: ["anvil", "icon"],
  description: "Anvil icon from stroke/buildings category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Anvil;
