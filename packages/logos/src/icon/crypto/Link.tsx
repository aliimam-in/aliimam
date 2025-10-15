import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Link: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Link(
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
        <g clipPath="url(#undefined-clip0_2062_2928)">
          <path
            d="M12 24C18.6275 24 24 18.6275 24 12C24 5.37258 18.6275 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6275 5.37258 24 12 24Z"
            fill="#375bd2"
          />
          <path
            d="M12 3L4.20569 7.5V16.5L12 21L19.7942 16.5V7.5L12 3ZM16.4912 14.5932L12 17.186L7.50869 14.5932V9.4068L12 6.8139L16.4912 9.4068V14.5932Z"
            fill="#fff"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2062_2928">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Link.displayName = "Link";

Link.metadata = {
  name: "Link",
  category: "icon/crypto",
  tags: ["link", "icon"],
  description: "Link icon from icon/crypto category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Link;
