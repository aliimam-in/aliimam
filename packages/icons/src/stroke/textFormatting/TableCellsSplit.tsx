import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface TableCellsSplitProps extends IconProps {
  type?: "stroke";
}

export const TableCellsSplit: IconComponent<TableCellsSplitProps> =
  React.forwardRef<SVGSVGElement, TableCellsSplitProps>(
    function TableCellsSplit(
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
              d="M12 15V9M3 15H21M3 9H21M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3Z"
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
              d="M12 15V9M3 15H21M3 9H21M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`TableCellsSplit doesn't support ${type}`);
      return null;
    },
  );

TableCellsSplit.displayName = "TableCellsSplit";

TableCellsSplit.metadata = {
  name: "TableCellsSplit",
  category: "stroke/textFormatting",
  tags: ["table", "cells", "split", "icon"],
  description: "TableCellsSplit icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TableCellsSplit;
