import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Diameter: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Diameter(
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
        d="M19 21C20.105 21 21 20.105 21 19 21 17.895 20.105 17 19 17 17.895 17 17 17.895 17 19 17 20.105 17.895 21 19 21ZM5 7C6.105 7 7 6.105 7 5 7 3.895 6.105 3 5 3 3.895 3 3 3.895 3 5 3 6.105 3.895 7 5 7Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.48 3.66C8.403 2.385 10.708 1.815 13.003 2.045 15.299 2.276 17.444 3.293 19.076 4.924 20.707 6.556 21.724 8.701 21.955 10.997 22.185 13.292 21.615 15.597 20.34 17.52M6.41 6.41 17.59 17.59M3.66 6.48C2.385 8.403 1.815 10.708 2.045 13.003 2.276 15.299 3.293 17.444 4.924 19.076 6.556 20.707 8.701 21.724 10.997 21.955 13.292 22.185 15.597 21.615 17.52 20.34"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Diameter.displayName = "Diameter";

Diameter.metadata = {
  name: "Diameter",
  category: "stroke/design",
  tags: ["diameter", "icon"],
  description: "Diameter icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Diameter;
