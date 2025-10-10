import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowUpProps extends IconProps {
  type?: "stroke";
}

export const ArrowUp: IconComponent<ArrowUpProps> = React.forwardRef<
  SVGSVGElement,
  ArrowUpProps
>(function ArrowUp(
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
          d="M5 12 12 5 19 12M12 19V5"
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
          d="M5 12 12 5 19 12M12 19V5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ArrowUp doesn't support ${type}`);
  return null;
});

ArrowUp.displayName = "ArrowUp";

ArrowUp.metadata = {
  name: "ArrowUp",
  category: "stroke/navigation",
  tags: ["arrow", "up", "icon"],
  description: "ArrowUp icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowUp;
