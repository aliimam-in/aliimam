import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Router: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Router(
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
          d="M20 14H4C2.895 14 2 14.895 2 16V20C2 21.105 2.895 22 4 22H20C21.105 22 22 21.105 22 20V16C22 14.895 21.105 14 20 14ZM6.01 18H6M10.01 18H10M15 10V14M17.84 7.17C17.468 6.798 17.027 6.503 16.542 6.302 16.056 6.1 15.536 5.997 15.01 5.997 14.484 5.997 13.964 6.1 13.478 6.302 12.993 6.503 12.551 6.798 12.18 7.17M20.66 4.34C19.16 2.841 17.126 1.999 15.005 1.999 12.884 1.999 10.85 2.841 9.35 4.34"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Router.displayName = "Router";

Router.metadata = {
  name: "Router",
  category: "stroke/connectivity",
  tags: ["router", "icon"],
  description: "Router icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Router;
