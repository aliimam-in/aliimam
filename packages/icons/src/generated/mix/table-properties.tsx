/**
 * Auto-generated logo component: Table Properties (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TablePropertiesLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TablePropertiesLogo = React.forwardRef<SVGSVGElement, TablePropertiesLogoProps>(
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
      <path d="M15 3v18" />
  <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M21 9H3" />
  <path d="M21 15H3" />
    </svg>
  )
);

TablePropertiesLogo.displayName = "TablePropertiesLogo";

export const TablePropertiesLogoMetadata = {
  id: "table-properties",
  baseId: "table-properties",
  variant: "default",
  name: "Table Properties",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TablePropertiesLogo;
