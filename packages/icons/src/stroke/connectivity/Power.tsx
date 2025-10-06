import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Power: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Power(
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
          d="M12 2V12M18.4 6.6C19.657 7.857 20.513 9.458 20.861 11.201 21.209 12.944 21.033 14.752 20.355 16.395 19.677 18.038 18.528 19.444 17.052 20.435 15.577 21.425 13.841 21.957 12.063 21.963 10.286 21.968 8.546 21.447 7.064 20.466 5.583 19.484 4.425 18.086 3.737 16.447 3.049 14.808 2.861 13.002 3.198 11.257 3.535 9.511 4.381 7.905 5.63 6.64"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Power.displayName = "Power";

Power.metadata = {
  name: "Power",
  category: "stroke/connectivity",
  tags: ["power", "icon"],
  description: "Power icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Power;
