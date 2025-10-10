import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface CaravanProps extends IconProps {
  type?: "stroke";
}

export const Caravan: IconComponent<CaravanProps> = React.forwardRef<
  SVGSVGElement,
  CaravanProps
>(function Caravan(
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
          d="M18 19V9C18 7.93913 17.5786 6.92172 16.8284 6.17157C16.0783 5.42143 15.0609 5 14 5H6C4.93913 5 3.92172 5.42143 3.17157 6.17157C2.42143 6.92172 2 7.93913 2 9V17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19H6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 9H5C5.265 9 5.52 9.105 5.707 9.293 5.895 9.48 6 9.735 6 10V12C6 12.265 5.895 12.52 5.707 12.707 5.52 12.895 5.265 13 5 13H2M22 17V18C22 18.265 21.895 18.52 21.707 18.707 21.52 18.895 21.265 19 21 19H10V10C10 9.735 10.105 9.48 10.293 9.293 10.48 9.105 10.735 9 11 9H13C13.265 9 13.52 9.105 13.707 9.293 13.895 9.48 14 9.735 14 10V19M8 21C9.105 21 10 20.105 10 19 10 17.895 9.105 17 8 17 6.895 17 6 17.895 6 19 6 20.105 6.895 21 8 21Z"
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
          d="M18 19V9C18 7.93913 17.5786 6.92172 16.8284 6.17157C16.0783 5.42143 15.0609 5 14 5H6C4.93913 5 3.92172 5.42143 3.17157 6.17157C2.42143 6.92172 2 7.93913 2 9V17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19H6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 9H5C5.265 9 5.52 9.105 5.707 9.293 5.895 9.48 6 9.735 6 10V12C6 12.265 5.895 12.52 5.707 12.707 5.52 12.895 5.265 13 5 13H2M22 17V18C22 18.265 21.895 18.52 21.707 18.707 21.52 18.895 21.265 19 21 19H10V10C10 9.735 10.105 9.48 10.293 9.293 10.48 9.105 10.735 9 11 9H13C13.265 9 13.52 9.105 13.707 9.293 13.895 9.48 14 9.735 14 10V19M8 21C9.105 21 10 20.105 10 19 10 17.895 9.105 17 8 17 6.895 17 6 17.895 6 19 6 20.105 6.895 21 8 21Z"
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
          d="M18 19V9C18 7.93913 17.5786 6.92172 16.8284 6.17157C16.0783 5.42143 15.0609 5 14 5H6C4.93913 5 3.92172 5.42143 3.17157 6.17157C2.42143 6.92172 2 7.93913 2 9V17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19H6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 9H5C5.265 9 5.52 9.105 5.707 9.293 5.895 9.48 6 9.735 6 10V12C6 12.265 5.895 12.52 5.707 12.707 5.52 12.895 5.265 13 5 13H2M22 17V18C22 18.265 21.895 18.52 21.707 18.707 21.52 18.895 21.265 19 21 19H10V10C10 9.735 10.105 9.48 10.293 9.293 10.48 9.105 10.735 9 11 9H13C13.265 9 13.52 9.105 13.707 9.293 13.895 9.48 14 9.735 14 10V19M8 21C9.105 21 10 20.105 10 19 10 17.895 9.105 17 8 17 6.895 17 6 17.895 6 19 6 20.105 6.895 21 8 21Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Caravan doesn't support ${type}`);
  return null;
});

Caravan.displayName = "Caravan";

Caravan.metadata = {
  name: "Caravan",
  category: "stroke/transportation",
  tags: ["caravan", "icon"],
  description: "Caravan icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Caravan;
