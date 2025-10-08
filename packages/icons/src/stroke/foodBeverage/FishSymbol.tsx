import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FishSymbolProps extends IconProps {
  type?: "stroke";
}

export const FishSymbol: IconComponent<FishSymbolProps> = React.forwardRef<
  SVGSVGElement,
  FishSymbolProps
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
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
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
  }

  if (type === "stroke") {
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
          d="M2 16.0001C2 16.0001 11 1.00005 22 12.0001C11 23.0001 2 8.00005 2 8.00005"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`FishSymbol doesn't support ${type}`);
  return null;
});

FishSymbol.displayName = "FishSymbol";

FishSymbol.metadata = {
  name: "FishSymbol",
  category: "stroke/foodBeverage",
  tags: ["fish", "symbol", "icon"],
  description: "FishSymbol icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FishSymbol;
