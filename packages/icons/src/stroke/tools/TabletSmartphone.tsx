import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface TabletSmartphoneProps extends IconProps {
  type?: "stroke";
}

export const TabletSmartphone: IconComponent<TabletSmartphoneProps> =
  React.forwardRef<SVGSVGElement, TabletSmartphoneProps>(
    function TabletSmartphone(
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
              d="M11 8H5C3.89543 8 3 8.89543 3 10V20C3 21.1046 3.89543 22 5 22H11C12.1046 22 13 21.1046 13 20V10C13 8.89543 12.1046 8 11 8Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 4C5 3.47 5.211 2.961 5.586 2.586 5.961 2.211 6.47 2 7 2H19C19.53 2 20.039 2.211 20.414 2.586 20.789 2.961 21 3.47 21 4V20C21 20.53 20.789 21.039 20.414 21.414 20.039 21.789 19.53 22 19 22H16.6M8 18H8.01"
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
              d="M11 8H5C3.89543 8 3 8.89543 3 10V20C3 21.1046 3.89543 22 5 22H11C12.1046 22 13 21.1046 13 20V10C13 8.89543 12.1046 8 11 8Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 4C5 3.47 5.211 2.961 5.586 2.586 5.961 2.211 6.47 2 7 2H19C19.53 2 20.039 2.211 20.414 2.586 20.789 2.961 21 3.47 21 4V20C21 20.53 20.789 21.039 20.414 21.414 20.039 21.789 19.53 22 19 22H16.6M8 18H8.01"
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
              d="M11 8H5C3.89543 8 3 8.89543 3 10V20C3 21.1046 3.89543 22 5 22H11C12.1046 22 13 21.1046 13 20V10C13 8.89543 12.1046 8 11 8Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 4C5 3.47 5.211 2.961 5.586 2.586 5.961 2.211 6.47 2 7 2H19C19.53 2 20.039 2.211 20.414 2.586 20.789 2.961 21 3.47 21 4V20C21 20.53 20.789 21.039 20.414 21.414 20.039 21.789 19.53 22 19 22H16.6M8 18H8.01"
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
              d="M11 8H5C3.89543 8 3 8.89543 3 10V20C3 21.1046 3.89543 22 5 22H11C12.1046 22 13 21.1046 13 20V10C13 8.89543 12.1046 8 11 8Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 4C5 3.47 5.211 2.961 5.586 2.586 5.961 2.211 6.47 2 7 2H19C19.53 2 20.039 2.211 20.414 2.586 20.789 2.961 21 3.47 21 4V20C21 20.53 20.789 21.039 20.414 21.414 20.039 21.789 19.53 22 19 22H16.6M8 18H8.01"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`TabletSmartphone doesn't support ${type}`);
      return null;
    },
  );

TabletSmartphone.displayName = "TabletSmartphone";

TabletSmartphone.metadata = {
  name: "TabletSmartphone",
  category: "stroke/tools",
  tags: ["tablet", "smartphone", "icon"],
  description: "TabletSmartphone icon from stroke/tools category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TabletSmartphone;
