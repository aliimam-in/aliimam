import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Hawaii: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Hawaii(
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
          d="M30.8588 7C30.4127 5.2778 28.8619 4 27.0002 4H15V7H30.8588Z"
          fill="#fff"
        />
        <path d="M31 10H15V13H31V10Z" fill="#001b69" />
        <path
          d="M31 7.9982C30.9998 7.6514 30.9419 7.3208 30.8588 7H15V10H31V7.9982Z"
          fill="#ca0a2b"
        />
        <path d="M31 13H15V16H31V13Z" fill="#fff" />
        <path d="M31 16H1V19H31V16Z" fill="#ca0a2b" />
        <path
          d="M1.00024 24C1.00024 24.3474 1.05844 24.6786 1.14164 25H30.8588C30.9419 24.6792 30.9999 24.3486 31 24.0018V22H1.00024V24Z"
          fill="#fff"
        />
        <path d="M31 19H1V22H31V19Z" fill="#001b69" />
        <path
          d="M30.8588 25H1.1416C1.5877 26.7222 3.1385 28 5.0002 28H27.0002C28.8619 28 30.4127 26.7222 30.8588 25Z"
          fill="#ca0a2b"
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
          d="M16 15.667 11 12V13L15.091 16H16V15.667ZM16 4H15.752L10.291 8.004H11.655L16 4.818V4Z"
          fill="#ca0a2b"
        />
      </svg>
    );
  },
);

Hawaii.displayName = "Hawaii";

Hawaii.metadata = {
  name: "Hawaii",
  category: "flags/flags",
  tags: ["hawaii", "icon"],
  description: "Hawaii icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Hawaii;
