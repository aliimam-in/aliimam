import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface HousePlusProps extends IconProps {
  type?: "stroke";
}

export const HousePlus: IconComponent<HousePlusProps> = React.forwardRef<
  SVGSVGElement,
  HousePlusProps
>(function HousePlus(
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
          d="M12.35 20.9999H5C4.46957 20.9999 3.96086 20.7892 3.58579 20.4141C3.21071 20.0391 3 19.5304 3 18.9999V9.99993C2.99976 9.70858 3.06318 9.4207 3.18582 9.15642C3.30846 8.89214 3.48736 8.65785 3.71 8.46993L10.71 2.46993C11.0708 2.16536 11.5278 1.99829 12 1.99829C12.4722 1.99829 12.9292 2.16536 13.29 2.46993L20.29 8.46993C20.5126 8.65785 20.6915 8.89214 20.8142 9.15642C20.9368 9.4207 21.0002 9.70858 21 9.99993V12.3499"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.8 12.4C14.707 12.276 14.586 12.175 14.447 12.106 14.308 12.036 14.155 12 14 12H10C9.735 12 9.48 12.105 9.293 12.293 9.105 12.48 9 12.735 9 13V21M15 18H21M18 15V21"
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
          d="M12.35 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4143C3.21071 20.0392 3 19.5305 3 19V10C2.99976 9.7087 3.06318 9.42082 3.18582 9.15654C3.30846 8.89226 3.48736 8.65797 3.71 8.47005L10.71 2.47005C11.0708 2.16548 11.5278 1.99841 12 1.99841C12.4722 1.99841 12.9292 2.16548 13.29 2.47005L20.29 8.47005C20.5126 8.65797 20.6915 8.89226 20.8142 9.15654C20.9368 9.42082 21.0002 9.7087 21 10V12.35"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.8 12.4C14.707 12.276 14.586 12.175 14.447 12.106 14.308 12.036 14.155 12 14 12H10C9.735 12 9.48 12.105 9.293 12.293 9.105 12.48 9 12.735 9 13V21M15 18H21M18 15V21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`HousePlus doesn't support ${type}`);
  return null;
});

HousePlus.displayName = "HousePlus";

HousePlus.metadata = {
  name: "HousePlus",
  category: "stroke/medical",
  tags: ["house", "plus", "icon"],
  description: "HousePlus icon from stroke/medical category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default HousePlus;
