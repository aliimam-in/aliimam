import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Chile: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Chile(
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
          fill="#c73a29"
        />
        <path
          d="M27 4H5C2.791 4 1 5.791 1 8V16H31V8C31 5.791 29.209 4 27 4Z"
          fill="#fff"
        />
        <path d="M5 4H13V16H1V8C1 5.792 2.792 4 5 4Z" fill="#1435a1" />
        <path
          d="M8.14602 10.674L10.001 9.326H7.70802L7.00002 7.146L6.29202 9.326H3.99902L5.85402 10.674L5.14502 12.854L7.00002 11.507L8.85502 12.854L8.14602 10.674Z"
          fill="#fff"
        />
      </svg>
    );
  },
);

Chile.displayName = "Chile";

Chile.metadata = {
  name: "Chile",
  category: "flags/flags",
  tags: ["chile", "icon"],
  description: "Chile icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Chile;
