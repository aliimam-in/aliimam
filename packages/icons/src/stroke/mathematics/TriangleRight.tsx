import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TriangleRight: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TriangleRight(
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
        d="M22 18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H2.99999C1.89999 20 1.69999 19.4 2.59999 18.7L20.4 4.29999C21.3 3.59999 22 3.89999 22 4.99999V18Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TriangleRight.displayName = "TriangleRight";

TriangleRight.metadata = {
  name: "TriangleRight",
  category: "stroke/mathematics",
  tags: ["triangle", "right", "icon"],
  description: "TriangleRight icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TriangleRight;
