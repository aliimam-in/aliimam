import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const PNPM: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function PNPM(
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
        <g clipPath="url(#undefined-clip0_2039_612)">
          <path
            d="M23.561 7.463H16.244V.146H23.561V7.463ZM15.511 7.463H8.195V.146H15.511V7.463ZM7.463 7.463H.146V.146H7.463V7.463ZM23.561 15.512H16.244V8.195H23.561V15.512Z"
            fill="#f9ad00"
          />
          <path
            d="M15.511 15.512H8.195V8.195H15.511V15.512ZM15.511 23.561H8.195V16.244H15.511V23.561ZM23.561 23.561H16.244V16.244H23.561V23.561ZM7.463 23.561H.146V16.244H7.463V23.561Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2039_612">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

PNPM.displayName = "PNPM";

PNPM.metadata = {
  name: "PNPM",
  category: "icon/software",
  tags: ["icon"],
  description: "PNPM icon from icon/software category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PNPM;
