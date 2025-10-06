import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SquareArrowOutDownRight: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SquareArrowOutDownRight(
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
        d="M21 11V5C21 4.47 20.789 3.961 20.414 3.586 20.039 3.211 19.53 3 19 3H5C4.47 3 3.961 3.211 3.586 3.586 3.211 3.961 3 4.47 3 5V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H11M21 21 12 12M21 15V21H15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SquareArrowOutDownRight.displayName = "SquareArrowOutDownRight";

SquareArrowOutDownRight.metadata = {
  name: "SquareArrowOutDownRight",
  category: "stroke/arrows",
  tags: ["square", "arrow", "out", "down", "right", "icon"],
  description: "SquareArrowOutDownRight icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquareArrowOutDownRight;
