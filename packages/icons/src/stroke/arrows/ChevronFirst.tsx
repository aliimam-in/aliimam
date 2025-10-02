import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChevronFirst: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
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
        d="M17 18 11 12 17 6M7 6V18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChevronFirst.displayName = "ChevronFirst";

ChevronFirst.metadata = {
  name: "ChevronFirst",
  category: "stroke/arrows",
  tags: ["chevron", "first", "icon"],
  description: "ChevronFirst icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChevronFirst;
