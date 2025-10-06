import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Framer: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Framer(
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
          d="M5 16V9H19V2H5L19 16H12M5 16L12 23V16M5 16H12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Framer.displayName = "Framer";

Framer.metadata = {
  name: "Framer",
  category: "stroke/design",
  tags: ["framer", "icon"],
  description: "Framer icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Framer;
