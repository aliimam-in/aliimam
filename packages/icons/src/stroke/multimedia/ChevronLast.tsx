import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ChevronLastProps extends IconProps {
  type?: "stroke";
}

export const ChevronLast: IconComponent<ChevronLastProps> = React.forwardRef<
  SVGSVGElement,
  ChevronLastProps
>(function ChevronLast(
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
          d="M7 18 13 12 7 6M17 6V18"
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
          d="M7 18 13 12 7 6M17 6V18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ChevronLast doesn't support ${type}`);
  return null;
});

ChevronLast.displayName = "ChevronLast";

ChevronLast.metadata = {
  name: "ChevronLast",
  category: "stroke/multimedia",
  tags: ["chevron", "last", "icon"],
  description: "ChevronLast icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChevronLast;
