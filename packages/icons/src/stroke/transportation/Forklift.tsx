import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Forklift: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Forklift(
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
        d="M12 12H5C4.47 12 3.961 12.211 3.586 12.586 3.211 12.961 3 13.47 3 14V19M13 21C14.105 21 15 20.105 15 19 15 17.895 14.105 17 13 17 11.895 17 11 17.895 11 19 11 20.105 11.895 21 13 21Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 21C6.105 21 7 20.105 7 19 7 17.895 6.105 17 5 17 3.895 17 3 17.895 3 19 3 20.105 3.895 21 5 21ZM8 19H11M16 2V19H22M6 12V7C6 5.9 6.9 5 8 5H11L16 10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Forklift.displayName = "Forklift";

Forklift.metadata = {
  name: "Forklift",
  category: "stroke/transportation",
  tags: ["forklift", "icon"],
  description: "Forklift icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Forklift;
