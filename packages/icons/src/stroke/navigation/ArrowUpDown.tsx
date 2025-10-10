import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowUpDownProps extends IconProps {
  type?: "stroke";
}

export const ArrowUpDown: IconComponent<ArrowUpDownProps> = React.forwardRef<
  SVGSVGElement,
  ArrowUpDownProps
>(function ArrowUpDown(
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
          d="M21 16 17 20 13 16M17 20V4M3 8 7 4 11 8M7 4V20"
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
          d="M21 16 17 20 13 16M17 20V4M3 8 7 4 11 8M7 4V20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ArrowUpDown doesn't support ${type}`);
  return null;
});

ArrowUpDown.displayName = "ArrowUpDown";

ArrowUpDown.metadata = {
  name: "ArrowUpDown",
  category: "stroke/navigation",
  tags: ["arrow", "up", "down", "icon"],
  description: "ArrowUpDown icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowUpDown;
