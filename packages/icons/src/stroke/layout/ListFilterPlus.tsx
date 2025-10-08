import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ListFilterPlus: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ListFilterPlus(
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
        d="M12 5H2M6 12H18M9 19H15M16 5H22M19 8V2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ListFilterPlus.displayName = "ListFilterPlus";

ListFilterPlus.metadata = {
  name: "ListFilterPlus",
  category: "stroke/layout",
  tags: ["list", "filter", "plus", "icon"],
  description: "ListFilterPlus icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ListFilterPlus;
