import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Sofa: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Sofa(
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
          d="M20 9V6C20 5.47 19.789 4.961 19.414 4.586 19.039 4.211 18.53 4 18 4H6C5.47 4 4.961 4.211 4.586 4.586 4.211 4.961 4 5.47 4 6V9M2 16C2 16.53 2.211 17.039 2.586 17.414 2.961 17.789 3.47 18 4 18H20C20.53 18 21.039 17.789 21.414 17.414 21.789 17.039 22 16.53 22 16V11C22 10.47 21.789 9.961 21.414 9.586 21.039 9.211 20.53 9 20 9 19.47 9 18.961 9.211 18.586 9.586 18.211 9.961 18 10.47 18 11V12.5C18 12.633 17.947 12.76 17.854 12.854 17.76 12.947 17.633 13 17.5 13H6.5C6.367 13 6.24 12.947 6.146 12.854 6.053 12.76 6 12.633 6 12.5V11C6 10.47 5.789 9.961 5.414 9.586 5.039 9.211 4.53 9 4 9 3.47 9 2.961 9.211 2.586 9.586 2.211 9.961 2 10.47 2 11V16ZM4 18V20M20 18V20M12 4V13"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Sofa.displayName = "Sofa";

Sofa.metadata = {
  name: "Sofa",
  category: "stroke/home",
  tags: ["sofa", "icon"],
  description: "Sofa icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Sofa;
