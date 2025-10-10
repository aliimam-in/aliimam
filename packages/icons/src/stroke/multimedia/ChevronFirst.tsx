import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ChevronFirstProps extends IconProps {
  type?: "stroke";
}

export const ChevronFirst: IconComponent<ChevronFirstProps> = React.forwardRef<
  SVGSVGElement,
  ChevronFirstProps
>(function ChevronFirst(
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
          d="M17 18 11 12 17 6M7 6V18"
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
          d="M17 18 11 12 17 6M7 6V18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ChevronFirst doesn't support ${type}`);
  return null;
});

ChevronFirst.displayName = "ChevronFirst";

ChevronFirst.metadata = {
  name: "ChevronFirst",
  category: "stroke/multimedia",
  tags: ["chevron", "first", "icon"],
  description: "ChevronFirst icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChevronFirst;
