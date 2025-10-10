import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MicroscopeProps extends IconProps {
  type?: "stroke";
}

export const Microscope: IconComponent<MicroscopeProps> = React.forwardRef<
  SVGSVGElement,
  MicroscopeProps
>(function Microscope(
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
          d="M6 18H14M3 22H21M14 22C15.857 22 17.637 21.263 18.95 19.95 20.263 18.637 21 16.857 21 15 21 13.144 20.263 11.363 18.95 10.05 17.637 8.738 15.857 8 14 8H13M9 14H11M9 12C8.47 12 7.961 11.789 7.586 11.414 7.211 11.039 7 10.53 7 10V6H13V10C13 10.53 12.789 11.039 12.414 11.414 12.039 11.789 11.53 12 11 12H9ZM12 6V3C12 2.735 11.895 2.48 11.707 2.293 11.52 2.105 11.265 2 11 2H9C8.735 2 8.48 2.105 8.293 2.293 8.105 2.48 8 2.735 8 3V6"
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
          d="M6 18H14M3 22H21M14 22C15.857 22 17.637 21.263 18.95 19.95 20.263 18.637 21 16.857 21 15 21 13.144 20.263 11.363 18.95 10.05 17.637 8.738 15.857 8 14 8H13M9 14H11M9 12C8.47 12 7.961 11.789 7.586 11.414 7.211 11.039 7 10.53 7 10V6H13V10C13 10.53 12.789 11.039 12.414 11.414 12.039 11.789 11.53 12 11 12H9ZM12 6V3C12 2.735 11.895 2.48 11.707 2.293 11.52 2.105 11.265 2 11 2H9C8.735 2 8.48 2.105 8.293 2.293 8.105 2.48 8 2.735 8 3V6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Microscope doesn't support ${type}`);
  return null;
});

Microscope.displayName = "Microscope";

Microscope.metadata = {
  name: "Microscope",
  category: "stroke/science",
  tags: ["microscope", "icon"],
  description: "Microscope icon from stroke/science category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Microscope;
