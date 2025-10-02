import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowRightFromLine: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowRightFromLine(
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
        d="M3 5V19M21 12H7M15 18 21 12 15 6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowRightFromLine.displayName = "ArrowRightFromLine";

ArrowRightFromLine.metadata = {
  name: "ArrowRightFromLine",
  category: "stroke/arrows",
  tags: ["arrow", "right", "from", "line", "icon"],
  description: "ArrowRightFromLine icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowRightFromLine;
