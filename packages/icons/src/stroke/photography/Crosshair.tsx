import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Crosshair: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Crosshair(
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
        d="M12 22C17.523 22 22 17.523 22 12 22 6.477 17.523 2 12 2 6.477 2 2 6.477 2 12 2 17.523 6.477 22 12 22ZM22 12H18M6 12H2M12 6V2M12 22V18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Crosshair.displayName = "Crosshair";

Crosshair.metadata = {
  name: "Crosshair",
  category: "stroke/photography",
  tags: ["crosshair", "icon"],
  description: "Crosshair icon from stroke/photography category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Crosshair;
