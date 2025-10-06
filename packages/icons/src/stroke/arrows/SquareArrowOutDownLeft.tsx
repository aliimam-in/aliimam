import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SquareArrowOutDownLeft: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SquareArrowOutDownLeft(
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
        d="M13 21H19C19.53 21 20.039 20.789 20.414 20.414 20.789 20.039 21 19.53 21 19V5C21 4.47 20.789 3.961 20.414 3.586 20.039 3.211 19.53 3 19 3H5C4.47 3 3.961 3.211 3.586 3.586 3.211 3.961 3 4.47 3 5V11M3 21 12 12M9 21H3V15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SquareArrowOutDownLeft.displayName = "SquareArrowOutDownLeft";

SquareArrowOutDownLeft.metadata = {
  name: "SquareArrowOutDownLeft",
  category: "stroke/arrows",
  tags: ["square", "arrow", "out", "down", "left", "icon"],
  description: "SquareArrowOutDownLeft icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquareArrowOutDownLeft;
