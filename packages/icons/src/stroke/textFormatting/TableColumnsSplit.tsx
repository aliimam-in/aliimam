import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface TableColumnsSplitProps extends IconProps {
  type?: "stroke";
}

export const TableColumnsSplit: IconComponent<TableColumnsSplitProps> =
  React.forwardRef<SVGSVGElement, TableColumnsSplitProps>(
    function TableColumnsSplit(
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
              d="M14 14V16M14 20V22M14 2V4M14 8V10M2 15H10M2 3H8C8.53 3 9.039 3.211 9.414 3.586 9.789 3.961 10 4.47 10 5V19C10 19.53 9.789 20.039 9.414 20.414 9.039 20.789 8.53 21 8 21H2M2 9H10M22 15H18M22 3H20C19.47 3 18.961 3.211 18.586 3.586 18.211 3.961 18 4.47 18 5V19C18 19.53 18.211 20.039 18.586 20.414 18.961 20.789 19.47 21 20 21H22M22 9H18M5 3V21"
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
              d="M14 14V16M14 20V22M14 2V4M14 8V10M2 15H10M2 3H8C8.53 3 9.039 3.211 9.414 3.586 9.789 3.961 10 4.47 10 5V19C10 19.53 9.789 20.039 9.414 20.414 9.039 20.789 8.53 21 8 21H2M2 9H10M22 15H18M22 3H20C19.47 3 18.961 3.211 18.586 3.586 18.211 3.961 18 4.47 18 5V19C18 19.53 18.211 20.039 18.586 20.414 18.961 20.789 19.47 21 20 21H22M22 9H18M5 3V21"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`TableColumnsSplit doesn't support ${type}`);
      return null;
    },
  );

TableColumnsSplit.displayName = "TableColumnsSplit";

TableColumnsSplit.metadata = {
  name: "TableColumnsSplit",
  category: "stroke/textFormatting",
  tags: ["table", "columns", "split", "icon"],
  description: "TableColumnsSplit icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TableColumnsSplit;
