import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Rectangle6: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Rectangle6(
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
        d="M18 0V6L6 6 6 0 18 0ZM6 18 6 6 0 6V18H6ZM18 18V6H24V18H18ZM18 18H6L6 24H18V18Z"
        fill="currentColor"
      />
    </svg>
  );
});

Rectangle6.displayName = "Rectangle6";

Rectangle6.metadata = {
  name: "Rectangle6",
  category: "shapes/rectangle",
  tags: ["rectangle", "icon"],
  description: "Rectangle6 icon from shapes/rectangle category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Rectangle6;
