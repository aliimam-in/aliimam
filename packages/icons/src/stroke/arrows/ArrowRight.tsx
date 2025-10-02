import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowRight: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowRight(
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
        d="M5 12H19M12 5 19 12 12 19"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowRight.displayName = "ArrowRight";

ArrowRight.metadata = {
  name: "ArrowRight",
  category: "stroke/arrows",
  tags: ["arrow", "right", "icon"],
  description: "ArrowRight icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowRight;
