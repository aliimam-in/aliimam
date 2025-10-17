import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Triangle11: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Triangle11(
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
        d="M12 12L6.08462e-07 5.04L0 18.96L12 12ZM12 12L18.96 0H5.04L12 12ZM12 12L24 5.04V18.96L12 12ZM12 12L18.96 24H5.04L12 12Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

Triangle11.displayName = "Triangle11";

Triangle11.metadata = {
  name: "Triangle11",
  category: "shapes/triangle",
  tags: ["triangle", "11", "icon"],
  description: "Triangle11 icon from shapes/triangle category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Triangle11;
