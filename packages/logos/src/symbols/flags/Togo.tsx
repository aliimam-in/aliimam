import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Togo: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Togo(
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
          d="M5 4H27C29.208 4 31 5.792 31 8V10H1V8C1 5.792 2.792 4 5 4ZM27 28 5 28C2.792 28 1 26.208 1 24V22L31 22V24C31 26.208 29.208 28 27 28Z"
          fill="#2d684e"
        />
        <path d="M1 18H31V23H1V18ZM1 9H31V14H1V9Z" fill="#f8d147" />
        <path d="M1 13.5H31V18.5H1V13.5Z" fill="#2d684e" />
        <path d="M5 4H15.5V18.5H1V8C1 5.792 2.792 4 5 4Z" fill="#c22b38" />
        <path
          d="M9.802 12.162L12.312 10.338H9.209L8.25 7.38599L7.291 10.338H4.187L6.698 12.162L5.739 15.114L8.25 13.289L10.761 15.114L9.802 12.162Z"
          fill="#fff"
        />
      </svg>
    );
  },
);

Togo.displayName = "Togo";

Togo.metadata = {
  name: "Togo",
  category: "symbols/flags",
  tags: ["togo", "icon"],
  description: "Togo icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Togo;
