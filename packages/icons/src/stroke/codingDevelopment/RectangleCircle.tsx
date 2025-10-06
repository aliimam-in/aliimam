import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const RectangleCircle: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function RectangleCircle(
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
        d="M14 4V20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H14Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 20C18.4183 20 22 16.4183 22 12C22 7.58172 18.4183 4 14 4C9.58172 4 6 7.58172 6 12C6 16.4183 9.58172 20 14 20Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

RectangleCircle.displayName = "RectangleCircle";

RectangleCircle.metadata = {
  name: "RectangleCircle",
  category: "stroke/codingDevelopment",
  tags: ["rectangle", "circle", "icon"],
  description: "RectangleCircle icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default RectangleCircle;
