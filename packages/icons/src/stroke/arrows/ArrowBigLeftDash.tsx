import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowBigLeftDash: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowBigLeftDash(
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
    ...props
  },
  forwardedRef,
) {
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
        d="M13 9C12.735 9 12.48 8.895 12.293 8.707 12.105 8.52 12 8.265 12 8V5.061C12.044 4.835 12.009 4.6 11.9 4.396 11.79 4.193 11.614 4.034 11.401 3.946 11.188 3.857 10.951 3.845 10.73 3.912 10.509 3.979 10.318 4.12 10.189 4.311L3.354 11.147C3.242 11.259 3.153 11.392 3.092 11.539 3.032 11.685 3 11.842 3 12.001 3 12.159 3.032 12.316 3.092 12.462 3.153 12.609 3.242 12.742 3.354 12.854L10.189 19.689C10.318 19.88 10.509 20.021 10.73 20.088 10.951 20.155 11.188 20.143 11.401 20.054 11.614 19.966 11.79 19.807 11.9 19.604 12.009 19.4 12.044 19.166 12 18.939V16C12 15.735 12.105 15.48 12.293 15.293 12.48 15.105 12.735 15 13 15H15C15.265 15 15.52 14.895 15.707 14.707 15.895 14.52 16 14.265 16 14V10C16 9.735 15.895 9.48 15.707 9.293 15.52 9.105 15.265 9 15 9H13ZM20 9V15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowBigLeftDash.displayName = "ArrowBigLeftDash";

ArrowBigLeftDash.metadata = {
  name: "ArrowBigLeftDash",
  category: "stroke/arrows",
  tags: ["arrow", "big", "left", "dash", "icon"],
  description: "ArrowBigLeftDash icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowBigLeftDash;
