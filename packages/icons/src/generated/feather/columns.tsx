/**
 * Auto-generated logo component: Columns (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ColumnsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ColumnsLogo = React.forwardRef<SVGSVGElement, ColumnsLogoProps>(
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
      <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"/>
    </svg>
  )
);

ColumnsLogo.displayName = "ColumnsLogo";

export const ColumnsLogoMetadata = {
  id: "columns",
  baseId: "columns",
  variant: "default",
  name: "Columns",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ColumnsLogo;
