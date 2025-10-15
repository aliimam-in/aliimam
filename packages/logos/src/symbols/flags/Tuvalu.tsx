import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Tuvalu: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Tuvalu(
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
          d="M27.0002 4H5.00018C2.79104 4 1.00018 5.79086 1.00018 8V24C1.00018 26.2091 2.79104 28 5.00018 28H27.0002C29.2093 28 31.0002 26.2091 31.0002 24V8C31.0002 5.79086 29.2093 4 27.0002 4Z"
          fill="#0a9de0"
        />
        <path d="M5 4H16V16H1V8C1 5.7923 2.7923 4 5 4Z" fill="#001b69" />
        <path
          d="M6.50018 13.7737V16H10.5002V13.7728L13.5373 16H16.0002V14.7589L12.2383 12H16.0002V8H13.2602L16.0002 5.9907V4H14.5592L10.5002 6.9769V4H6.50018V6.7935L3.24358 4.4043C2.47608 4.7784 1.85408 5.3877 1.45798 6.1422L3.99008 8H1.00018V12H4.76338L1.00018 14.7599V16H3.46438L6.50018 13.7737Z"
          fill="#fff"
        />
        <path
          d="M1.806 5.589 5.091 8H6.455L2.36 4.995C2.155 5.175 1.97 5.372 1.806 5.589ZM1 16 6.454 12V13L2.364 16H1Z"
          fill="#ca0a2b"
        />
        <path
          d="M9.50018 16H7.50018V11H1.00018V9H7.50018V4H9.50018V9H16.0002V11H9.50018V16Z"
          fill="#ca0a2b"
        />
        <path
          d="M16 15.667 11 12V13L15.091 16H16V15.667ZM16 4H15.752L10.291 8.004H11.655L16 4.818V4Z"
          fill="#ca0a2b"
        />
        <path
          d="M12.566 24.686 12.166 23.454 11.765 24.686H10.469L11.518 25.448 11.117 26.68 12.166 25.919 13.214 26.68 12.814 25.448 13.862 24.686H12.566ZM17.455 18.535 16.407 19.297 15.358 18.535 15.759 19.768 14.711 20.53H16.006L16.407 21.762 16.807 20.53H18.103L17.055 19.768 17.455 18.535ZM17.055 24.009 17.455 22.776 16.407 23.538 15.358 22.776 15.759 24.009 14.711 24.771H16.006L16.407 26.003 16.807 24.771H18.103L17.055 24.009ZM21.696 12.768 20.648 13.529 19.6 12.768 20 14 18.952 14.762H20.248L20.648 15.994 21.049 14.762H22.344L21.296 14 21.696 12.768ZM21.296 22.821 21.696 21.589 20.648 22.351 19.6 21.589 20 22.821 18.952 23.583H20.248L20.648 24.816 21.049 23.583H22.344L21.296 22.821ZM25.259 11.41 24.211 12.172 23.162 11.41 23.563 12.643 22.514 13.405H23.81L24.211 14.637 24.611 13.405H25.907L24.859 12.643 25.259 11.41ZM24.611 19.427 24.211 18.195 23.81 19.427H22.514L23.563 20.189 23.162 21.421 24.211 20.66 25.259 21.421 24.859 20.189 25.907 19.427H24.611ZM27.125 9.841 26.725 11.073 27.773 10.311 28.821 11.073 28.421 9.841 29.469 9.079H28.174L27.773 7.846 27.373 9.079H26.077L27.125 9.841ZM28.174 17.222 27.773 15.989 27.373 17.222H26.077L27.125 17.984 26.725 19.216 27.773 18.454 28.821 19.216 28.421 17.984 29.469 17.222H28.174Z"
          fill="#fede02"
        />
      </svg>
    );
  },
);

Tuvalu.displayName = "Tuvalu";

Tuvalu.metadata = {
  name: "Tuvalu",
  category: "symbols/flags",
  tags: ["tuvalu", "icon"],
  description: "Tuvalu icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Tuvalu;
