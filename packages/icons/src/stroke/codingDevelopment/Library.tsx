import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Library: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Library(
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
        d="M16 6 20 20M12 6V20M8 8V20M4 4V20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Library.displayName = "Library";

Library.metadata = {
  name: "Library",
  category: "stroke/codingDevelopment",
  tags: ["library", "icon"],
  description: "Library icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Library;
