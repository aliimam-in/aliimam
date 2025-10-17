import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Rectangle9: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Rectangle9(
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
        d="M12 16.7613L4.76133 24L0 19.2387L7.23867 12L6.88028e-07 4.76133L4.76133 0L12 7.23867L19.2387 0L24 4.76133L16.7613 12L24 19.2387L19.2387 24L12 16.7613Z"
        fill="currentColor"
      />
    </svg>
  );
});

Rectangle9.displayName = "Rectangle9";

Rectangle9.metadata = {
  name: "Rectangle9",
  category: "shapes/rectangle",
  tags: ["rectangle", "icon"],
  description: "Rectangle9 icon from shapes/rectangle category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Rectangle9;
