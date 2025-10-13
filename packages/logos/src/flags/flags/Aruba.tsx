import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Aruba: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Aruba(
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
          fill="#4091df"
        />
        <path d="M31 18H1V20H31V18ZM31 22H1V24H31V22Z" fill="#ffd203" />
        <path
          d="M7.23972 12.7031L3.24512 11.4717L7.23972 10.2402L8.47122 6.24512L9.70262 10.2402L13.6973 11.4717L9.70262 12.7031L8.47122 16.6973L7.23972 12.7031Z"
          fill="#fff"
        />
        <path
          d="M8.4712 7.94248L9.30291 10.6395L11.9999 11.4712L9.30291 12.3029L8.4712 14.9999L7.6395 12.303L4.9425 11.4711L7.6395 10.6394L8.4712 7.94248Z"
          fill="#db4647"
        />
      </svg>
    );
  },
);

Aruba.displayName = "Aruba";

Aruba.metadata = {
  name: "Aruba",
  category: "flags/flags",
  tags: ["aruba", "icon"],
  description: "Aruba icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Aruba;
