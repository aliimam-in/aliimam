/**
 * Auto-generated logo component: Database Smile Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DatabaseSmileOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DatabaseSmileOutlineLogo = React.forwardRef<SVGSVGElement, DatabaseSmileOutlineLogoProps>(
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
      <path d="M10 14h.01" />
  <path d="M14 14h.01" />
  <path d="M10 17a3.5 3.5 0 0 0 4 0" />
  <path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" />
  <path d="M4 6v12c0 1.657 3.582 3 8 3s8 -1.343 8 -3v-12" />
    </svg>
  )
);

DatabaseSmileOutlineLogo.displayName = "DatabaseSmileOutlineLogo";

export const DatabaseSmileOutlineLogoMetadata = {
  id: "database-smile-outline",
  baseId: "database-smile-outline",
  variant: "default",
  name: "Database Smile Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DatabaseSmileOutlineLogo;
