import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TableRowsSplit: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TableRowsSplit(
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
        d="M14 10H16M15 22V14M15 2V6M2 10H4M20 10H22M3 19H21M3 22V16C3 15.737 3.052 15.477 3.152 15.235 3.253 14.992 3.4 14.772 3.586 14.586 3.772 14.4 3.992 14.253 4.235 14.152 4.477 14.052 4.737 14 5 14H19C19.263 14 19.523 14.052 19.765 14.152 20.008 14.253 20.229 14.4 20.414 14.586 20.6 14.772 20.747 14.992 20.848 15.235 20.948 15.477 21 15.737 21 16V22M3 2V4C3 4.53 3.211 5.039 3.586 5.414 3.961 5.789 4.47 6 5 6H19C19.53 6 20.039 5.789 20.414 5.414 20.789 5.039 21 4.53 21 4V2M8 10H10M9 22V14M9 2V6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TableRowsSplit.displayName = "TableRowsSplit";

TableRowsSplit.metadata = {
  name: "TableRowsSplit",
  category: "stroke/files",
  tags: ["table", "rows", "split", "icon"],
  description: "TableRowsSplit icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TableRowsSplit;
