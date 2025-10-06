import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MoveRight: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MoveRight(
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
        d="M18 8 22 12 18 16M2 12H22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MoveRight.displayName = "MoveRight";

MoveRight.metadata = {
  name: "MoveRight",
  category: "stroke/arrows",
  tags: ["move", "right", "icon"],
  description: "MoveRight icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MoveRight;
