import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const PocketKnife: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function PocketKnife(
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
        d="M3 2V3C3 4 5 4 5 5 5 6 3 6 3 7 3 8 5 8 5 9 5 10 3 10 3 11 3 12 5 12 5 13M18 6H18.01M6 18H6.01M20.83 8.83C21.201 8.458 21.496 8.017 21.697 7.532 21.899 7.046 22.002 6.526 22.002 6 22.002 5.474 21.899 4.954 21.697 4.468 21.496 3.983 21.201 3.542 20.83 3.17 20.458 2.798 20.017 2.504 19.531 2.302 19.046 2.101 18.525 1.998 18 1.998 17.474 1.998 16.954 2.101 16.468 2.302 15.983 2.504 15.541 2.798 15.17 3.17L3.17 15.17C2.419 15.921 1.998 16.939 1.998 18 1.998 18.526 2.101 19.046 2.302 19.532 2.503 20.017 2.798 20.458 3.17 20.83 3.541 21.202 3.983 21.497 4.468 21.698 4.954 21.899 5.474 22.002 6 22.002 7.061 22.002 8.079 21.581 8.83 20.83L20.83 8.83Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 11.66V22C19.0609 22 20.0783 21.5786 20.8284 20.8284C21.5786 20.0783 22 19.0609 22 18V6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

PocketKnife.displayName = "PocketKnife";

PocketKnife.metadata = {
  name: "PocketKnife",
  category: "stroke/tools",
  tags: ["pocket", "knife", "icon"],
  description: "PocketKnife icon from stroke/tools category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PocketKnife;
