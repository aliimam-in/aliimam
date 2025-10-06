import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface Building2Props extends IconProps {
  type?: "stroke";
}

export const Building2: IconComponent<Building2Props> = React.forwardRef<
  SVGSVGElement,
  Building2Props
>(function Building2(
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
          d="M6 22V4C6 3.47 6.211 2.961 6.586 2.586 6.961 2.211 7.47 2 8 2H16C16.53 2 17.039 2.211 17.414 2.586 17.789 2.961 18 3.47 18 4V22H6ZM6 12H4C3.47 12 2.961 12.211 2.586 12.586 2.211 12.961 2 13.47 2 14V20C2 20.53 2.211 21.039 2.586 21.414 2.961 21.789 3.47 22 4 22H6M18 9H20C20.53 9 21.039 9.211 21.414 9.586 21.789 9.961 22 10.47 22 11V20C22 20.53 21.789 21.039 21.414 21.414 21.039 21.789 20.53 22 20 22H18M10 6H14M10 10H14M10 14H14M10 18H14"
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
          d="M6 22V4C6 3.47 6.211 2.961 6.586 2.586 6.961 2.211 7.47 2 8 2H16C16.53 2 17.039 2.211 17.414 2.586 17.789 2.961 18 3.47 18 4V22H6ZM6 12H4C3.47 12 2.961 12.211 2.586 12.586 2.211 12.961 2 13.47 2 14V20C2 20.53 2.211 21.039 2.586 21.414 2.961 21.789 3.47 22 4 22H6M18 9H20C20.53 9 21.039 9.211 21.414 9.586 21.789 9.961 22 10.47 22 11V20C22 20.53 21.789 21.039 21.414 21.414 21.039 21.789 20.53 22 20 22H18M10 6H14M10 10H14M10 14H14M10 18H14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Building2 doesn't support ${type}`);
  return null;
});

Building2.displayName = "Building2";

Building2.metadata = {
  name: "Building2",
  category: "stroke/buildings",
  tags: ["building", "icon"],
  description: "Building2 icon from stroke/buildings category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Building2;
