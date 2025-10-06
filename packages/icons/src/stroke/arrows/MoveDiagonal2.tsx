import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MoveDiagonal2: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MoveDiagonal2(
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
        d="M19 13V19H13M5 11V5H11M5 5 19 19"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MoveDiagonal2.displayName = "MoveDiagonal2";

MoveDiagonal2.metadata = {
  name: "MoveDiagonal2",
  category: "stroke/arrows",
  tags: ["move", "diagonal", "icon"],
  description: "MoveDiagonal2 icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MoveDiagonal2;
