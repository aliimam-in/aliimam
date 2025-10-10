import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface TheaterProps extends IconProps {
  type?: "stroke";
}

export const Theater: IconComponent<TheaterProps> = React.forwardRef<
  SVGSVGElement,
  TheaterProps
>(function Theater(
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
          d="M2 10C2 10 5 7 5 2M22 10C22 10 19 7 19 2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 2C10 6.4 6.4 10 2 10M14 2C14 6.4 17.6 10 22 10M2 10C2 10 4 12 4 15M22 10C22 10 20 12 20 15M8 15H16M2 22V21C2 20.47 2.211 19.961 2.586 19.586 2.961 19.211 3.47 19 4 19H8C8.53 19 9.039 19.211 9.414 19.586 9.789 19.961 10 20.47 10 21V22M14 22V21C14 20.47 14.211 19.961 14.586 19.586 14.961 19.211 15.47 19 16 19H20C20.53 19 21.039 19.211 21.414 19.586 21.789 19.961 22 20.47 22 21V22"
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
          d="M2 10C2 10 5 7 5 2M22 10C22 10 19 7 19 2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 2C10 6.4 6.4 10 2 10M14 2C14 6.4 17.6 10 22 10M2 10C2 10 4 12 4 15M22 10C22 10 20 12 20 15M8 15H16M2 22V21C2 20.47 2.211 19.961 2.586 19.586 2.961 19.211 3.47 19 4 19H8C8.53 19 9.039 19.211 9.414 19.586 9.789 19.961 10 20.47 10 21V22M14 22V21C14 20.47 14.211 19.961 14.586 19.586 14.961 19.211 15.47 19 16 19H20C20.53 19 21.039 19.211 21.414 19.586 21.789 19.961 22 20.47 22 21V22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Theater doesn't support ${type}`);
  return null;
});

Theater.displayName = "Theater";

Theater.metadata = {
  name: "Theater",
  category: "stroke/social",
  tags: ["theater", "icon"],
  description: "Theater icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Theater;
