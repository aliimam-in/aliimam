import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Rectangle7: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Rectangle7(
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
        d="M15.36 3.36 12 0 8.64 3.36 12 6.72 15.36 3.36ZM6.72 12 3.36 8.64 0 12 3.36 15.36 6.72 12Z"
        fill="currentColor"
      />
      <path
        d="M15.36 12L19.68 16.32L16.32 19.68L12 15.36L7.68 19.68L4.32 16.32L8.64 12L4.32 7.68L7.68 4.32L12 8.64L16.32 4.32L19.68 7.68L15.36 12Z"
        fill="currentColor"
      />
      <path
        d="M20.64 8.64 24 12 20.64 15.36 17.28 12 20.64 8.64ZM15.36 20.64 12 17.28 8.64 20.64 12 24 15.36 20.64Z"
        fill="currentColor"
      />
    </svg>
  );
});

Rectangle7.displayName = "Rectangle7";

Rectangle7.metadata = {
  name: "Rectangle7",
  category: "shapes/rectangle",
  tags: ["rectangle", "icon"],
  description: "Rectangle7 icon from shapes/rectangle category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Rectangle7;
