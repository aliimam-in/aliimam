import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MoveDown: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MoveDown(
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
        d="M8 18 12 22 16 18M12 2V22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MoveDown.displayName = "MoveDown";

MoveDown.metadata = {
  name: "MoveDown",
  category: "stroke/arrows",
  tags: ["move", "down", "icon"],
  description: "MoveDown icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MoveDown;
