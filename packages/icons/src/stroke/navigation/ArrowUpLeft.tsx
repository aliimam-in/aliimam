import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowUpLeftProps extends IconProps {
  type?: "stroke";
}

export const ArrowUpLeft: IconComponent<ArrowUpLeftProps> = React.forwardRef<
  SVGSVGElement,
  ArrowUpLeftProps
>(function ArrowUpLeft(
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
          d="M7 17V7H17M17 17 7 7"
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
          d="M7 17V7H17M17 17 7 7"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ArrowUpLeft doesn't support ${type}`);
  return null;
});

ArrowUpLeft.displayName = "ArrowUpLeft";

ArrowUpLeft.metadata = {
  name: "ArrowUpLeft",
  category: "stroke/navigation",
  tags: ["arrow", "up", "left", "icon"],
  description: "ArrowUpLeft icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowUpLeft;
