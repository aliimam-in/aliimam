import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SquareSplitHorizontal: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SquareSplitHorizontal(
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
        d="M8 19H5C4 19 3 18 3 17V7C3 6 4 5 5 5H8M16 5H19C20 5 21 6 21 7V17C21 18 20 19 19 19H16M12 4V20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SquareSplitHorizontal.displayName = "SquareSplitHorizontal";

SquareSplitHorizontal.metadata = {
  name: "SquareSplitHorizontal",
  category: "stroke/layout",
  tags: ["square", "split", "horizontal", "icon"],
  description: "SquareSplitHorizontal icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquareSplitHorizontal;
