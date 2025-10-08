import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface CookingPotProps extends IconProps {
  type?: "stroke";
}

export const CookingPot: IconComponent<CookingPotProps> = React.forwardRef<
  SVGSVGElement,
  CookingPotProps
>(function CookingPot(
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
          d="M2 12H22M20 12V20C20 20.53 19.789 21.039 19.414 21.414 19.039 21.789 18.53 22 18 22H6C5.47 22 4.961 21.789 4.586 21.414 4.211 21.039 4 20.53 4 20V12M4 8 20 4M8.86 6.78 8.41 4.97C8.346 4.715 8.332 4.45 8.37 4.19 8.408 3.93 8.497 3.68 8.631 3.455 8.766 3.229 8.944 3.032 9.155 2.875 9.366 2.718 9.605 2.604 9.86 2.54L11.8 2.06C12.055 1.996 12.321 1.983 12.582 2.021 12.842 2.06 13.093 2.149 13.318 2.285 13.544 2.421 13.741 2.6 13.897 2.812 14.054 3.024 14.167 3.264 14.23 3.52L14.68 5.32"
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
          d="M2 12H22M20 12V20C20 20.53 19.789 21.039 19.414 21.414 19.039 21.789 18.53 22 18 22H6C5.47 22 4.961 21.789 4.586 21.414 4.211 21.039 4 20.53 4 20V12M4 8 20 4M8.86 6.78 8.41 4.97C8.346 4.715 8.332 4.45 8.37 4.19 8.408 3.93 8.497 3.68 8.631 3.454 8.766 3.229 8.944 3.032 9.155 2.875 9.366 2.718 9.605 2.604 9.86 2.54L11.8 2.06C12.055 1.996 12.321 1.982 12.582 2.021 12.842 2.06 13.093 2.149 13.318 2.285 13.544 2.421 13.741 2.6 13.897 2.812 14.054 3.024 14.167 3.264 14.23 3.52L14.68 5.32"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`CookingPot doesn't support ${type}`);
  return null;
});

CookingPot.displayName = "CookingPot";

CookingPot.metadata = {
  name: "CookingPot",
  category: "stroke/home",
  tags: ["cooking", "pot", "icon"],
  description: "CookingPot icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CookingPot;
