import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Zoom: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Zoom(
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
        <g clipPath="url(#undefined-clip0_2039_533)">
          <path
            d="M24 12C24 13.272 23.904 14.544 23.688 15.768C23.04 19.824 19.824 23.04 15.768 23.688C14.544 23.904 13.272 24 12 24C10.728 24 9.456 23.904 8.232 23.688C4.176 23.04 0.96 19.824 0.312 15.768C0.096 14.544 0 13.272 0 12C0 10.728 0.096 9.456 0.312 8.232C0.96 4.176 4.176 0.96 8.232 0.312C9.456 0.096 10.728 0 12 0C13.272 0 14.544 0.096 15.768 0.312C19.824 0.96 23.04 4.176 23.688 8.232C23.904 9.456 24 10.728 24 12Z"
            fill="url(#undefined-paint0_linear_2039_533)"
          />
          <path
            d="M19.1279 19.488H7.03195C6.23995 19.488 5.47195 19.056 5.11195 18.36C4.67995 17.544 4.84795 16.56 5.49595 15.912L13.9199 7.48804H7.87195C6.21595 7.48804 4.87195 6.14404 4.87195 4.48804H16.0079C16.7999 4.48804 17.5679 4.92004 17.9279 5.61604C18.3599 6.43204 18.1919 7.41604 17.5439 8.06404L9.14395 16.512H16.1279C17.7839 16.512 19.1279 17.832 19.1279 19.488Z"
            fill="#fff"
          />
        </g>
        <defs>
          <linearGradient
            id="undefined-paint0_linear_2039_533"
            x1="567.984"
            y1="2294.68"
            x2="1832.02"
            y2="105.317"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#0845bf" />
            <stop offset=".191" stopColor="#0950de" />
            <stop offset=".382" stopColor="#0b59f6" />
            <stop offset=".5" stopColor="#0b5cff" />
            <stop offset=".673" stopColor="#0e5efe" />
            <stop offset=".777" stopColor="#1665fc" />
            <stop offset=".863" stopColor="#246ff9" />
            <stop offset=".939" stopColor="#387ff4" />
            <stop offset="1" stopColor="#4f90ee" />
          </linearGradient>
          <clipPath id="undefined-clip0_2039_533">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Zoom.displayName = "Zoom";

Zoom.metadata = {
  name: "Zoom",
  category: "icon/software",
  tags: ["zoom", "icon"],
  description: "Zoom icon from icon/software category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Zoom;
