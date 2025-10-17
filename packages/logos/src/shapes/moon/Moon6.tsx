import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Moon6: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Moon6(
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
        <g clipPath="url(#undefined-clip0_2068_393)">
          <path
            d="M4.13499 20.4853C6.78258 22.7357 10.3735 24 14.1177 24L14.1177 12.0446C14.1315 14.2563 15.1711 16.3749 17.0121 17.9397C18.8654 19.515 21.379 20.4 24 20.4L24 3.6C21.379 3.6 18.8654 4.485 17.0121 6.0603C15.1711 7.6251 14.1315 9.7437 14.1177 11.9554L14.1177 0C10.3735 6.19675e-07 6.78257 1.26428 4.13498 3.51472C1.4874 5.76516 0 8.8174 0 12C0 15.1826 1.4874 18.2348 4.13499 20.4853Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_393">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Moon6.displayName = "Moon6";

Moon6.metadata = {
  name: "Moon6",
  category: "shapes/moon",
  tags: ["moon", "icon"],
  description: "Moon6 icon from shapes/moon category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Moon6;
