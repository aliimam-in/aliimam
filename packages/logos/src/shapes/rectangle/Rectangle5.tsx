import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Rectangle5: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Rectangle5(
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
        d="M15.6 0H8.4V8.4H3.14722e-07L0 15.6H8.4V24H15.6V15.6H24V8.4H15.6V0Z"
        fill="currentColor"
      />
    </svg>
  );
});

Rectangle5.displayName = "Rectangle5";

Rectangle5.metadata = {
  name: "Rectangle5",
  category: "shapes/rectangle",
  tags: ["rectangle", "icon"],
  description: "Rectangle5 icon from shapes/rectangle category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Rectangle5;
