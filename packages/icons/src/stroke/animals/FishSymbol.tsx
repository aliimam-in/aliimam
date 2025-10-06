import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FishSymbol: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FishSymbol(
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
        d="M2 16C2 16 11 0.999989 22 12C11 23 2 7.99999 2 7.99999"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FishSymbol.displayName = "FishSymbol";

FishSymbol.metadata = {
  name: "FishSymbol",
  category: "stroke/animals",
  tags: ["fish", "symbol", "icon"],
  description: "FishSymbol icon from stroke/animals category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FishSymbol;
