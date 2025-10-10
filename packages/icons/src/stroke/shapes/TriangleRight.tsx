import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface TriangleRightProps extends IconProps {
  type?: "stroke";
}

export const TriangleRight: IconComponent<TriangleRightProps> =
  React.forwardRef<SVGSVGElement, TriangleRightProps>(function TriangleRight(
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
      type = "stroke",
      ...props
    },
    forwardedRef,
  ) {
    if (type === "stroke") {
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
            d="M22 18C22 18.5305 21.7893 19.0392 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H2.99999C1.89999 20 1.69999 19.4 2.59999 18.7L20.4 4.30002C21.3 3.60002 22 3.90002 22 5.00002V18Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    if (type === "stroke") {
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
    }

    console.error(`TriangleRight doesn't support ${type}`);
    return null;
  });

TriangleRight.displayName = "TriangleRight";

TriangleRight.metadata = {
  name: "TriangleRight",
  category: "stroke/shapes",
  tags: ["triangle", "right", "icon"],
  description: "TriangleRight icon from stroke/shapes category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TriangleRight;
