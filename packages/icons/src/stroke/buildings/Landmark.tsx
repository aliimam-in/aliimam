import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Landmark: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Landmark(
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
        d="M10 18V11M11.12 2.198C11.394 2.065 11.696 1.996 12.001 1.997 12.306 1.998 12.607 2.069 12.88 2.204L20.746 6.051C21.222 6.284 21.056 7 20.526 7H3.474C2.944 7 2.779 6.284 3.254 6.051L11.12 2.198ZM14 18V11M18 18V11M3 22H21M6 18V11"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Landmark.displayName = "Landmark";

Landmark.metadata = {
  name: "Landmark",
  category: "stroke/buildings",
  tags: ["landmark", "icon"],
  description: "Landmark icon from stroke/buildings category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Landmark;
