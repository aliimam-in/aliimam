import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Lit: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Lit(
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
        <g clipPath="url(#undefined-clip0_2066_903)">
          <path
            d="M6.75 14.4L8.6742 11.0455L11.5118 9.61194L16.2599 14.41L17.0639 19.0415L16.25 24L11.5 19.2L8.6742 17.2789L6.75 14.4Z"
            fill="#00e8ff"
          />
          <path
            d="M11.5 19.2V9.60005L16.25 4.80005V14.4L11.5 19.2ZM2 19.2L6.75 24L7.43296 19.4549L6.75 14.4L3.96368 16.1783L2 19.2Z"
            fill="#283198"
          />
          <path
            d="M6.75 14.4V4.8L11.5 0V9.6L6.75 14.4ZM16.25 24V14.4L21 9.6V19.2L16.25 24ZM2 19.2V9.6L6.75 14.4L2 19.2Z"
            fill="#324fff"
          />
          <path d="M6.75 24V14.4L11.5 19.2L6.75 24Z" fill="#0ff" />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_903">
            <path fill="#fff" transform="translate(2)" d="M0 0H19V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Lit.displayName = "Lit";

Lit.metadata = {
  name: "Lit",
  category: "icon/library",
  tags: ["lit", "icon"],
  description: "Lit icon from icon/library category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Lit;
