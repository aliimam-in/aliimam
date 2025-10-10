import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface WashingMachineProps extends IconProps {
  type?: "stroke";
}

export const WashingMachine: IconComponent<WashingMachineProps> =
  React.forwardRef<SVGSVGElement, WashingMachineProps>(function WashingMachine(
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
            d="M3 6H6M17 6H17.01M19 2H5C3.895 2 3 2.895 3 4V20C3 21.105 3.895 22 5 22H19C20.105 22 21 21.105 21 20V4C21 2.895 20.105 2 19 2Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 18C14.7614 18 17 15.7614 17 13C17 10.2386 14.7614 8 12 8C9.23858 8 7 10.2386 7 13C7 15.7614 9.23858 18 12 18Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 18C12.663 18 13.2989 17.7366 13.7678 17.2678C14.2366 16.7989 14.5 16.163 14.5 15.5C14.5 14.837 14.2366 14.2011 13.7678 13.7322C13.2989 13.2634 12.663 13 12 13C11.337 13 10.7011 12.7366 10.2322 12.2678C9.76339 11.7989 9.5 11.163 9.5 10.5C9.5 9.83696 9.76339 9.20107 10.2322 8.73223C10.7011 8.26339 11.337 8 12 8"
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
            d="M3 6H6M17 6H17.01M19 2H5C3.895 2 3 2.895 3 4V20C3 21.105 3.895 22 5 22H19C20.105 22 21 21.105 21 20V4C21 2.895 20.105 2 19 2Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 18C14.7614 18 17 15.7614 17 13C17 10.2386 14.7614 8 12 8C9.23858 8 7 10.2386 7 13C7 15.7614 9.23858 18 12 18Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 18C12.663 18 13.2989 17.7366 13.7678 17.2678C14.2366 16.7989 14.5 16.163 14.5 15.5C14.5 14.837 14.2366 14.2011 13.7678 13.7322C13.2989 13.2634 12.663 13 12 13C11.337 13 10.7011 12.7366 10.2322 12.2678C9.76339 11.7989 9.5 11.163 9.5 10.5C9.5 9.83696 9.76339 9.20107 10.2322 8.73223C10.7011 8.26339 11.337 8 12 8"
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
            d="M3 6H6M17 6H17.01M19 2H5C3.895 2 3 2.895 3 4V20C3 21.105 3.895 22 5 22H19C20.105 22 21 21.105 21 20V4C21 2.895 20.105 2 19 2Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 18C14.7614 18 17 15.7614 17 13C17 10.2386 14.7614 8 12 8C9.23858 8 7 10.2386 7 13C7 15.7614 9.23858 18 12 18Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 18C12.663 18 13.2989 17.7366 13.7678 17.2678C14.2366 16.7989 14.5 16.163 14.5 15.5C14.5 14.837 14.2366 14.2011 13.7678 13.7322C13.2989 13.2634 12.663 13 12 13C11.337 13 10.7011 12.7366 10.2322 12.2678C9.76339 11.7989 9.5 11.163 9.5 10.5C9.5 9.83696 9.76339 9.20107 10.2322 8.73223C10.7011 8.26339 11.337 8 12 8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`WashingMachine doesn't support ${type}`);
    return null;
  });

WashingMachine.displayName = "WashingMachine";

WashingMachine.metadata = {
  name: "WashingMachine",
  category: "stroke/travel",
  tags: ["washing", "machine", "icon"],
  description: "WashingMachine icon from stroke/travel category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default WashingMachine;
