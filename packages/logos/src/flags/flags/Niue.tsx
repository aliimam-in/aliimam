import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Niue: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Niue(
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
        <path
          d="M27.0002 4H5.00024C2.7911 4 1.00024 5.79086 1.00024 8V24C1.00024 26.2091 2.7911 28 5.00024 28H27.0002C29.2094 28 31.0002 26.2091 31.0002 24V8C31.0002 5.79086 29.2094 4 27.0002 4Z"
          fill="#fede02"
        />
        <path d="M5 4H16V16H1V8C1 5.7923 2.7923 4 5 4Z" fill="#001b69" />
        <path
          d="M6.50024 13.7737V16H10.5002V13.7728L13.5373 16H16.0002V14.7589L12.2383 12H16.0002V8H13.2602L16.0002 5.9907V4H14.5592L10.5002 6.9769V4H6.50024V6.7935L3.24364 4.4043C2.47614 4.7784 1.85414 5.3877 1.45804 6.1422L3.99014 8H1.00024V12H4.76344L1.00024 14.7599V16H3.46444L6.50024 13.7737Z"
          fill="#fff"
        />
        <path
          d="M1.806 5.589 5.091 8H6.455L2.359 4.995C2.155 5.175 1.97 5.372 1.806 5.589ZM1 16 6.454 12V13L2.363 16H1Z"
          fill="#ca0a2b"
        />
        <path
          d="M9.50024 16H7.50024V11H1.00024V9H7.50024V4H9.50024V9H16.0002V11H9.50024V16Z"
          fill="#ca0a2b"
        />
        <path
          d="M4.503 10.219 5.105 9.781H4.36L4.13 9.073 3.9 9.781H3.155L3.758 10.219 3.528 10.927 4.13 10.49 4.733 10.927 4.503 10.219ZM12.971 10.219 13.574 9.781H12.829L12.599 9.073 12.369 9.781H11.624L12.227 10.219 11.996 10.927 12.599 10.49 13.201 10.927 12.971 10.219ZM8.872 6.948 9.475 6.51H8.73L8.5 5.802 8.27 6.51H7.525L8.128 6.948 7.898 7.656 8.5 7.219 9.102 7.656 8.872 6.948ZM8.872 13.354 9.475 12.917H8.73L8.5 12.209 8.27 12.917H7.525L8.128 13.354 7.898 14.063 8.5 13.625 9.102 14.063 8.872 13.354Z"
          fill="#fede02"
        />
        <path
          d="M8.49994 11.5704C9.36731 11.5704 10.0704 10.8673 10.0704 9.99994C10.0704 9.13258 9.36731 8.42944 8.49994 8.42944C7.63258 8.42944 6.92944 9.13258 6.92944 9.99994C6.92944 10.8673 7.63258 11.5704 8.49994 11.5704Z"
          fill="#001b69"
        />
        <path
          d="M9.0685 10.1887L9.9884 9.52036H8.8514L8.5 8.43896L8.1486 9.52036H7.0116L7.9315 10.1887L7.5801 11.27L8.5 10.6017L9.4199 11.27L9.0685 10.1887Z"
          fill="#fede02"
        />
        <path
          d="M16 15.667 11 12V13L15.091 16H16V15.667ZM16 4H15.752L10.291 8.004H11.655L16 4.818V4Z"
          fill="#ca0a2b"
        />
      </svg>
    );
  },
);

Niue.displayName = "Niue";

Niue.metadata = {
  name: "Niue",
  category: "flags/flags",
  tags: ["niue", "icon"],
  description: "Niue icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Niue;
