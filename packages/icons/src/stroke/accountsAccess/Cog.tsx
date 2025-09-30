import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Cog: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Cog(
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
          d="M11 10.27 7 3.34M11 13.73 7 20.66M12 22V20M12 2V4M14 12H22M17 20.66 16 18.93M17 3.34 16 5.07M2 12H4M20.66 17 18.93 16M20.66 7 18.93 8M3.34 17 5.07 16M3.34 7 5.07 8M12 14C13.105 14 14 13.105 14 12 14 10.895 13.105 10 12 10 10.895 10 10 10.895 10 12 10 13.105 10.895 14 12 14Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Cog.displayName = "Cog";

Cog.metadata = {
  name: "Cog",
  category: "stroke/accountsAccess",
  tags: ["cog", "icon"],
  description: "Cog icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Cog;
