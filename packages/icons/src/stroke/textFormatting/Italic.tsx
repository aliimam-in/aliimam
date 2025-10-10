import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Italic: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Italic(
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
          d="M19 4H10M14 20H5M15 4 9 20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Italic.displayName = "Italic";

Italic.metadata = {
  name: "Italic",
  category: "stroke/textFormatting",
  tags: ["italic", "icon"],
  description: "Italic icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Italic;
