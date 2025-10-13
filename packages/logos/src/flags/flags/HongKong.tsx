import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const HongKong: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function HongKong(
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
      viewBox="0 0 32 32"
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
      <g clipPath="url(#undefined-clip0_2057_1383)">
        <path
          d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
          fill="#db362f"
        />
        <path
          d="M17.3029 9.57707C15.7349 9.33407 14.2059 10.2051 13.6159 11.6781C12.9159 13.4261 13.7649 15.4101 15.5129 16.1101C15.3539 15.9671 15.2829 15.7601 15.1999 15.5631C14.8859 14.8211 15.2329 13.9651 15.9749 13.6521C16.0669 13.6131 16.1559 13.5661 16.2389 13.5121C17.0289 12.9991 17.2529 11.9441 16.7399 11.1541C16.6889 11.0761 16.6489 10.9911 16.6199 10.9011C16.4429 10.3471 16.7479 9.75407 17.3019 9.57607L17.3029 9.57707Z"
          fill="#fff"
        />
        <path
          d="M19.319 12.819C17.44 12.693 15.815 14.114 15.69 15.993 15.777 15.798 15.952 15.666 16.113 15.526 16.722 14.998 17.643 15.064 18.171 15.673 18.236 15.749 18.308 15.818 18.386 15.881 19.118 16.473 20.191 16.361 20.784 15.629 20.843 15.556 20.911 15.492 20.987 15.437 21.459 15.097 22.118 15.204 22.458 15.676 22.205 14.109 20.903 12.925 19.319 12.819ZM15.783 16.324C15.827 16.533 15.763 16.743 15.715 16.951 15.533 17.736 14.749 18.224 13.964 18.042 13.867 18.019 13.767 18.005 13.668 18 12.728 17.951 11.926 18.673 11.876 19.613 11.871 19.706 11.854 19.799 11.824 19.888 11.642 20.441 11.046 20.741 10.494 20.559 11.62 21.678 13.369 21.871 14.712 21.026 16.306 20.023 16.785 17.919 15.782 16.325L15.783 16.324Z"
          fill="#fff"
        />
        <path
          d="M19.997 18.596C19.536 16.77 17.682 15.664 15.857 16.125 16.069 16.147 16.249 16.273 16.432 16.383 17.122 16.799 17.344 17.695 16.928 18.385 16.876 18.471 16.832 18.561 16.797 18.654 16.46 19.533 16.899 20.519 17.777 20.856 17.864 20.89 17.947 20.935 18.022 20.99 18.491 21.334 18.593 21.993 18.249 22.463 19.661 21.738 20.385 20.134 19.997 18.596ZM14.954 16.445C14.151 16.514 13.445 15.92 13.376 15.117 13.367 15.017 13.35 14.919 13.324 14.822 13.08 13.913 12.146 13.373 11.236 13.617 11.146 13.641 11.052 13.653 10.959 13.653 10.377 13.65 9.908 13.177 9.91 12.595 9.194 14.011 9.55 15.735 10.769 16.751 12.215 17.957 14.365 17.762 15.571 16.316 15.386 16.423 15.167 16.427 14.954 16.445Z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2057_1383">
          <path fill="#fff" d="M0 0H32V32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

HongKong.displayName = "HongKong";

HongKong.metadata = {
  name: "HongKong",
  category: "flags/flags",
  tags: ["hong", "kong", "icon"],
  description: "HongKong icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default HongKong;
