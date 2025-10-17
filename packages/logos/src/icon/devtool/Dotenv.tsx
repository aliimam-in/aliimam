import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Dotenv: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Dotenv(
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
        <g clipPath="url(#undefined-clip0_2066_383)">
          <path d="M24 0H0V24H24V0Z" fill="#09090b" />
          <path
            d="M24 0V24H0V0H24ZM10.933 15.89H6.84V21.41H11.038V20.48H7.955V18.977H10.725V18.047H7.955V16.823H10.933V15.889V15.89ZM13.079 15.89H11.995V21.41H13.03V17.81L15.256 21.41H16.374V15.89H15.338V19.576L13.079 15.889V15.89ZM18.196 15.89H16.988L18.961 21.41H20.151L22.127 15.89H20.945L19.593 19.975L18.196 15.889V15.89ZM5.4 19.68H3.72V21.36H5.4V19.68Z"
            fill="#ecd53f"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_383">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Dotenv.displayName = "Dotenv";

Dotenv.metadata = {
  name: "Dotenv",
  category: "icon/devtool",
  tags: ["dotenv", "icon"],
  description: "Dotenv icon from icon/devtool category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Dotenv;
