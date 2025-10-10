import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const HardHat: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function HardHat(
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
        d="M10 10V5C10 4.735 10.105 4.48 10.293 4.293 10.48 4.105 10.735 4 11 4H13C13.265 4 13.52 4.105 13.707 4.293 13.895 4.48 14 4.735 14 5V10M14 6C15.591 6 17.117 6.632 18.243 7.757 19.368 8.883 20 10.409 20 12V15M4 15V12C4 10.409 4.632 8.883 5.757 7.757 6.883 6.632 8.409 6 10 6M21 15H3C2.448 15 2 15.448 2 16V18C2 18.552 2.448 19 3 19H21C21.552 19 22 18.552 22 18V16C22 15.448 21.552 15 21 15Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

HardHat.displayName = "HardHat";

HardHat.metadata = {
  name: "HardHat",
  category: "stroke/tools",
  tags: ["hard", "hat", "icon"],
  description: "HardHat icon from stroke/tools category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default HardHat;
