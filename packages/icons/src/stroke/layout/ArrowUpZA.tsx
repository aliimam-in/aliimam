import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowUpZAProps extends IconProps {
  type?: "stroke";
}

export const ArrowUpZA: IconComponent<ArrowUpZAProps> = React.forwardRef<
  SVGSVGElement,
  ArrowUpZAProps
>(function ArrowUpZA(
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
          d="M3 8 7 4 11 8M7 4V20M15 4H20L15 10H20M15 20V16.5C15 15.837 15.263 15.201 15.732 14.732 16.201 14.263 16.837 14 17.5 14 18.163 14 18.799 14.263 19.268 14.732 19.737 15.201 20 15.837 20 16.5V20M20 18H15"
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
          d="M3 8 7 4 11 8M7 4V20M15 4H20L15 10H20M15 20V16.5C15 15.837 15.263 15.201 15.732 14.732 16.201 14.263 16.837 14 17.5 14 18.163 14 18.799 14.263 19.268 14.732 19.737 15.201 20 15.837 20 16.5V20M20 18H15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ArrowUpZA doesn't support ${type}`);
  return null;
});

ArrowUpZA.displayName = "ArrowUpZA";

ArrowUpZA.metadata = {
  name: "ArrowUpZA",
  category: "stroke/layout",
  tags: ["arrow", "up", "icon"],
  description: "ArrowUpZA icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowUpZA;
