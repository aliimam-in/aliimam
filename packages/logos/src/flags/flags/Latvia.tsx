import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Latvia: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Latvia(
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
        <path d="M1 12H31V20H1V12Z" fill="#fff" />
        <path
          d="M5 4H27C29.208 4 31 5.792 31 8V13H1V8C1 5.792 2.792 4 5 4ZM27 28 5 28C2.792 28 1 26.208 1 24V19L31 19V24C31 26.208 29.208 28 27 28Z"
          fill="#922a35"
        />
      </svg>
    );
  },
);

Latvia.displayName = "Latvia";

Latvia.metadata = {
  name: "Latvia",
  category: "flags/flags",
  tags: ["latvia", "icon"],
  description: "Latvia icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Latvia;
