import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Ambulance: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Ambulance(
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
        d="M10 10H6M14 18V6C14 5.47 13.789 4.961 13.414 4.586 13.039 4.211 12.53 4 12 4H4C3.47 4 2.961 4.211 2.586 4.586 2.211 4.961 2 5.47 2 6V17C2 17.265 2.105 17.52 2.293 17.707 2.48 17.895 2.735 18 3 18H5M19 18H21C21.265 18 21.52 17.895 21.707 17.707 21.895 17.52 22 17.265 22 17V13.72C22 13.51 21.934 13.306 21.811 13.136 21.688 12.966 21.515 12.838 21.316 12.772L19.393 12.131C19.268 12.089 19.153 12.024 19.054 11.938 18.955 11.851 18.874 11.747 18.815 11.629L17.276 8.553C17.193 8.387 17.065 8.247 16.908 8.15 16.75 8.052 16.568 8 16.382 8H14M8 8V12M9 18H15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 20C18.105 20 19 19.105 19 18 19 16.895 18.105 16 17 16 15.895 16 15 16.895 15 18 15 19.105 15.895 20 17 20ZM7 20C8.105 20 9 19.105 9 18 9 16.895 8.105 16 7 16 5.895 16 5 16.895 5 18 5 19.105 5.895 20 7 20Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Ambulance.displayName = "Ambulance";

Ambulance.metadata = {
  name: "Ambulance",
  category: "stroke/medical",
  tags: ["ambulance", "icon"],
  description: "Ambulance icon from stroke/medical category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ambulance;
