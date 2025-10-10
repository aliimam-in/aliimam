import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface DoorClosedLockedProps extends IconProps {
  type?: "stroke";
}

export const DoorClosedLocked: IconComponent<DoorClosedLockedProps> =
  React.forwardRef<SVGSVGElement, DoorClosedLockedProps>(
    function DoorClosedLocked(
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
              d="M10 12H10.01M18 9V6C18 5.47 17.789 4.961 17.414 4.586 17.039 4.211 16.53 4 16 4H8C7.47 4 6.961 4.211 6.586 4.586 6.211 4.961 6 5.47 6 6V20M2 20H10M20 17V15C20 14.47 19.789 13.961 19.414 13.586 19.039 13.211 18.53 13 18 13 17.47 13 16.961 13.211 16.586 13.586 16.211 13.961 16 14.47 16 15V17"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 17H15C14.4477 17 14 17.4477 14 18V21C14 21.5523 14.4477 22 15 22H21C21.5523 22 22 21.5523 22 21V18C22 17.4477 21.5523 17 21 17Z"
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
              d="M10 12H10.01M18 9V6C18 5.47 17.789 4.961 17.414 4.586 17.039 4.211 16.53 4 16 4H8C7.47 4 6.961 4.211 6.586 4.586 6.211 4.961 6 5.47 6 6V20M2 20H10M20 17V15C20 14.47 19.789 13.961 19.414 13.586 19.039 13.211 18.53 13 18 13 17.47 13 16.961 13.211 16.586 13.586 16.211 13.961 16 14.47 16 15V17"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 17H15C14.4477 17 14 17.4477 14 18V21C14 21.5523 14.4477 22 15 22H21C21.5523 22 22 21.5523 22 21V18C22 17.4477 21.5523 17 21 17Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`DoorClosedLocked doesn't support ${type}`);
      return null;
    },
  );

DoorClosedLocked.displayName = "DoorClosedLocked";

DoorClosedLocked.metadata = {
  name: "DoorClosedLocked",
  category: "stroke/travel",
  tags: ["door", "closed", "locked", "icon"],
  description: "DoorClosedLocked icon from stroke/travel category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default DoorClosedLocked;
