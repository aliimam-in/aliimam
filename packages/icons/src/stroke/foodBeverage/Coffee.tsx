import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Coffee: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Coffee(
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
          d="M10 2V4M14 2V4M16 8C16.265 8 16.52 8.105 16.707 8.293 16.895 8.48 17 8.735 17 9V17C17 18.061 16.579 19.078 15.828 19.828 15.078 20.579 14.061 21 13 21H7C5.939 21 4.922 20.579 4.172 19.828 3.421 19.078 3 18.061 3 17V9C3 8.735 3.105 8.48 3.293 8.293 3.48 8.105 3.735 8 4 8H18C19.061 8 20.078 8.421 20.828 9.172 21.579 9.922 22 10.939 22 12 22 13.061 21.579 14.078 20.828 14.828 20.078 15.579 19.061 16 18 16H17M6 2V4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Coffee.displayName = "Coffee";

Coffee.metadata = {
  name: "Coffee",
  category: "stroke/foodBeverage",
  tags: ["coffee", "icon"],
  description: "Coffee icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Coffee;
