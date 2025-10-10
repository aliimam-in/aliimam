import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SquarePause: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SquarePause(
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
        d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM10 15V9M14 15V9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SquarePause.displayName = "SquarePause";

SquarePause.metadata = {
  name: "SquarePause",
  category: "stroke/multimedia",
  tags: ["square", "pause", "icon"],
  description: "SquarePause icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquarePause;
