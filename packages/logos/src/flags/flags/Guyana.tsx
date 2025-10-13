import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Guyana: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Guyana(
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
          d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
          fill="#4a926d"
        />
        <path
          d="M1 8V24C1 25.372 1.692 26.581 2.745 27.302L31 16L2.745 4.698C1.692 5.418 1 6.628 1 8Z"
          fill="#fff"
        />
        <path
          d="M2.917 26.156C2.336 25.594 2 24.819 2 24V7.99999C2 7.18099 2.336 6.40499 2.917 5.84399L28.308 16L2.917 26.156Z"
          fill="#f6c644"
        />
        <path
          d="M2.271 26.9111L15 16.0001L2.271 5.08911C1.493 5.81911 1 6.84911 1 8.00011V24.0001C1 25.1511 1.493 26.1811 2.271 26.9111Z"
          fill="currentColor"
        />
        <path
          d="M1.627 5.86694C1.235 6.48494 1 7.21394 1 7.99994V23.9999C1 24.7899 1.237 25.5219 1.632 26.1429L13.464 15.9999L1.627 5.86694Z"
          fill="#b02d30"
        />
      </svg>
    );
  },
);

Guyana.displayName = "Guyana";

Guyana.metadata = {
  name: "Guyana",
  category: "flags/flags",
  tags: ["guyana", "icon"],
  description: "Guyana icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Guyana;
