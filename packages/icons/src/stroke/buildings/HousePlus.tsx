import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const HousePlus: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function HousePlus(
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
        d="M12.35 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V9.99999C2.99976 9.70864 3.06318 9.42076 3.18582 9.15648C3.30846 8.8922 3.48736 8.65791 3.71 8.46999L10.71 2.46999C11.0708 2.16542 11.5278 1.99835 12 1.99835C12.4722 1.99835 12.9292 2.16542 13.29 2.46999L20.29 8.46999C20.5126 8.65791 20.6915 8.8922 20.8142 9.15648C20.9368 9.42076 21.0002 9.70864 21 9.99999V12.35"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.8 12.4C14.707 12.276 14.586 12.175 14.447 12.106 14.308 12.036 14.155 12 14 12H10C9.735 12 9.48 12.105 9.293 12.293 9.105 12.48 9 12.735 9 13V21M15 18H21M18 15V21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

HousePlus.displayName = "HousePlus";

HousePlus.metadata = {
  name: "HousePlus",
  category: "stroke/buildings",
  tags: ["house", "plus", "icon"],
  description: "HousePlus icon from stroke/buildings category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default HousePlus;
