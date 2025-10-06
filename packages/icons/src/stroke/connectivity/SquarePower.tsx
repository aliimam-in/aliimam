import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SquarePower: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SquarePower(
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
        d="M12 7V11M7.998 9.003C7.441 9.746 7.103 10.63 7.02 11.555 6.937 12.479 7.113 13.409 7.529 14.239 7.945 15.07 8.584 15.768 9.374 16.255 10.164 16.743 11.074 17.001 12.003 17.001 12.932 17 13.842 16.741 14.631 16.252 15.421 15.763 16.059 15.065 16.473 14.234 16.888 13.403 17.063 12.473 16.979 11.548 16.895 10.624 16.556 9.74 15.998 8.998"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SquarePower.displayName = "SquarePower";

SquarePower.metadata = {
  name: "SquarePower",
  category: "stroke/connectivity",
  tags: ["square", "power", "icon"],
  description: "SquarePower icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquarePower;
