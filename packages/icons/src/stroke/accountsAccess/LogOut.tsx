import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const LogOut: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function LogOut(
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
          d="M16 17 21 12 16 7M21 12H9M9 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H9"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

LogOut.displayName = "LogOut";

LogOut.metadata = {
  name: "LogOut",
  category: "stroke/accountsAccess",
  tags: ["log", "out", "icon"],
  description: "LogOut icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default LogOut;
