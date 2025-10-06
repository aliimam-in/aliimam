import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const BrickWallShield: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function BrickWallShield(
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
        d="M12 9V10.258M16 3V8.46M21 9.118V5C21 4.47 20.789 3.961 20.414 3.586 20.039 3.211 19.53 3 19 3H5C4.47 3 3.961 3.211 3.586 3.586 3.211 3.961 3 4.47 3 5V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H10.75"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 17.5C22 19.999 20.25 21.249 18.17 21.974 18.061 22.011 17.943 22.009 17.835 21.969 15.75 21.249 14 19.999 14 17.499V14C14 13.868 14.053 13.741 14.147 13.647 14.241 13.554 14.368 13.501 14.5 13.501 15.5 13.501 16.75 12.901 17.62 12.141 17.727 12.053 17.861 12.005 18 12.005 18.138 12.005 18.273 12.052 18.38 12.14 19.255 12.905 20.5 13.5 21.5 13.5 21.633 13.5 21.76 13.553 21.854 13.646 21.947 13.74 22 13.867 22 14V17.5ZM3 15H10M3 9H15.142M8 15V21M8 3V9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

BrickWallShield.displayName = "BrickWallShield";

BrickWallShield.metadata = {
  name: "BrickWallShield",
  category: "stroke/connectivity",
  tags: ["brick", "wall", "shield", "icon"],
  description: "BrickWallShield icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BrickWallShield;
