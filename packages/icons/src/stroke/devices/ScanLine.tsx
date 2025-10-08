import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ScanLine: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ScanLine(
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
        d="M3 7V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H7M17 3H19C19.53 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5V7M21 17V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H17M7 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V17M7 12H17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ScanLine.displayName = "ScanLine";

ScanLine.metadata = {
  name: "ScanLine",
  category: "stroke/devices",
  tags: ["scan", "line", "icon"],
  description: "ScanLine icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ScanLine;
