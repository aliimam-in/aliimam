import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CircleOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CircleOff(
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
        d="M2 2 22 22M8.35 2.69C10.161 1.983 12.138 1.819 14.041 2.218 15.943 2.617 17.688 3.561 19.062 4.936 20.436 6.311 21.379 8.057 21.777 9.96 22.174 11.863 22.009 13.84 21.3 15.65M19.08 19.08C18.15 20.01 17.046 20.747 15.832 21.25 14.617 21.754 13.315 22.013 12 22.013 10.685 22.013 9.383 21.754 8.168 21.25 6.953 20.747 5.85 20.01 4.92 19.08 3.99 18.15 3.253 17.046 2.749 15.832 2.246 14.617 1.987 13.315 1.987 12 1.987 10.685 2.246 9.383 2.749 8.168 3.253 6.953 3.99 5.85 4.92 4.92"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CircleOff.displayName = "CircleOff";

CircleOff.metadata = {
  name: "CircleOff",
  category: "stroke/shapes",
  tags: ["circle", "off", "icon"],
  description: "CircleOff icon from stroke/shapes category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CircleOff;
