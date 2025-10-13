import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Monaco: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Monaco(
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
          d="M31 8C31 5.791 29.209 4 27 4H5C2.791 4 1 5.791 1 8V17H31V8Z"
          fill="#be2a2c"
        />
        <path
          d="M5 28H27C29.209 28 31 26.209 31 24V16H1V24C1 26.209 2.791 28 5 28Z"
          fill="#fff"
        />
      </svg>
    );
  },
);

Monaco.displayName = "Monaco";

Monaco.metadata = {
  name: "Monaco",
  category: "flags/flags",
  tags: ["monaco", "icon"],
  description: "Monaco icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Monaco;
