import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Triangle13: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Triangle13(
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
        d="M4.8 12V24L0 12 4.8 0V12ZM12 0 4.8 12 12 24 19.2 12 12 0ZM19.2 12V24L24 12 19.2 0V12Z"
        fill="currentColor"
      />
    </svg>
  );
});

Triangle13.displayName = "Triangle13";

Triangle13.metadata = {
  name: "Triangle13",
  category: "shapes/triangle",
  tags: ["triangle", "13", "icon"],
  description: "Triangle13 icon from shapes/triangle category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Triangle13;
