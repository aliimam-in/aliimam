import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FlagTriangleLeft: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FlagTriangleLeft(
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
        d="M18.0001 22V2.79997C18.0002 2.66238 17.9648 2.52709 17.8974 2.40716C17.8299 2.28723 17.7327 2.18672 17.6151 2.11535C17.4975 2.04397 17.3634 2.00413 17.2259 1.99969C17.0884 1.99524 16.9521 2.02634 16.8301 2.08997L5.45007 7.77997C5.31481 7.84548 5.20074 7.94776 5.12093 8.0751C5.04111 8.20244 4.99878 8.34969 4.99878 8.49997C4.99878 8.65026 5.04111 8.7975 5.12093 8.92484C5.20074 9.05218 5.31481 9.15446 5.45007 9.21997L18.0001 15.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FlagTriangleLeft.displayName = "FlagTriangleLeft";

FlagTriangleLeft.metadata = {
  name: "FlagTriangleLeft",
  category: "stroke/codingDevelopment",
  tags: ["flag", "triangle", "left", "icon"],
  description: "FlagTriangleLeft icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FlagTriangleLeft;
