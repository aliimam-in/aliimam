import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Rectangle8: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Rectangle8(
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
        d="M18 6H6V18H18V6ZM0 0V24H24V0H0Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

Rectangle8.displayName = "Rectangle8";

Rectangle8.metadata = {
  name: "Rectangle8",
  category: "shapes/rectangle",
  tags: ["rectangle", "icon"],
  description: "Rectangle8 icon from shapes/rectangle category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Rectangle8;
