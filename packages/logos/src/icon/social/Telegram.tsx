import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Telegram: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Telegram(
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
      <g clipPath="url(#undefined-clip0_2041_203)">
        <path
          d="M12 0C8.81812 0 5.76375 1.26506 3.51562 3.51469C1.26518 5.76521 0.000623381 8.81734 0 12C0 15.1813 1.26562 18.2357 3.51562 20.4853C5.76375 22.7349 8.81812 24 12 24C15.1819 24 18.2362 22.7349 20.4844 20.4853C22.7344 18.2357 24 15.1813 24 12C24 8.81869 22.7344 5.76431 20.4844 3.51469C18.2362 1.26506 15.1819 0 12 0Z"
          fill="url(#undefined-paint0_linear_2041_203)"
        />
        <path
          d="M5.43184 11.8733C8.93059 10.3493 11.2631 9.34448 12.4293 8.85904C15.7631 7.47285 16.455 7.2321 16.9068 7.22395C17.0062 7.22235 17.2275 7.24692 17.3718 7.36364C17.4918 7.46207 17.5256 7.5952 17.5425 7.68867C17.5575 7.78204 17.5781 7.99485 17.5612 8.16098C17.3812 10.0585 16.5993 14.6631 16.2018 16.7884C16.035 17.6877 15.7031 17.9892 15.3825 18.0186C14.685 18.0827 14.1562 17.5581 13.4812 17.1158C12.4256 16.4234 11.8293 15.9925 10.8037 15.3169C9.61872 14.5362 10.3875 14.107 11.0625 13.4057C11.2387 13.2222 14.31 10.4294 14.3681 10.176C14.3756 10.1444 14.3831 10.0262 14.3118 9.96398C14.2425 9.90154 14.1393 9.92292 14.0643 9.93979C13.9575 9.96379 12.2718 11.079 9.00184 13.2854C8.52372 13.6142 8.09059 13.7745 7.70059 13.7661C7.27309 13.7569 6.44809 13.5239 5.83497 13.3247C5.08497 13.0804 4.48684 12.9512 4.53934 12.5363C4.56559 12.3203 4.86372 12.0992 5.43184 11.8733Z"
          fill="#fff"
        />
      </g>
      <defs>
        <linearGradient
          id="undefined-paint0_linear_2041_203"
          x1="1200"
          y1="0"
          x2="1200"
          y2="2400"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2aabee" />
          <stop offset="1" stopColor="#229ed9" />
        </linearGradient>
        <clipPath id="undefined-clip0_2041_203">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Telegram.displayName = "Telegram";

Telegram.metadata = {
  name: "Telegram",
  category: "icon/social",
  tags: ["telegram", "icon"],
  description: "Telegram icon from icon/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Telegram;
