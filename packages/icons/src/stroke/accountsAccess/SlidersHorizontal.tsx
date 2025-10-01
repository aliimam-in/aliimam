import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SlidersHorizontal: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SlidersHorizontal(
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
        d="M10 5H3M12 19H3M14 3V7M16 17V21M21 12H12M21 19H16M21 5H14M8 10V14M8 12H3"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SlidersHorizontal.displayName = "SlidersHorizontal";

SlidersHorizontal.metadata = {
  name: "SlidersHorizontal",
  category: "stroke/accountsAccess",
  tags: ["sliders", "horizontal", "icon"],
  description: "SlidersHorizontal icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SlidersHorizontal;
