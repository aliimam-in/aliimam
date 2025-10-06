import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Brackets: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Brackets(
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
        d="M16 3H19C19.265 3 19.52 3.105 19.707 3.293 19.895 3.48 20 3.735 20 4V20C20 20.265 19.895 20.52 19.707 20.707 19.52 20.895 19.265 21 19 21H16M8 21H5C4.735 21 4.48 20.895 4.293 20.707 4.105 20.52 4 20.265 4 20V4C4 3.735 4.105 3.48 4.293 3.293 4.48 3.105 4.735 3 5 3H8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Brackets.displayName = "Brackets";

Brackets.metadata = {
  name: "Brackets",
  category: "stroke/codingDevelopment",
  tags: ["brackets", "icon"],
  description: "Brackets icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Brackets;
