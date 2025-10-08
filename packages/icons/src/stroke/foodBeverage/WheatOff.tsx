import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const WheatOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function WheatOff(
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
        d="M2 22 12 12M16 8 14.83 9.17M3.47 12.53 5 11 6.53 12.53C7.183 13.186 7.55 14.074 7.55 15 7.55 15.926 7.183 16.814 6.53 17.47L5 19 3.47 17.47C2.817 16.814 2.45 15.926 2.45 15 2.45 14.074 2.817 13.186 3.47 12.53ZM8 8 7.47 8.53C6.817 9.186 6.45 10.074 6.45 11 6.45 11.926 6.817 12.814 7.47 13.47L9 15 10.53 13.47C11.08 12.92 11.41 12.22 11.51 11.5M10.91 5.26C11.06 5 11.25 4.75 11.47 4.53L13 3 14.53 4.53C15.131 5.134 15.491 5.937 15.543 6.787 15.594 7.638 15.334 8.478 14.81 9.15M20 2H22V4C22 5.061 21.579 6.078 20.828 6.828 20.078 7.579 19.061 8 18 8H16V6C16 4.939 16.421 3.922 17.172 3.172 17.922 2.421 18.939 2 20 2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.47 17.47 13 19 11.47 20.53C10.814 21.183 9.926 21.55 9 21.55 8.074 21.55 7.186 21.183 6.53 20.53L5 19 6.53 17.47C7.186 16.817 8.074 16.45 9 16.45 9.926 16.45 10.814 16.817 11.47 17.47ZM16 16 15.47 16.53C14.814 17.183 13.926 17.55 13 17.55 12.074 17.55 11.186 17.183 10.53 16.53L9 15 10.53 13.47C11.064 12.94 11.755 12.596 12.5 12.49M18.74 13.09C19 12.94 19.25 12.75 19.47 12.53L21 11 19.47 9.47C18.866 8.869 18.063 8.509 17.213 8.457 16.362 8.406 15.522 8.666 14.85 9.19M2 2 22 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

WheatOff.displayName = "WheatOff";

WheatOff.metadata = {
  name: "WheatOff",
  category: "stroke/foodBeverage",
  tags: ["wheat", "off", "icon"],
  description: "WheatOff icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default WheatOff;
