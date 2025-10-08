import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Syringe: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Syringe(
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
        d="M18 2 22 6M17 7 20 4M19 9 8.7 19.3C7.7 20.3 6.2 20.3 5.3 19.3L4.7 18.7C3.7 17.7 3.7 16.2 4.7 15.3L15 5M9 11 13 15M5 19 2 22M14 4 20 10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Syringe.displayName = "Syringe";

Syringe.metadata = {
  name: "Syringe",
  category: "stroke/medical",
  tags: ["syringe", "icon"],
  description: "Syringe icon from stroke/medical category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Syringe;
