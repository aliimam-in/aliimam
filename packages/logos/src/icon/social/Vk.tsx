import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Vk: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Vk(
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
        <g clipPath="url(#undefined-clip0_2066_1343)">
          <path
            d="M0 11.52C0 6.08906 0 3.37406 1.6875 1.6875C3.375 0 6.08906 0 11.52 0H12.48C17.9109 0 20.6259 0 22.3125 1.6875C24 3.375 24 6.08906 24 11.52V12.48C24 17.9109 24 20.6259 22.3125 22.3125C20.625 24 17.9109 24 12.48 24H11.52C6.08906 24 3.37406 24 1.6875 22.3125C0 20.625 0 17.9119 0 12.4809V11.5209V11.52Z"
            fill="#07f"
          />
          <path
            d="M12.7697 17.2903C7.30036 17.2903 4.18036 13.5403 4.05005 7.30029H6.79036C6.88036 11.88 8.89974 13.8197 10.5 14.22V7.30029H13.08V11.25C14.6597 11.0803 16.32 9.28029 16.8797 7.30029H19.4597C19.0304 9.73967 17.2304 11.5397 15.9497 12.2803C17.2304 12.8803 19.2797 14.4497 20.0597 17.2903H17.22C16.6107 15.39 15.09 13.92 13.08 13.7203V17.2903H12.7707H12.7697Z"
            fill="#fff"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_1343">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Vk.displayName = "Vk";

Vk.metadata = {
  name: "Vk",
  category: "icon/social",
  tags: ["vk", "icon"],
  description: "Vk icon from icon/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Vk;
