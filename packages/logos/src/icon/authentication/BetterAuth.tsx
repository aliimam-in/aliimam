import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const BetterAuth: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function BetterAuth(
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
      <g clipPath="url(#undefined-clip0_2062_2085)">
        <path d="M0 0H24V24H0V0Z" fill="currentColor" />
        <path
          d="M3.312 5.80798H7.48742V18.24H3.312V5.80798ZM16.2036 5.80798H20.64V18.24H16.2036V5.80798Z"
          fill="#fff"
        />
        <path
          d="M20.51 5.808V9.814H12.133V5.808H20.51ZM20.64 14.234V18.24H12.133V14.234H20.64ZM12.133 9.814V14.234H7.487V9.814H12.133Z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2062_2085">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

BetterAuth.displayName = "BetterAuth";

BetterAuth.metadata = {
  name: "BetterAuth",
  category: "icon/authentication",
  tags: ["better", "auth", "icon"],
  description: "BetterAuth icon from icon/authentication category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BetterAuth;
