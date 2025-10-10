import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Navigation2: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Navigation2(
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
        d="M12 2L19 21L12 17L5 21L12 2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Navigation2.displayName = "Navigation2";

Navigation2.metadata = {
  name: "Navigation2",
  category: "stroke/navigation",
  tags: ["navigation", "icon"],
  description: "Navigation2 icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Navigation2;
