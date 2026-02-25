/**
 * Auto-generated logo component: Sql Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SqlOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SqlOutlineLogo = React.forwardRef<SVGSVGElement, SqlOutlineLogoProps>(
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
      <path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" />
  <path d="M17 8v8h4" />
  <path d="M13 15l1 1" />
  <path d="M3 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1" />
    </svg>
  )
);

SqlOutlineLogo.displayName = "SqlOutlineLogo";

export const SqlOutlineLogoMetadata = {
  id: "sql-outline",
  baseId: "sql-outline",
  variant: "default",
  name: "Sql Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SqlOutlineLogo;
