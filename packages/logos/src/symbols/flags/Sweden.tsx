import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Sweden: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Sweden(
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
          fill="#2e69a4"
        />
        <path d="M31 14H15V4H11V14H1V18H11V28H15V18H31V14Z" fill="#f7cf46" />
      </svg>
    );
  },
);

Sweden.displayName = "Sweden";

Sweden.metadata = {
  name: "Sweden",
  category: "symbols/flags",
  tags: ["sweden", "icon"],
  description: "Sweden icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Sweden;
