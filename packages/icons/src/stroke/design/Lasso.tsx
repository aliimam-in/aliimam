import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Lasso: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Lasso(
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
          d="M3.704 14.467C2.593 13.147 2 11.591 2 10 2 7.878 3.054 5.843 4.929 4.343 6.804 2.843 9.348 2 12 2 14.652 2 17.196 2.843 19.071 4.343 20.946 5.843 22 7.878 22 10 22 12.122 20.946 14.157 19.071 15.657 17.196 17.157 14.652 18 12 18 10.173 18 8.381 17.599 6.819 16.842M7 22C6.38 21.535 5.876 20.932 5.529 20.239 5.182 19.546 5.001 18.781 5 18.006"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 18C6.10457 18 7 17.1046 7 16C7 14.8954 6.10457 14 5 14C3.89543 14 3 14.8954 3 16C3 17.1046 3.89543 18 5 18Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Lasso.displayName = "Lasso";

Lasso.metadata = {
  name: "Lasso",
  category: "stroke/design",
  tags: ["lasso", "icon"],
  description: "Lasso icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Lasso;
