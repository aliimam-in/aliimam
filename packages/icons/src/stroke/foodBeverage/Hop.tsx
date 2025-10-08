import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Hop: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Hop(
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
          d="M10.82 16.12C12.51 16.72 14.73 16.91 16 16.97 16.55 17 17 16.55 16.97 16 16.91 14.73 16.71 12.5 16.12 10.82M11.5 6.5C13.14 6.5 16.5 6.12 18.21 5.43 18.73 5.23 18.76 4.61 18.33 4.26 16.41 2.694 13.978 1.896 11.503 2.021 9.029 2.146 6.689 3.185 4.937 4.937 3.185 6.689 2.146 9.029 2.021 11.503 1.896 13.978 2.694 16.41 4.26 18.33 4.61 18.76 5.22 18.73 5.43 18.21 6.12 16.5 6.5 13.14 6.5 11.5 7.84 11.95 9.6 12.4 11.38 12.12 11.565 12.09 11.735 12.002 11.866 11.869 11.997 11.736 12.083 11.565 12.11 11.38 12.41 9.24 11.96 7.88 11.5 6.5Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.62 16.95C15.82 17.8 16.24 19.71 16.12 21.23C16.1118 21.3371 16.0814 21.4412 16.0306 21.5358C15.9798 21.6304 15.9097 21.7133 15.825 21.7793C15.7402 21.8452 15.6426 21.8926 15.5384 21.9186C15.4343 21.9446 15.3258 21.9485 15.22 21.93C13.8069 21.6551 12.4355 21.1979 11.14 20.57"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.13 21.05C17.78 21.68 19.81 21.89 21 21.96C21.1284 21.9689 21.2571 21.9502 21.3776 21.905C21.4981 21.8599 21.6076 21.7895 21.6985 21.6985C21.7895 21.6076 21.8599 21.4981 21.905 21.3776C21.9502 21.2571 21.9689 21.1284 21.96 21C21.89 19.3425 21.587 17.7031 21.06 16.13"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.94 15.62C17.8 15.82 19.71 16.24 21.23 16.12 21.337 16.112 21.441 16.081 21.536 16.031 21.63 15.98 21.713 15.91 21.779 15.825 21.845 15.74 21.893 15.643 21.919 15.538 21.945 15.434 21.948 15.326 21.93 15.22 21.655 13.807 21.198 12.436 20.57 11.14M17.99 5.52C19.234 6.874 20.293 8.387 21.14 10.02 21.194 10.138 21.218 10.268 21.211 10.397 21.203 10.527 21.164 10.653 21.097 10.764 21.03 10.875 20.937 10.969 20.826 11.036 20.715 11.103 20.59 11.142 20.46 11.15 18.13 11.35 15.16 10.83 12.19 9.58M4.93 4.93 3 3C2.934 2.935 2.881 2.857 2.845 2.771 2.809 2.685 2.79 2.593 2.79 2.5 2.79 2.407 2.809 2.315 2.845 2.229 2.881 2.143 2.934 2.065 3 2M9.58 12.18C10.82 15.16 11.35 18.13 11.15 20.46 11.142 20.59 11.103 20.715 11.036 20.826 10.969 20.937 10.875 21.03 10.764 21.097 10.653 21.164 10.527 21.203 10.397 21.211 10.268 21.218 10.138 21.194 10.02 21.14 8.387 20.293 6.874 19.234 5.52 17.99"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Hop.displayName = "Hop";

Hop.metadata = {
  name: "Hop",
  category: "stroke/foodBeverage",
  tags: ["hop", "icon"],
  description: "Hop icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Hop;
