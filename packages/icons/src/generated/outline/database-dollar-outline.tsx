/**
 * Auto-generated logo component: Database Dollar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DatabaseDollarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DatabaseDollarOutlineLogo = React.forwardRef<SVGSVGElement, DatabaseDollarOutlineLogoProps>(
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
      <path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" />
  <path d="M4 6v6c0 1.657 3.582 3 8 3c.415 0 .822 -.012 1.22 -.035" />
  <path d="M20 10v-4" />
  <path d="M4 12v6c0 1.657 3.582 3 8 3c.352 0 .698 -.009 1.037 -.025" />
  <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M19 21v1m0 -8v1" />
    </svg>
  )
);

DatabaseDollarOutlineLogo.displayName = "DatabaseDollarOutlineLogo";

export const DatabaseDollarOutlineLogoMetadata = {
  id: "database-dollar-outline",
  baseId: "database-dollar-outline",
  variant: "default",
  name: "Database Dollar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DatabaseDollarOutlineLogo;
