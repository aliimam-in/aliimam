import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Poland: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Poland(
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
          d="M1 24C1 26.209 2.791 28 5 28H27C29.209 28 31 26.209 31 24V15H1V24Z"
          fill="#cb2e40"
        />
        <path
          d="M27 4H5C2.791 4 1 5.791 1 8V16H31V8C31 5.791 29.209 4 27 4Z"
          fill="#fff"
        />
      </svg>
    );
  },
);

Poland.displayName = "Poland";

Poland.metadata = {
  name: "Poland",
  category: "flags/flags",
  tags: ["poland", "icon"],
  description: "Poland icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Poland;
