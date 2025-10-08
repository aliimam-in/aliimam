import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MonitorSmartphoneProps extends IconProps {
  type?: "stroke";
}

export const MonitorSmartphone: IconComponent<MonitorSmartphoneProps> =
  React.forwardRef<SVGSVGElement, MonitorSmartphoneProps>(
    function MonitorSmartphone(
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
        type = "stroke",
        ...props
      },
      forwardedRef,
    ) {
      if (type === "stroke") {
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
              d="M18 8V6C18 5.47 17.789 4.961 17.414 4.586 17.039 4.211 16.53 4 16 4H4C3.47 4 2.961 4.211 2.586 4.586 2.211 4.961 2 5.47 2 6V13C2 13.53 2.211 14.039 2.586 14.414 2.961 14.789 3.47 15 4 15H12M10 19V15.04 18.19M7 19H12M20 12H18C16.895 12 16 12.895 16 14V20C16 21.105 16.895 22 18 22H20C21.105 22 22 21.105 22 20V14C22 12.895 21.105 12 20 12Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      if (type === "stroke") {
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
              d="M18 8V6C18 5.47 17.789 4.961 17.414 4.586 17.039 4.211 16.53 4 16 4H4C3.47 4 2.961 4.211 2.586 4.586 2.211 4.961 2 5.47 2 6V13C2 13.53 2.211 14.039 2.586 14.414 2.961 14.789 3.47 15 4 15H12M10 19V15.04 18.19M7 19H12M20 12H18C16.895 12 16 12.895 16 14V20C16 21.105 16.895 22 18 22H20C21.105 22 22 21.105 22 20V14C22 12.895 21.105 12 20 12Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`MonitorSmartphone doesn't support ${type}`);
      return null;
    },
  );

MonitorSmartphone.displayName = "MonitorSmartphone";

MonitorSmartphone.metadata = {
  name: "MonitorSmartphone",
  category: "stroke/devices",
  tags: ["monitor", "smartphone", "icon"],
  description: "MonitorSmartphone icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MonitorSmartphone;
