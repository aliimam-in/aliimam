import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Gmail: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Gmail(
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
        <g clipPath="url(#undefined-clip0_2062_2730)">
          <path
            d="M1.63641 21H5.45456V11.59L0 7.43848V19.3394C0 20.2569 0.732281 21.0001 1.63641 21.0001V21Z"
            fill="#4285f4"
          />
          <path
            d="M18.5454 21H22.3636C23.2677 21 24 20.2568 24 19.3394V7.43848L18.5454 11.59V21Z"
            fill="#34a853"
          />
          <path
            d="M18.5454 4.39405V11.59L24 7.43847V5.22437C24 3.17215 21.6914 2.00005 20.0727 3.23166L18.5454 4.39405Z"
            fill="#fbbc04"
          />
          <path
            d="M5.45459 11.5899V4.39404L12 9.37585L18.5455 4.39404V11.5899L12 16.5717L5.45459 11.5899Z"
            fill="#ea4335"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M0 5.22437V7.43847L5.45456 11.59V4.39406L3.92728 3.23166C2.30859 2.00005 0 3.17215 0 5.22428V5.22437Z"
            fill="#c5221f"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2062_2730">
            <path fill="#fff" transform="translate(0 2)" d="M0 0H24V19H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Gmail.displayName = "Gmail";

Gmail.metadata = {
  name: "Gmail",
  category: "icon/google",
  tags: ["gmail", "icon"],
  description: "Gmail icon from icon/google category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Gmail;
