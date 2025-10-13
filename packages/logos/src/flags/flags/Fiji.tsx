import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Fiji: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Fiji(
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
          fill="#77b5e1"
        />
        <path d="M5 4H16V16H1V8C1 5.792 2.792 4 5 4Z" fill="#071b65" />
        <path
          d="M6.5 13.774V16H10.5V13.773L13.537 16H16V14.759L12.238 12H16V8H13.26L16 5.991V4H14.559L10.5 6.977V4H6.5V6.794L3.243 4.405C2.476 4.779 1.854 5.388 1.457 6.143L3.989 8.001H1V12.001H4.763L1 14.761V16.001H3.464L6.5 13.774Z"
          fill="#fff"
        />
        <path
          d="M1.806 5.589 5.091 8H6.455L2.36 4.995C2.156 5.175 1.97 5.372 1.806 5.589ZM1 16 6.454 12V13L2.363 16H1Z"
          fill="#b92932"
        />
        <path d="M9.5 16H7.5V11H1V9H7.5V4H9.5V9H16V11H9.5V16Z" fill="#b92932" />
        <path
          d="M16 15.667 11 12V13L15.091 16H16V15.667ZM16 4H15.752L10.291 8.004H11.655L16 4.818V4Z"
          fill="#b92932"
        />
        <path
          d="M23.441 21.111L23.389 21.084C21.09 19.888 19.889 19.218 19.874 18.225L19.901 11.875H27.124V18.234C27.139 19.15 25.899 19.943 23.606 21.086L23.549 21.114L23.441 21.111Z"
          fill="#fff"
        />
        <path
          d="M27 12V18.234C27.014 19.081 25.746 19.88 23.551 20.974L23.499 21L23.447 20.973C21.192 19.8 20.014 19.144 20 18.223L20.027 12H27ZM27.25 11.75H19.778V11.999L19.75 18.222C19.766 19.291 20.989 19.977 23.332 21.195L23.384 21.222L23.497 21.281L23.611 21.224L23.663 21.198C26.002 20.033 27.266 19.215 27.25 18.23V12V11.75Z"
          fill="currentColor"
        />
        <path
          d="M20 12H27V14H20V12ZM24 20.745V14H23V20.738C23.148 20.816 23.289 20.89 23.447 20.973L23.499 21 23.551 20.974C23.709 20.895 23.851 20.821 24 20.745Z"
          fill="#b92932"
        />
        <path d="M20 17V16H27V17H20Z" fill="#b92932" />
      </svg>
    );
  },
);

Fiji.displayName = "Fiji";

Fiji.metadata = {
  name: "Fiji",
  category: "flags/flags",
  tags: ["fiji", "icon"],
  description: "Fiji icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Fiji;
