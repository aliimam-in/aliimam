import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ListFilterPlusProps extends IconProps {
  type?: "stroke";
}

export const ListFilterPlus: IconComponent<ListFilterPlusProps> =
  React.forwardRef<SVGSVGElement, ListFilterPlusProps>(function ListFilterPlus(
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
            d="M12 5H2M6 12H18M9 19H15M16 5H22M19 8V2"
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
            d="M12 5H2M6 12H18M9 19H15M16 5H22M19 8V2"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`ListFilterPlus doesn't support ${type}`);
    return null;
  });

ListFilterPlus.displayName = "ListFilterPlus";

ListFilterPlus.metadata = {
  name: "ListFilterPlus",
  category: "stroke/textFormatting",
  tags: ["list", "filter", "plus", "icon"],
  description: "ListFilterPlus icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ListFilterPlus;
