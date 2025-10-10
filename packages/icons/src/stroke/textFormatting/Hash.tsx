import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Hash: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Hash(
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
          d="M4 9H20M4 15H20M10 3 8 21M16 3 14 21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Hash.displayName = "Hash";

Hash.metadata = {
  name: "Hash",
  category: "stroke/textFormatting",
  tags: ["hash", "icon"],
  description: "Hash icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Hash;
