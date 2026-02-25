/**
 * Auto-generated logo component: Database Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DatabasePlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DatabasePlusOutlineLogo = React.forwardRef<SVGSVGElement, DatabasePlusOutlineLogoProps>(
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
  <path d="M4 6v6c0 1.657 3.582 3 8 3c1.075 0 2.1 -.08 3.037 -.224" />
  <path d="M20 12v-6" />
  <path d="M4 12v6c0 1.657 3.582 3 8 3c.166 0 .331 -.002 .495 -.006" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

DatabasePlusOutlineLogo.displayName = "DatabasePlusOutlineLogo";

export const DatabasePlusOutlineLogoMetadata = {
  id: "database-plus-outline",
  baseId: "database-plus-outline",
  variant: "default",
  name: "Database Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DatabasePlusOutlineLogo;
