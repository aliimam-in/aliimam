import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ChevronLeftProps extends IconProps {
  type?: "stroke";
}

export const ChevronLeft: IconComponent<ChevronLeftProps> = React.forwardRef<
  SVGSVGElement,
  ChevronLeftProps
>(function ChevronLeft(
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
          d="M15 18L9 12L15 6"
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
          d="M15 18L9 12L15 6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ChevronLeft doesn't support ${type}`);
  return null;
});

ChevronLeft.displayName = "ChevronLeft";

ChevronLeft.metadata = {
  name: "ChevronLeft",
  category: "stroke/navigation",
  tags: ["chevron", "left", "icon"],
  description: "ChevronLeft icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChevronLeft;
