import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowLeftRight: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowLeftRight(
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
        d="M8 3 4 7 8 11M4 7H20M16 21 20 17 16 13M20 17H4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowLeftRight.displayName = "ArrowLeftRight";

ArrowLeftRight.metadata = {
  name: "ArrowLeftRight",
  category: "stroke/arrows",
  tags: ["arrow", "left", "right", "icon"],
  description: "ArrowLeftRight icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowLeftRight;
