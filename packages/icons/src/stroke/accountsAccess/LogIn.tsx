import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const LogIn: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function LogIn(
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
          d="M10 17 15 12 10 7M15 12H3M15 3H19C19.53 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

LogIn.displayName = "LogIn";

LogIn.metadata = {
  name: "LogIn",
  category: "stroke/accountsAccess",
  tags: ["log", "in", "icon"],
  description: "LogIn icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default LogIn;
