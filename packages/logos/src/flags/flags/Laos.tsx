import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Laos: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Laos(
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
        <path d="M1 10H31V22H1V10Z" fill="#0b2364" />
        <path
          d="M5 4H27C29.208 4 31 5.792 31 8V11H1V8C1 5.792 2.792 4 5 4ZM27 28 5 28C2.792 28 1 26.208 1 24V21L31 21V24C31 26.208 29.208 28 27 28Z"
          fill="#be2a2c"
        />
        <path
          d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z"
          fill="#fff"
        />
      </svg>
    );
  },
);

Laos.displayName = "Laos";

Laos.metadata = {
  name: "Laos",
  category: "flags/flags",
  tags: ["laos", "icon"],
  description: "Laos icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Laos;
