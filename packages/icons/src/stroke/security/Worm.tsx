import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface WormProps extends IconProps {
  type?: "stroke";
}

export const Worm: IconComponent<WormProps> = React.forwardRef<
  SVGSVGElement,
  WormProps
>(function Worm(
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
          d="M19 12 17.5 15M19.63 18.81 22 20M6.47 8.23C6.761 8.066 7.093 7.992 7.426 8.018 7.759 8.044 8.077 8.168 8.338 8.375 8.6 8.582 8.794 8.863 8.896 9.181 8.998 9.498 9.003 9.839 8.91 10.16L8.27 12.24C7.854 13.57 7.859 14.996 8.285 16.323 8.711 17.65 9.536 18.813 10.649 19.653 11.761 20.493 13.106 20.968 14.499 21.014 15.892 21.06 17.265 20.675 18.43 19.91L18.85 19.64C19.126 19.461 19.365 19.229 19.552 18.958 19.738 18.686 19.87 18.381 19.939 18.058 20.007 17.736 20.012 17.404 19.952 17.08 19.892 16.756 19.769 16.447 19.59 16.17 19.411 15.894 19.179 15.655 18.907 15.468 18.636 15.282 18.33 15.15 18.008 15.081 17.686 15.013 17.353 15.008 17.029 15.068 16.705 15.128 16.396 15.251 16.12 15.43L15.7 15.7C15.397 15.893 15.043 15.988 14.684 15.973 14.326 15.958 13.98 15.835 13.694 15.618 13.408 15.402 13.195 15.103 13.083 14.762 12.972 14.421 12.967 14.054 13.07 13.71L13.71 11.63C14.119 10.341 14.127 8.958 13.731 7.665 13.336 6.372 12.556 5.229 11.495 4.39 10.434 3.551 9.143 3.055 7.794 2.967 6.444 2.88 5.1 3.205 3.94 3.9L3.24 4.3C2.955 4.467 2.706 4.689 2.507 4.953 2.307 5.217 2.162 5.517 2.079 5.837 1.911 6.483 2.007 7.17 2.345 7.745 2.683 8.321 3.236 8.738 3.882 8.906 4.528 9.074 5.214 8.978 5.79 8.64L6.47 8.23Z"
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
          d="M19 12 17.5 15M19.63 18.81 22 20M6.47 8.23C6.761 8.066 7.094 7.992 7.426 8.018 7.759 8.044 8.077 8.168 8.339 8.375 8.6 8.582 8.794 8.863 8.896 9.181 8.998 9.498 9.003 9.839 8.91 10.16L8.27 12.24C7.854 13.57 7.859 14.996 8.285 16.323 8.711 17.65 9.537 18.813 10.649 19.653 11.761 20.493 13.106 20.968 14.499 21.014 15.892 21.06 17.265 20.675 18.43 19.91L18.85 19.64C19.126 19.461 19.365 19.229 19.552 18.958 19.738 18.686 19.87 18.381 19.939 18.058 20.007 17.736 20.012 17.404 19.952 17.08 19.892 16.756 19.769 16.447 19.59 16.17 19.411 15.894 19.179 15.655 18.907 15.468 18.636 15.282 18.331 15.15 18.008 15.081 17.686 15.013 17.353 15.008 17.03 15.068 16.706 15.128 16.396 15.251 16.12 15.43L15.7 15.7C15.397 15.893 15.043 15.988 14.684 15.973 14.326 15.958 13.98 15.835 13.694 15.618 13.408 15.402 13.195 15.103 13.083 14.762 12.972 14.421 12.967 14.054 13.07 13.71L13.71 11.63C14.12 10.341 14.127 8.958 13.731 7.665 13.336 6.372 12.556 5.229 11.495 4.39 10.435 3.551 9.144 3.055 7.794 2.967 6.444 2.88 5.1 3.205 3.94 3.9L3.24 4.3C2.955 4.467 2.706 4.689 2.507 4.953 2.307 5.217 2.162 5.517 2.079 5.837 1.911 6.483 2.007 7.17 2.345 7.745 2.683 8.321 3.236 8.738 3.882 8.906 4.528 9.074 5.214 8.978 5.79 8.64L6.47 8.23Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Worm doesn't support ${type}`);
  return null;
});

Worm.displayName = "Worm";

Worm.metadata = {
  name: "Worm",
  category: "stroke/security",
  tags: ["worm", "icon"],
  description: "Worm icon from stroke/security category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Worm;
