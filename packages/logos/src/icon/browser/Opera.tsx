import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Opera: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Opera(
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
        <g clipPath="url(#undefined-clip0_2039_382)">
          <path
            d="M8.0496 5.2368C6.7224 6.804 5.8632 9.1176 5.8056 11.7168V12.2832C5.8632 14.8824 6.7224 17.196 8.0496 18.7632C9.7728 20.9976 12.3312 22.416 15.1872 22.416C16.944 22.416 18.5904 21.8784 19.9968 20.9448C17.8848 22.836 15.1008 23.988 12.0456 24H12C5.3736 24 0 18.6264 0 12C0 5.5632 5.0664 0.311998 11.4288 0.0143986C11.6184 0.00479889 11.808 0 12 0C15.072 0 17.8752 1.1544 19.9968 3.0528C18.5904 2.1216 16.9464 1.584 15.1872 1.584C12.3312 1.584 9.7728 3.0024 8.0496 5.2368Z"
            fill="url(#undefined-paint0_linear_2039_382)"
          />
          <path
            d="M8.04962 18.7632C9.15122 20.064 10.572 20.8464 12.1272 20.8464C15.6216 20.8464 18.4512 16.8864 18.4512 12C18.4512 7.11362 15.6192 3.15362 12.1272 3.15362C10.5744 3.15362 9.15122 3.93842 8.04962 5.23682C9.77282 3.00242 12.3312 1.58402 15.1872 1.58402C16.944 1.58402 18.5904 2.12162 19.9968 3.05282C22.4544 5.25122 24 8.44562 24 12C24 15.5544 22.4544 18.7488 19.9968 20.9448C18.5904 21.8784 16.9464 22.416 15.1872 22.416C12.3312 22.416 9.77282 20.9976 8.04962 18.7632Z"
            fill="url(#undefined-paint1_linear_2039_382)"
          />
        </g>
        <defs>
          <linearGradient
            id="undefined-paint0_linear_2039_382"
            x1="9.999"
            y1="23.609"
            x2="9.999"
            y2=".349"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".3" stopColor="#ff1b2d" />
            <stop offset=".438" stopColor="#fa1a2c" />
            <stop offset=".594" stopColor="#ed1528" />
            <stop offset=".758" stopColor="#d60e21" />
            <stop offset=".927" stopColor="#b70519" />
            <stop offset="1" stopColor="#a70014" />
          </linearGradient>
          <linearGradient
            id="undefined-paint1_linear_2039_382"
            x1="16.025"
            y1="22.238"
            x2="16.025"
            y2="1.666"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9c0000" />
            <stop offset=".7" stopColor="#ff4b4b" />
          </linearGradient>
          <clipPath id="undefined-clip0_2039_382">
            <path
              fill="#fff"
              transform="matrix(1 0 0 -1 0 24)"
              d="M0 0H24V24H0z"
            />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Opera.displayName = "Opera";

Opera.metadata = {
  name: "Opera",
  category: "icon/browser",
  tags: ["opera", "icon"],
  description: "Opera icon from icon/browser category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Opera;
