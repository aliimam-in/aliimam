import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SquareParkingOffProps extends IconProps {
  type?: "stroke";
}

export const SquareParkingOff: IconComponent<SquareParkingOffProps> =
  React.forwardRef<SVGSVGElement, SquareParkingOffProps>(
    function SquareParkingOff(
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
              d="M3.6 3.6C3.969 3.223 4.473 3.008 5 3H19C19.531 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5V19C20.998 19.53 20.786 20.037 20.41 20.41M3 8.7V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H15.3M2 2 22 22"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 13C13.796 13 14.559 12.684 15.121 12.121 15.684 11.559 16 10.796 16 10 16 9.204 15.684 8.441 15.121 7.879 14.559 7.316 13.796 7 13 7H9V9M9 17V14.7"
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
              d="M3.6 3.6C3.969 3.223 4.473 3.008 5 3H19C19.531 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5V19C20.998 19.53 20.786 20.037 20.41 20.41M3 8.7V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H15.3M2 2 22 22"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 13C13.796 13 14.559 12.684 15.121 12.121 15.684 11.559 16 10.796 16 10 16 9.204 15.684 8.441 15.121 7.879 14.559 7.316 13.796 7 13 7H9V9M9 17V14.7"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`SquareParkingOff doesn't support ${type}`);
      return null;
    },
  );

SquareParkingOff.displayName = "SquareParkingOff";

SquareParkingOff.metadata = {
  name: "SquareParkingOff",
  category: "stroke/transportation",
  tags: ["square", "parking", "off", "icon"],
  description: "SquareParkingOff icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquareParkingOff;
