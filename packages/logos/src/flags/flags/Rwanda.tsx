import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Rwanda: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Rwanda(
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
          d="M1 24C1 26.209 2.791 28 5 28H27C29.209 28 31 26.209 31 24V21H1V24Z"
          fill="#305f3e"
        />
        <path d="M1 15H31V22H1V15Z" fill="#f4d548" />
        <path
          d="M27 4H5C2.791 4 1 5.791 1 8V16H31V8C31 5.791 29.209 4 27 4Z"
          fill="#4aa2dc"
        />
        <path
          d="M24.663 10.842L27.667 10.667L24.663 10.492L27.519 9.54501L24.572 10.153L27.086 8.50001L24.397 9.85001L26.397 7.60301L24.15 9.60301L25.5 6.91401L23.847 9.42801L24.455 6.48101L23.508 9.33701L23.333 6.33301L23.158 9.33701L22.212 6.48101L22.82 9.42801L21.167 6.91401L22.517 9.60301L20.269 7.60301L22.269 9.85001L19.581 8.50001L22.094 10.153L19.148 9.54501L22.003 10.492L19 10.667L22.003 10.842L19.148 11.788L22.094 11.18L19.581 12.833L22.269 11.483L20.269 13.731L22.517 11.731L21.167 14.419L22.82 11.906L22.212 14.852L23.158 11.997L23.333 15L23.508 11.997L24.455 14.852L23.847 11.906L25.5 14.419L24.15 11.731L26.397 13.731L24.397 11.483L27.086 12.833L24.572 11.18L27.519 11.788L24.663 10.842Z"
          fill="#f4d548"
        />
      </svg>
    );
  },
);

Rwanda.displayName = "Rwanda";

Rwanda.metadata = {
  name: "Rwanda",
  category: "flags/flags",
  tags: ["rwanda", "icon"],
  description: "Rwanda icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Rwanda;
