import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowUpToLine: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowUpToLine(
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
        d="M5 3H19M18 13 12 7 6 13M12 7V21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowUpToLine.displayName = "ArrowUpToLine";

ArrowUpToLine.metadata = {
  name: "ArrowUpToLine",
  category: "stroke/arrows",
  tags: ["arrow", "up", "to", "line", "icon"],
  description: "ArrowUpToLine icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowUpToLine;
