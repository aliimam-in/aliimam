import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MoveVertical: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MoveVertical(
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
        d="M12 2V22M8 18 12 22 16 18M8 6 12 2 16 6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MoveVertical.displayName = "MoveVertical";

MoveVertical.metadata = {
  name: "MoveVertical",
  category: "stroke/arrows",
  tags: ["move", "vertical", "icon"],
  description: "MoveVertical icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MoveVertical;
