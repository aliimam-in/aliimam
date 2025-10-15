import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Neon: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Neon(
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
        <g clipPath="url(#undefined-clip0_2062_3085)">
          <path
            d="M0 4.13803C0 1.85269 1.85269 0 4.13803 0H19.8619C22.1473 0 24 1.85269 24 4.13803V17.5114C24 19.8754 21.008 20.9014 19.5574 19.0354L15.0206 13.1993V20.276C15.0206 22.3327 13.3534 24 11.2967 24H4.13794C1.85278 24 0 22.1473 0 19.862V4.13803ZM4.13803 3.31069C3.68062 3.31069 3.31069 3.68062 3.31069 4.13737V19.8621C3.31069 20.3194 3.68062 20.69 4.13737 20.69H11.4206C11.6494 20.69 11.71 20.5046 11.71 20.276V10.7866C11.71 8.42203 14.702 7.39603 16.1533 9.26269L20.69 15.098V4.13812C20.69 3.68072 20.7326 3.31078 20.276 3.31078H4.13812L4.13803 3.31069Z"
            fill="#00e0d9"
          />
          <path
            d="M19.8619 0C22.1473 0 23.9999 1.85269 23.9999 4.13803V17.5114C23.9999 19.8754 21.0079 20.9014 19.5573 19.0354L15.0206 13.1993V20.276C15.0206 22.3327 13.3533 24 11.2966 24C11.4063 24 11.5114 23.9565 11.5889 23.8789C11.6664 23.8014 11.71 23.6963 11.71 23.5867V10.7867C11.71 8.42203 14.7019 7.39603 16.1533 9.26269L20.6899 15.098V0.827344C20.6899 0.370687 20.3193 0 19.8619 0Z"
            fill="#63f655"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2062_3085">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Neon.displayName = "Neon";

Neon.metadata = {
  name: "Neon",
  category: "icon/database",
  tags: ["neon", "icon"],
  description: "Neon icon from icon/database category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Neon;
