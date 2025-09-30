import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Ban: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Ban(
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
          d="M4.929 4.929 19.07 19.071M12 22C17.523 22 22 17.523 22 12 22 6.477 17.523 2 12 2 6.477 2 2 6.477 2 12 2 17.523 6.477 22 12 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Ban.displayName = "Ban";

Ban.metadata = {
  name: "Ban",
  category: "stroke/accountsAccess",
  tags: ["ban", "icon"],
  description: "Ban icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ban;
