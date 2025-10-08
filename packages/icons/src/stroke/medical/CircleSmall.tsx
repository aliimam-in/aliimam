import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CircleSmall: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CircleSmall(
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
        d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CircleSmall.displayName = "CircleSmall";

CircleSmall.metadata = {
  name: "CircleSmall",
  category: "stroke/medical",
  tags: ["circle", "small", "icon"],
  description: "CircleSmall icon from stroke/medical category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CircleSmall;
