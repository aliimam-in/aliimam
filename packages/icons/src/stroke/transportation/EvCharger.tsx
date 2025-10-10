import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface EvChargerProps extends IconProps {
  type?: "stroke";
}

export const EvCharger: IconComponent<EvChargerProps> = React.forwardRef<
  SVGSVGElement,
  EvChargerProps
>(function EvCharger(
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
          d="M14 13H16C16.53 13 17.039 13.211 17.414 13.586 17.789 13.961 18 14.47 18 15V17C18 17.53 18.211 18.039 18.586 18.414 18.961 18.789 19.47 19 20 19 20.53 19 21.039 18.789 21.414 18.414 21.789 18.039 22 17.53 22 17V10.002C22 9.738 21.948 9.477 21.847 9.233 21.746 8.989 21.597 8.768 21.41 8.582L18 5M14 21V5C14 4.47 13.789 3.961 13.414 3.586 13.039 3.211 12.53 3 12 3H5C4.47 3 3.961 3.211 3.586 3.586 3.211 3.961 3 4.47 3 5V21M2 21H15M3 7H14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11L7 14H10L8 17"
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
          d="M14 13H16C16.53 13 17.039 13.211 17.414 13.586 17.789 13.961 18 14.47 18 15V17C18 17.53 18.211 18.039 18.586 18.414 18.961 18.789 19.47 19 20 19 20.53 19 21.039 18.789 21.414 18.414 21.789 18.039 22 17.53 22 17V10.002C22 9.738 21.948 9.477 21.847 9.233 21.746 8.989 21.597 8.768 21.41 8.582L18 5M14 21V5C14 4.47 13.789 3.961 13.414 3.586 13.039 3.211 12.53 3 12 3H5C4.47 3 3.961 3.211 3.586 3.586 3.211 3.961 3 4.47 3 5V21M2 21H15M3 7H14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11L7 14H10L8 17"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`EvCharger doesn't support ${type}`);
  return null;
});

EvCharger.displayName = "EvCharger";

EvCharger.metadata = {
  name: "EvCharger",
  category: "stroke/transportation",
  tags: ["ev", "charger", "icon"],
  description: "EvCharger icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default EvCharger;
