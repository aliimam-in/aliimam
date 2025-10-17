import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Hono: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Hono(
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
        <g clipPath="url(#undefined-clip0_2066_398)">
          <path
            opacity=".993"
            d="M11.9549 0.00208565C12.0199 -0.00613253 12.0774 0.0099402 12.127 0.0502311C13.9545 2.23567 15.6776 4.50301 17.2906 6.84492C18.4851 8.60718 19.5015 10.4704 20.3397 12.4349C21.6784 15.9336 20.9817 18.9776 18.2497 21.5668C15.8592 23.5464 13.1053 24.3175 9.98781 23.8799C6.26144 23.1354 3.7288 21.0232 2.38982 17.543C2.04106 16.41 1.92632 15.2535 2.04559 14.0734C2.2442 12.0422 2.73597 10.0824 3.52091 8.1943C3.84799 7.42398 4.27423 6.71721 4.79955 6.07401C5.22772 6.57371 5.63779 7.08805 6.02899 7.61605C6.21008 7.8015 6.39859 7.97823 6.59453 8.14616C8.09041 5.23707 9.87723 2.52252 11.955 0.00208565H11.9549Z"
            fill="#ff5b11"
          />
          <path
            d="M11.6105 3.90547C13.415 5.95638 15.0461 8.14096 16.5037 10.4592C16.9598 11.2244 17.3386 12.0314 17.6348 12.8687C18.2536 15.2544 17.5898 17.2221 15.6431 18.7719C13.7604 20.07 11.6949 20.4555 9.44669 19.9284C7.02226 19.1912 5.62072 17.5929 5.24198 15.1335C5.1501 14.3581 5.23211 13.6031 5.48794 12.8687C5.85096 11.9644 6.2953 11.0936 6.81571 10.2665L8.29103 8.14612C9.40715 6.73979 10.5137 5.32619 11.6105 3.9054L11.6105 3.90547Z"
            fill="#ff9758"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_398">
            <path fill="#fff" transform="translate(2)" d="M0 0H19V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Hono.displayName = "Hono";

Hono.metadata = {
  name: "Hono",
  category: "icon/framework",
  tags: ["hono", "icon"],
  description: "Hono icon from icon/framework category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Hono;
