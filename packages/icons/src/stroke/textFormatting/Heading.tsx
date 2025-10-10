import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Heading: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Heading(
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
        d="M6 12H18M6 20V4M18 20V4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Heading.displayName = "Heading";

Heading.metadata = {
  name: "Heading",
  category: "stroke/textFormatting",
  tags: ["heading", "icon"],
  description: "Heading icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Heading;
