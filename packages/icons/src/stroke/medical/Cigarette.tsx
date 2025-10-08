import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Cigarette: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Cigarette(
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
        d="M17 12H3C2.735 12 2.48 12.105 2.293 12.293 2.105 12.48 2 12.735 2 13V15C2 15.265 2.105 15.52 2.293 15.707 2.48 15.895 2.735 16 3 16H17M18 8C18 5.5 16 5.5 16 3M21 16C21.265 16 21.52 15.895 21.707 15.707 21.895 15.52 22 15.265 22 15V13C22 12.735 21.895 12.48 21.707 12.293 21.52 12.105 21.265 12 21 12M22 8C22 5.5 20 5.5 20 3M7 12V16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Cigarette.displayName = "Cigarette";

Cigarette.metadata = {
  name: "Cigarette",
  category: "stroke/medical",
  tags: ["cigarette", "icon"],
  description: "Cigarette icon from stroke/medical category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Cigarette;
