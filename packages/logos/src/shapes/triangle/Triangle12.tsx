import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Triangle12: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Triangle12(
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
        d="M0 0 7.973 24H0V0ZM8.013 0 15.987 24H8.013V0ZM24 24 16.027 0V24H24Z"
        fill="currentColor"
      />
    </svg>
  );
});

Triangle12.displayName = "Triangle12";

Triangle12.metadata = {
  name: "Triangle12",
  category: "shapes/triangle",
  tags: ["triangle", "12", "icon"],
  description: "Triangle12 icon from shapes/triangle category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Triangle12;
