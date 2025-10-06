import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Minimize2: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Minimize2(
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
        d="M14 10 21 3M20 10H14V4M3 21 10 14M4 14H10V20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Minimize2.displayName = "Minimize2";

Minimize2.metadata = {
  name: "Minimize2",
  category: "stroke/arrows",
  tags: ["minimize", "icon"],
  description: "Minimize2 icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Minimize2;
