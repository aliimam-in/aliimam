import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Tonga: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Tonga(
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
          fill="#b22518"
        />
        <path d="M5 4H16V16H1V8C1 5.792 2.792 4 5 4Z" fill="#fff" />
        <path d="M7.5 6.5H10V14H7.5V6.5Z" fill="#b22518" />
        <path d="M12.5 9V11.5H5V9H12.5Z" fill="#b22518" />
      </svg>
    );
  },
);

Tonga.displayName = "Tonga";

Tonga.metadata = {
  name: "Tonga",
  category: "symbols/flags",
  tags: ["tonga", "icon"],
  description: "Tonga icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Tonga;
