import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const RectangleVertical: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function RectangleVertical(
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
        d="M16 2H8C6.89543 2 6 2.89543 6 4V20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20V4C18 2.89543 17.1046 2 16 2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

RectangleVertical.displayName = "RectangleVertical";

RectangleVertical.metadata = {
  name: "RectangleVertical",
  category: "stroke/design",
  tags: ["rectangle", "vertical", "icon"],
  description: "RectangleVertical icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default RectangleVertical;
