import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MicVocalProps extends IconProps {
  type?: "stroke";
}

export const MicVocal: IconComponent<MicVocalProps> = React.forwardRef<
  SVGSVGElement,
  MicVocalProps
>(function MicVocal(
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
          d="M11.0001 7.60101L5.00609 15.791C4.86505 15.9837 4.7976 16.2204 4.81594 16.4585C4.83429 16.6966 4.9372 16.9202 5.10609 17.089L5.92309 17.907C6.09444 18.0782 6.32208 18.1813 6.56375 18.1973C6.80541 18.2133 7.04467 18.1411 7.23709 17.994L15.0901 12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 21.174C15.5 20.5 14.372 20 13 20 10.942 20 9.072 22.356 7 22 4.928 21.644 4.225 18.631 5.5 17.5M16 12C18.761 12 21 9.761 21 7 21 4.239 18.761 2 16 2 13.239 2 11 4.239 11 7 11 9.761 13.239 12 16 12Z"
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
          d="M11.0001 7.60095L5.00609 15.791C4.86505 15.9836 4.7976 16.2204 4.81594 16.4585C4.83429 16.6965 4.9372 16.9202 5.10609 17.089L5.92309 17.907C6.09444 18.0781 6.32208 18.1813 6.56375 18.1973C6.80541 18.2133 7.04467 18.141 7.23709 17.994L15.0901 12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 21.174C15.5 20.5 14.372 20 13 20 10.942 20 9.072 22.356 7 22 4.928 21.644 4.225 18.631 5.5 17.5M16 12C18.761 12 21 9.761 21 7 21 4.239 18.761 2 16 2 13.239 2 11 4.239 11 7 11 9.761 13.239 12 16 12Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`MicVocal doesn't support ${type}`);
  return null;
});

MicVocal.displayName = "MicVocal";

MicVocal.metadata = {
  name: "MicVocal",
  category: "stroke/multimedia",
  tags: ["mic", "vocal", "icon"],
  description: "MicVocal icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MicVocal;
