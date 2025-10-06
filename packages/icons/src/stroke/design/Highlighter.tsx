import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Highlighter: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Highlighter(
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
        d="M9 11 3 17V20H12L15 17M22 12 17.4 16.6C17.026 16.967 16.524 17.172 16 17.172 15.477 17.172 14.974 16.967 14.6 16.6L9.4 11.4C9.034 11.026 8.828 10.524 8.828 10 8.828 9.476 9.034 8.974 9.4 8.6L14 4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Highlighter.displayName = "Highlighter";

Highlighter.metadata = {
  name: "Highlighter",
  category: "stroke/design",
  tags: ["highlighter", "icon"],
  description: "Highlighter icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Highlighter;
