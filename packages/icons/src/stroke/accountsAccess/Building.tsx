import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Building: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Building(
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
        d="M12 10H12.01M12 14H12.01M12 6H12.01M16 10H16.01M16 14H16.01M16 6H16.01M8 10H8.01M8 14H8.01M8 6H8.01M9 22V19C9 18.735 9.105 18.48 9.293 18.293 9.48 18.105 9.735 18 10 18H14C14.265 18 14.52 18.105 14.707 18.293 14.895 18.48 15 18.735 15 19V22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Building.displayName = "Building";

Building.metadata = {
  name: "Building",
  category: "stroke/accountsAccess",
  tags: ["building", "icon"],
  description: "Building icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Building;
