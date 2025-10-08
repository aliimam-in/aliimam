import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ShowerHead: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ShowerHead(
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
        d="M4 4 6.5 6.5M13.5 6.5C12.569 5.587 11.315 5.079 10.01 5.085 8.706 5.092 7.457 5.613 6.535 6.535 5.613 7.457 5.092 8.706 5.085 10.01 5.079 11.315 5.587 12.569 6.5 13.5M15 5 5 15M14 17V17.01M10 16V16.01M13 13V13.01M16 10V10.01M11 20V20.01M17 14V14.01M20 11V11.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ShowerHead.displayName = "ShowerHead";

ShowerHead.metadata = {
  name: "ShowerHead",
  category: "stroke/home",
  tags: ["shower", "head", "icon"],
  description: "ShowerHead icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ShowerHead;
