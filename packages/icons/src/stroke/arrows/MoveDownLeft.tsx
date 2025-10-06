import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MoveDownLeft: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MoveDownLeft(
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
        d="M11 19H5V13M19 5 5 19"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MoveDownLeft.displayName = "MoveDownLeft";

MoveDownLeft.metadata = {
  name: "MoveDownLeft",
  category: "stroke/arrows",
  tags: ["move", "down", "left", "icon"],
  description: "MoveDownLeft icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MoveDownLeft;
