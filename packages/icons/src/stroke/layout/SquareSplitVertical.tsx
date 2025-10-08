import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SquareSplitVertical: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SquareSplitVertical(
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
        d="M5 8V5C5 4 6 3 7 3H17C18 3 19 4 19 5V8M19 16V19C19 20 18 21 17 21H7C6 21 5 20 5 19V16M4 12H20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SquareSplitVertical.displayName = "SquareSplitVertical";

SquareSplitVertical.metadata = {
  name: "SquareSplitVertical",
  category: "stroke/layout",
  tags: ["square", "split", "vertical", "icon"],
  description: "SquareSplitVertical icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquareSplitVertical;
