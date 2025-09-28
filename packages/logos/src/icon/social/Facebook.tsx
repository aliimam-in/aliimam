import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Facebook: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Facebook(
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
      <g clipPath="url(#undefined-clip0_2041_37)">
        <path
          d="M10 23.8667C4.33333 22.8667 0 17.9333 0 12C0 5.4 5.4 0 12 0C18.6 0 24 5.4 24 12C24 17.9333 19.6667 22.8667 14 23.8667L13.3333 23.3333H10.6667L10 23.8667Z"
          fill="url(#undefined-paint0_linear_2041_37)"
        />
        <path
          d="M16.6667 15.3333L17.2 12H14V9.66663C14 8.73329 14.3333 7.99996 15.8 7.99996H17.3333V4.93329C16.4667 4.79996 15.5333 4.66663 14.6667 4.66663C11.9333 4.66663 10 6.33329 10 9.33329V12H7V15.3333H10V23.8C10.6667 23.9333 11.3333 24 12 24C12.6667 24 13.3333 23.9333 14 23.8V15.3333H16.6667Z"
          fill="#fff"
        />
      </g>
      <defs>
        <linearGradient
          id="undefined-paint0_linear_2041_37"
          x1="1200"
          y1="2316.93"
          x2="1200"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0062e0" />
          <stop offset="1" stopColor="#19afff" />
        </linearGradient>
        <clipPath id="undefined-clip0_2041_37">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Facebook.displayName = "Facebook";

Facebook.metadata = {
  name: "Facebook",
  category: "icon/social",
  tags: ["facebook", "icon"],
  description: "Facebook icon from icon/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Facebook;
