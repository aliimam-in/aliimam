/**
 * Auto-generated logo component: Table Spark Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TableSparkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TableSparkOutlineLogo = React.forwardRef<SVGSVGElement, TableSparkOutlineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" />
  <path d="M12 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7" />
  <path d="M3 10h18" />
  <path d="M10 3v18" />
    </svg>
  )
);

TableSparkOutlineLogo.displayName = "TableSparkOutlineLogo";

export const TableSparkOutlineLogoMetadata = {
  id: "table-spark-outline",
  baseId: "table-spark-outline",
  variant: "default",
  name: "Table Spark Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TableSparkOutlineLogo;
