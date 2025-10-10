import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const RailSymbol: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function RailSymbol(
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
        d="M5 15H19M5 9H19M14 20 9 15 15 9 10 4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

RailSymbol.displayName = "RailSymbol";

RailSymbol.metadata = {
  name: "RailSymbol",
  category: "stroke/navigation",
  tags: ["rail", "symbol", "icon"],
  description: "RailSymbol icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default RailSymbol;
