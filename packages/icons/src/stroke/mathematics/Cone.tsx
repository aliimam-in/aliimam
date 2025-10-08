import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Cone: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Cone(
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
          d="M20.9 18.55L12.9 2.56997C12.8181 2.4009 12.6902 2.25831 12.5311 2.15854C12.3719 2.05877 12.1878 2.00586 12 2.00586C11.8121 2.00586 11.6281 2.05877 11.4689 2.15854C11.3097 2.25831 11.1819 2.4009 11.1 2.56997L3.09998 18.55"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22C16.9706 22 21 20.6569 21 19C21 17.3431 16.9706 16 12 16C7.02944 16 3 17.3431 3 19C3 20.6569 7.02944 22 12 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Cone.displayName = "Cone";

Cone.metadata = {
  name: "Cone",
  category: "stroke/mathematics",
  tags: ["cone", "icon"],
  description: "Cone icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Cone;
