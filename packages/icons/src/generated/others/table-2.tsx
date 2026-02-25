/**
 * Auto-generated logo component: Table 2 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Table2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Table2Logo = React.forwardRef<SVGSVGElement, Table2LogoProps>(
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
      <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
    </svg>
  )
);

Table2Logo.displayName = "Table2Logo";

export const Table2LogoMetadata = {
  id: "table-2",
  baseId: "table-2",
  variant: "default",
  name: "Table 2",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Table2Logo;
