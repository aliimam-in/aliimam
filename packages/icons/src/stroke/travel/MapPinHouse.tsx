import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MapPinHouseProps extends IconProps {
  type?: "stroke";
}

export const MapPinHouse: IconComponent<MapPinHouseProps> = React.forwardRef<
  SVGSVGElement,
  MapPinHouseProps
>(function MapPinHouse(
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
          d="M15 22C14.735 22 14.48 21.895 14.293 21.707 14.105 21.52 14 21.265 14 21V17C14 16.835 14.041 16.673 14.118 16.528 14.196 16.383 14.308 16.259 14.445 16.168L17.445 14.168C17.609 14.058 17.803 14 18 14 18.198 14 18.391 14.058 18.555 14.168L21.555 16.168C21.692 16.259 21.804 16.383 21.882 16.528 21.959 16.673 22 16.835 22 17V21C22 21.265 21.895 21.52 21.707 21.707 21.52 21.895 21.265 22 21 22H15ZM18 10C18 7.878 17.157 5.843 15.657 4.343 14.157 2.843 12.122 2 10 2 7.878 2 5.843 2.843 4.343 4.343 2.843 5.843 2 7.878 2 10 2 14.993 7.539 20.193 9.399 21.799 9.572 21.929 9.783 21.999 10 21.999M18 22V19"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
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
          d="M15 22C14.735 22 14.48 21.895 14.293 21.707 14.105 21.52 14 21.265 14 21V17C14 16.835 14.041 16.673 14.118 16.528 14.196 16.383 14.308 16.259 14.445 16.168L17.445 14.168C17.609 14.058 17.803 14 18 14 18.198 14 18.391 14.058 18.555 14.168L21.555 16.168C21.692 16.259 21.804 16.383 21.882 16.528 21.959 16.673 22 16.835 22 17V21C22 21.265 21.895 21.52 21.707 21.707 21.52 21.895 21.265 22 21 22H15ZM18 10C18 7.878 17.157 5.843 15.657 4.343 14.157 2.843 12.122 2 10 2 7.878 2 5.843 2.843 4.343 4.343 2.843 5.843 2 7.878 2 10 2 14.993 7.539 20.193 9.399 21.799 9.572 21.929 9.783 21.999 10 21.999M18 22V19"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
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
          d="M15 22C14.735 22 14.48 21.895 14.293 21.707 14.105 21.52 14 21.265 14 21V17C14 16.835 14.041 16.673 14.118 16.528 14.196 16.383 14.308 16.259 14.445 16.168L17.445 14.168C17.609 14.058 17.803 14 18 14 18.198 14 18.391 14.058 18.555 14.168L21.555 16.168C21.692 16.259 21.804 16.383 21.882 16.528 21.959 16.673 22 16.835 22 17V21C22 21.265 21.895 21.52 21.707 21.707 21.52 21.895 21.265 22 21 22H15ZM18 10C18 7.878 17.157 5.843 15.657 4.343 14.157 2.843 12.122 2 10 2 7.878 2 5.843 2.843 4.343 4.343 2.843 5.843 2 7.878 2 10 2 14.993 7.539 20.193 9.399 21.799 9.572 21.929 9.783 21.999 10 21.999M18 22V19"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`MapPinHouse doesn't support ${type}`);
  return null;
});

MapPinHouse.displayName = "MapPinHouse";

MapPinHouse.metadata = {
  name: "MapPinHouse",
  category: "stroke/travel",
  tags: ["map", "pin", "house", "icon"],
  description: "MapPinHouse icon from stroke/travel category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MapPinHouse;
