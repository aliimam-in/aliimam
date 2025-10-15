import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Palau: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Palau(
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
          fill="#4498f7"
        />
        <path
          d="M14 22C17.3137 22 20 19.3137 20 16C20 12.6863 17.3137 10 14 10C10.6863 10 8 12.6863 8 16C8 19.3137 10.6863 22 14 22Z"
          fill="#ffff54"
        />
      </svg>
    );
  },
);

Palau.displayName = "Palau";

Palau.metadata = {
  name: "Palau",
  category: "symbols/flags",
  tags: ["palau", "icon"],
  description: "Palau icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Palau;
