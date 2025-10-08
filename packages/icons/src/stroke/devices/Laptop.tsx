import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Laptop: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Laptop(
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
          d="M18 5C18.531 5 19.039 5.211 19.414 5.586 19.789 5.961 20 6.47 20 7V15.526C20 15.837 20.073 16.145 20.212 16.423L21.28 18.55C21.357 18.703 21.394 18.873 21.386 19.044 21.378 19.216 21.327 19.382 21.237 19.527 21.146 19.673 21.02 19.793 20.87 19.876 20.72 19.958 20.551 20.001 20.38 20H3.62C3.449 20.001 3.28 19.958 3.13 19.876 2.98 19.793 2.854 19.673 2.763 19.527 2.673 19.382 2.622 19.216 2.614 19.044 2.606 18.873 2.643 18.703 2.72 18.55L3.788 16.423C3.928 16.145 4 15.837 4 15.526V7C4 6.47 4.211 5.961 4.586 5.586 4.961 5.211 5.47 5 6 5H18ZM20.054 15.987H3.946"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Laptop.displayName = "Laptop";

Laptop.metadata = {
  name: "Laptop",
  category: "stroke/devices",
  tags: ["laptop", "icon"],
  description: "Laptop icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Laptop;
