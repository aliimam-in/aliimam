import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Japan: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Japan(
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
          fill="#fff"
        />
        <path
          d="M16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22Z"
          fill="#ae232f"
        />
      </svg>
    );
  },
);

Japan.displayName = "Japan";

Japan.metadata = {
  name: "Japan",
  category: "flags/flags",
  tags: ["japan", "icon"],
  description: "Japan icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Japan;
