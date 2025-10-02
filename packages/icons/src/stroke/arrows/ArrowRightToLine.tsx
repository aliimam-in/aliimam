import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowRightToLine: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowRightToLine(
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
        d="M17 12H3M11 18 17 12 11 6M21 5V19"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowRightToLine.displayName = "ArrowRightToLine";

ArrowRightToLine.metadata = {
  name: "ArrowRightToLine",
  category: "stroke/arrows",
  tags: ["arrow", "right", "to", "line", "icon"],
  description: "ArrowRightToLine icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowRightToLine;
