import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowLeftFromLine: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowLeftFromLine(
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
        d="M9 6 3 12 9 18M3 12H17M21 19V5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowLeftFromLine.displayName = "ArrowLeftFromLine";

ArrowLeftFromLine.metadata = {
  name: "ArrowLeftFromLine",
  category: "stroke/arrows",
  tags: ["arrow", "left", "from", "line", "icon"],
  description: "ArrowLeftFromLine icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowLeftFromLine;
