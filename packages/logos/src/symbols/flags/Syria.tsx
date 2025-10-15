import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Syria: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Syria(
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
        <path d="M1 11H31V21H1V11Z" fill="#fff" />
        <path
          d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4Z"
          fill="#be2a2c"
        />
        <path
          d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z"
          fill="currentColor"
        />
        <path
          d="M11.395 16.551 13.36 15.123H10.931L10.18 12.812 9.429 15.123H7L8.965 16.551 8.215 18.861 10.18 17.433 12.146 18.861 11.395 16.551ZM20.605 16.551 18.64 15.123H21.069L21.82 12.813 22.571 15.123H25L23.035 16.551 23.785 18.861 21.82 17.433 19.854 18.861 20.605 16.551Z"
          fill="#357942"
        />
      </svg>
    );
  },
);

Syria.displayName = "Syria";

Syria.metadata = {
  name: "Syria",
  category: "symbols/flags",
  tags: ["syria", "icon"],
  description: "Syria icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Syria;
