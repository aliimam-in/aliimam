import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Blocks: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Blocks(
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
          d="M10 22V7C10 6.735 9.895 6.48 9.707 6.293 9.52 6.105 9.265 6 9 6H4C3.47 6 2.961 6.211 2.586 6.586 2.211 6.961 2 7.47 2 8V20C2 20.53 2.211 21.039 2.586 21.414 2.961 21.789 3.47 22 4 22H16C16.53 22 17.039 21.789 17.414 21.414 17.789 21.039 18 20.53 18 20V15C18 14.735 17.895 14.48 17.707 14.293 17.52 14.105 17.265 14 17 14H2M21 2H15C14.448 2 14 2.448 14 3V9C14 9.552 14.448 10 15 10H21C21.552 10 22 9.552 22 9V3C22 2.448 21.552 2 21 2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Blocks.displayName = "Blocks";

Blocks.metadata = {
  name: "Blocks",
  category: "stroke/codingDevelopment",
  tags: ["blocks", "icon"],
  description: "Blocks icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Blocks;
