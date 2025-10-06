import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Dam: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Dam(
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
          d="M11 11.31C12.17 11.87 12.54 13 14.5 13 17 13 17 11 19.5 11 20.8 11 21.4 11.5 22 12M11.75 18C12.1 18.5 13.2 19 14.5 19 17 19 17 17 19.5 17 20.8 17 21.4 17.5 22 18M2 10H6M2 14H6M2 18H6M2 6H6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 3C6.73478 3 6.48043 3.10536 6.29289 3.29289C6.10536 3.48043 6 3.73478 6 4V20C6 20.2652 6.10536 20.5196 6.29289 20.7071C6.48043 20.8946 6.73478 21 7 21H11C11.2652 21 11.5196 20.8946 11.7071 20.7071C11.8946 20.5196 12 20.2652 12 20L10 4C10 3.73478 9.89464 3.48043 9.70711 3.29289C9.51957 3.10536 9.26522 3 9 3H7Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Dam.displayName = "Dam";

Dam.metadata = {
  name: "Dam",
  category: "stroke/buildings",
  tags: ["dam", "icon"],
  description: "Dam icon from stroke/buildings category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Dam;
