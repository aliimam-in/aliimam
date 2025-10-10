import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Check: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Check(
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
          d="M20 6L9 17L4 12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Check.displayName = "Check";

Check.metadata = {
  name: "Check",
  category: "stroke/notification",
  tags: ["check", "icon"],
  description: "Check icon from stroke/notification category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Check;
