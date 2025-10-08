import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Wine: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Wine(
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
          d="M8 22H16M7 10H17M12 15V22M12 15C13.326 15 14.598 14.473 15.536 13.536 16.473 12.598 17 11.326 17 10 17 8 16.5 6 15 2H9C7.5 6 7 8 7 10 7 11.326 7.527 12.598 8.464 13.536 9.402 14.473 10.674 15 12 15Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Wine.displayName = "Wine";

Wine.metadata = {
  name: "Wine",
  category: "stroke/foodBeverage",
  tags: ["wine", "icon"],
  description: "Wine icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Wine;
