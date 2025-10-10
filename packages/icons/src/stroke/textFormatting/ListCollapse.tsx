import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ListCollapse: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ListCollapse(
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
        d="M10 5H21M10 12H21M10 19H21M3 10 6 7 3 4M3 20 6 17 3 14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ListCollapse.displayName = "ListCollapse";

ListCollapse.metadata = {
  name: "ListCollapse",
  category: "stroke/textFormatting",
  tags: ["list", "collapse", "icon"],
  description: "ListCollapse icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ListCollapse;
