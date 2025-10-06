import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CircleSlash2: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CircleSlash2(
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
        d="M22 2 2 22M12 22C17.523 22 22 17.523 22 12 22 6.477 17.523 2 12 2 6.477 2 2 6.477 2 12 2 17.523 6.477 22 12 22Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CircleSlash2.displayName = "CircleSlash2";

CircleSlash2.metadata = {
  name: "CircleSlash2",
  category: "stroke/codingDevelopment",
  tags: ["circle", "slash", "icon"],
  description: "CircleSlash2 icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CircleSlash2;
