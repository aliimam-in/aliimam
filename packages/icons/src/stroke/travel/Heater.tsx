import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface HeaterProps extends IconProps {
  type?: "stroke";
}

export const Heater: IconComponent<HeaterProps> = React.forwardRef<
  SVGSVGElement,
  HeaterProps
>(function Heater(
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
          d="M11 8C13 5 9 5 11 2M15.5 8C17.5 5 13.5 5 15.5 2M6 10H6.01M6 14H6.01M10 16V12M14 16V12M18 16V12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 6C20.53 6 21.039 6.211 21.414 6.586 21.789 6.961 22 7.47 22 8V18C22 18.53 21.789 19.039 21.414 19.414 21.039 19.789 20.53 20 20 20H4C3.47 20 2.961 19.789 2.586 19.414 2.211 19.039 2 18.53 2 18V8C2 7.47 2.211 6.961 2.586 6.586 2.961 6.211 3.47 6 4 6H7M5 20V22M19 20V22"
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
          d="M11 8C13 5 9 5 11 2M15.5 8C17.5 5 13.5 5 15.5 2M6 10H6.01M6 14H6.01M10 16V12M14 16V12M18 16V12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 6C20.53 6 21.039 6.211 21.414 6.586 21.789 6.961 22 7.47 22 8V18C22 18.53 21.789 19.039 21.414 19.414 21.039 19.789 20.53 20 20 20H4C3.47 20 2.961 19.789 2.586 19.414 2.211 19.039 2 18.53 2 18V8C2 7.47 2.211 6.961 2.586 6.586 2.961 6.211 3.47 6 4 6H7M5 20V22M19 20V22"
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
          d="M11 8C13 5 9 5 11 2M15.5 8C17.5 5 13.5 5 15.5 2M6 10H6.01M6 14H6.01M10 16V12M14 16V12M18 16V12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 6C20.53 6 21.039 6.211 21.414 6.586 21.789 6.961 22 7.47 22 8V18C22 18.53 21.789 19.039 21.414 19.414 21.039 19.789 20.53 20 20 20H4C3.47 20 2.961 19.789 2.586 19.414 2.211 19.039 2 18.53 2 18V8C2 7.47 2.211 6.961 2.586 6.586 2.961 6.211 3.47 6 4 6H7M5 20V22M19 20V22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Heater doesn't support ${type}`);
  return null;
});

Heater.displayName = "Heater";

Heater.metadata = {
  name: "Heater",
  category: "stroke/travel",
  tags: ["heater", "icon"],
  description: "Heater icon from stroke/travel category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Heater;
