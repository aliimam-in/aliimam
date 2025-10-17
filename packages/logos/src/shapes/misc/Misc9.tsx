import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Misc9: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Misc9(
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
        <g clipPath="url(#undefined-clip0_2068_655)">
          <path
            d="M1.01681 9.46607C3.24075 2.74795 8.49977 0.492938 10.7885 0.175654C24.017 -1.65824 26.6659 11.3201 21.5938 18.0283C17.2201 23.8128 9.51725 24.8906 4.89464 23.3895C0.823053 22.0673 -1.43821 16.8823 1.01681 9.46607Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_655">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Misc9.displayName = "Misc9";

Misc9.metadata = {
  name: "Misc9",
  category: "shapes/misc",
  tags: ["misc", "icon"],
  description: "Misc9 icon from shapes/misc category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Misc9;
