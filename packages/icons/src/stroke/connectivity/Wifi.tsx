import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Wifi: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Wifi(
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
          d="M12 20H12.01M2 8.82C4.75 6.36 8.31 5 12 5 15.69 5 19.25 6.36 22 8.82M5 12.859C6.869 11.027 9.382 10 12 10 14.618 10 17.131 11.027 19 12.859M8.5 16.429C9.435 15.513 10.691 15 12 15 13.309 15 14.565 15.513 15.5 16.429"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Wifi.displayName = "Wifi";

Wifi.metadata = {
  name: "Wifi",
  category: "stroke/connectivity",
  tags: ["wifi", "icon"],
  description: "Wifi icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Wifi;
