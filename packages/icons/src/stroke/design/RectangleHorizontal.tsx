import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const RectangleHorizontal: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function RectangleHorizontal(
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
        d="M20 6H4C2.89543 6 2 6.89543 2 8V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V8C22 6.89543 21.1046 6 20 6Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

RectangleHorizontal.displayName = "RectangleHorizontal";

RectangleHorizontal.metadata = {
  name: "RectangleHorizontal",
  category: "stroke/design",
  tags: ["rectangle", "horizontal", "icon"],
  description: "RectangleHorizontal icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default RectangleHorizontal;
