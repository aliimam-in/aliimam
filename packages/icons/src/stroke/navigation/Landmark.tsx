import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface LandmarkProps extends IconProps {
  type?: "stroke";
}

export const Landmark: IconComponent<LandmarkProps> = React.forwardRef<
  SVGSVGElement,
  LandmarkProps
>(function Landmark(
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
          d="M10 18V11M11.12 2.198C11.395 2.065 11.696 1.996 12.001 1.997 12.306 1.998 12.607 2.069 12.88 2.204L20.746 6.051C21.222 6.284 21.056 7 20.526 7H3.474C2.944 7 2.779 6.284 3.254 6.051L11.12 2.198ZM14 18V11M18 18V11M3 22H21M6 18V11"
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
          d="M10 18V11M11.12 2.198C11.394 2.065 11.696 1.996 12.001 1.997 12.306 1.998 12.607 2.069 12.88 2.204L20.746 6.051C21.222 6.284 21.056 7 20.526 7H3.474C2.944 7 2.779 6.284 3.254 6.051L11.12 2.198ZM14 18V11M18 18V11M3 22H21M6 18V11"
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
          d="M10 18V11M11.12 2.198C11.394 2.065 11.696 1.996 12.001 1.997 12.306 1.998 12.607 2.069 12.88 2.204L20.746 6.051C21.222 6.284 21.056 7 20.526 7H3.474C2.944 7 2.779 6.284 3.254 6.051L11.12 2.198ZM14 18V11M18 18V11M3 22H21M6 18V11"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Landmark doesn't support ${type}`);
  return null;
});

Landmark.displayName = "Landmark";

Landmark.metadata = {
  name: "Landmark",
  category: "stroke/navigation",
  tags: ["landmark", "icon"],
  description: "Landmark icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Landmark;
