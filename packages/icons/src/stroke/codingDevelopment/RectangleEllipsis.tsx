import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const RectangleEllipsis: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function RectangleEllipsis(
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
        d="M20 6H4C2.895 6 2 6.895 2 8V16C2 17.105 2.895 18 4 18H20C21.105 18 22 17.105 22 16V8C22 6.895 21.105 6 20 6ZM12 12H12.01M17 12H17.01M7 12H7.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

RectangleEllipsis.displayName = "RectangleEllipsis";

RectangleEllipsis.metadata = {
  name: "RectangleEllipsis",
  category: "stroke/codingDevelopment",
  tags: ["rectangle", "ellipsis", "icon"],
  description: "RectangleEllipsis icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default RectangleEllipsis;
