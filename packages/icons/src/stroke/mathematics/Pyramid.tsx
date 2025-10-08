import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Pyramid: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Pyramid(
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
        d="M2.5 16.88C2.381 16.811 2.278 16.718 2.197 16.607 2.116 16.496 2.058 16.369 2.028 16.235 1.998 16.101 1.996 15.962 2.022 15.827 2.048 15.692 2.102 15.563 2.18 15.45L11.18 2.43C11.272 2.298 11.395 2.19 11.538 2.116 11.68 2.041 11.839 2.002 12 2.002 12.161 2.002 12.32 2.041 12.462 2.116 12.605 2.19 12.728 2.298 12.82 2.43L21.82 15.44C21.9 15.554 21.955 15.683 21.982 15.819 22.009 15.955 22.007 16.095 21.977 16.231 21.947 16.366 21.889 16.494 21.807 16.605 21.725 16.717 21.62 16.811 21.5 16.88L12.99 21.74C12.688 21.912 12.347 22.002 12 22.002 11.653 22.002 11.312 21.912 11.01 21.74L2.5 16.88ZM12 2V22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Pyramid.displayName = "Pyramid";

Pyramid.metadata = {
  name: "Pyramid",
  category: "stroke/mathematics",
  tags: ["pyramid", "icon"],
  description: "Pyramid icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Pyramid;
