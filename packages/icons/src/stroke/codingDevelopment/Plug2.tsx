import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Plug2: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Plug2(
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
        viewBox="0 0 24 24"
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
          d="M9 2V8M15 2V8M12 17V22M5 8H19M6 11V8H18V11C18 12.591 17.368 14.117 16.243 15.243 15.117 16.368 13.591 17 12 17 10.409 17 8.883 16.368 7.757 15.243 6.632 14.117 6 12.591 6 11Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Plug2.displayName = "Plug2";

Plug2.metadata = {
  name: "Plug2",
  category: "stroke/codingDevelopment",
  tags: ["plug", "icon"],
  description: "Plug2 icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Plug2;
