/**
 * Auto-generated logo component: Tablets (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TabletsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TabletsLogo = React.forwardRef<SVGSVGElement, TabletsLogoProps>(
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
      <circle cx="7" cy="7" r="5" />
  <circle cx="17" cy="17" r="5" />
  <path d="M12 17h10" />
  <path d="m3.46 10.54 7.08-7.08" />
    </svg>
  )
);

TabletsLogo.displayName = "TabletsLogo";

export const TabletsLogoMetadata = {
  id: "tablets",
  baseId: "tablets",
  variant: "default",
  name: "Tablets",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TabletsLogo;
