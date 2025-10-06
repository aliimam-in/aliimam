import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CircleX: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CircleX(
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
        d="M12 22C17.523 22 22 17.523 22 12 22 6.477 17.523 2 12 2 6.477 2 2 6.477 2 12 2 17.523 6.477 22 12 22ZM15 9 9 15M9 9 15 15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CircleX.displayName = "CircleX";

CircleX.metadata = {
  name: "CircleX",
  category: "stroke/codingDevelopment",
  tags: ["circle", "icon"],
  description: "CircleX icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CircleX;
