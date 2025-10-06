import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const UtilityPole: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function UtilityPole(
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
        d="M12 2V22M2 5H22M3 3V5M7 3V5M17 3V5M21 3V5M19 5 12 12 5 5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

UtilityPole.displayName = "UtilityPole";

UtilityPole.metadata = {
  name: "UtilityPole",
  category: "stroke/buildings",
  tags: ["utility", "pole", "icon"],
  description: "UtilityPole icon from stroke/buildings category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UtilityPole;
