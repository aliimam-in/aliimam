import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowsUpFromLine: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowsUpFromLine(
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
        d="M4 6 7 3 10 6M7 17V3M14 6 17 3 20 6M17 17V3M4 21H20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowsUpFromLine.displayName = "ArrowsUpFromLine";

ArrowsUpFromLine.metadata = {
  name: "ArrowsUpFromLine",
  category: "stroke/arrows",
  tags: ["arrows", "up", "from", "line", "icon"],
  description: "ArrowsUpFromLine icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowsUpFromLine;
