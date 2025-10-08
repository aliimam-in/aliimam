import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MarsStroke: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MarsStroke(
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
        d="M14 6 18 10M17 3H21V7M21 3 13.25 10.75M9 21C12.314 21 15 18.314 15 15 15 11.686 12.314 9 9 9 5.686 9 3 11.686 3 15 3 18.314 5.686 21 9 21Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MarsStroke.displayName = "MarsStroke";

MarsStroke.metadata = {
  name: "MarsStroke",
  category: "stroke/medical",
  tags: ["mars", "stroke", "icon"],
  description: "MarsStroke icon from stroke/medical category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MarsStroke;
