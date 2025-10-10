import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowDownAZProps extends IconProps {
  type?: "stroke";
}

export const ArrowDownAZ: IconComponent<ArrowDownAZProps> = React.forwardRef<
  SVGSVGElement,
  ArrowDownAZProps
>(function ArrowDownAZ(
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
          d="M3 16 7 20 11 16M7 20V4M20 8H15M15 10V6.5C15 5.837 15.263 5.201 15.732 4.732 16.201 4.263 16.837 4 17.5 4 18.163 4 18.799 4.263 19.268 4.732 19.737 5.201 20 5.837 20 6.5V10M15 14H20L15 20H20"
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
          d="M3 16 7 20 11 16M7 20V4M20 8H15M15 10V6.5C15 5.837 15.263 5.201 15.732 4.732 16.201 4.263 16.837 4 17.5 4 18.163 4 18.799 4.263 19.268 4.732 19.737 5.201 20 5.837 20 6.5V10M15 14H20L15 20H20"
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
          d="M3 16 7 20 11 16M7 20V4M20 8H15M15 10V6.5C15 5.837 15.263 5.201 15.732 4.732 16.201 4.263 16.837 4 17.5 4 18.163 4 18.799 4.263 19.268 4.732 19.737 5.201 20 5.837 20 6.5V10M15 14H20L15 20H20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ArrowDownAZ doesn't support ${type}`);
  return null;
});

ArrowDownAZ.displayName = "ArrowDownAZ";

ArrowDownAZ.metadata = {
  name: "ArrowDownAZ",
  category: "stroke/textFormatting",
  tags: ["arrow", "down", "icon"],
  description: "ArrowDownAZ icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowDownAZ;
