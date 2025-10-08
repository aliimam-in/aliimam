import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CirclePoundSterling: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CirclePoundSterling(
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
        d="M10 16V9.5C10 8.837 10.263 8.201 10.732 7.732 11.201 7.263 11.837 7 12.5 7 13.163 7 13.799 7.263 14.268 7.732 14.737 8.201 15 8.837 15 9.5M8 12H12M8 16H15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CirclePoundSterling.displayName = "CirclePoundSterling";

CirclePoundSterling.metadata = {
  name: "CirclePoundSterling",
  category: "stroke/finance",
  tags: ["circle", "pound", "sterling", "icon"],
  description: "CirclePoundSterling icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CirclePoundSterling;
