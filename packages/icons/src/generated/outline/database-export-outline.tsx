/**
 * Auto-generated logo component: Database Export Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DatabaseExportOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DatabaseExportOutlineLogo = React.forwardRef<SVGSVGElement, DatabaseExportOutlineLogoProps>(
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
  <path d="M4 6v6c0 1.657 3.582 3 8 3c1.118 0 2.183 -.086 3.15 -.241" />
  <path d="M20 12v-6" />
  <path d="M4 12v6c0 1.657 3.582 3 8 3c.157 0 .312 -.002 .466 -.005" />
  <path d="M16 19h6" />
  <path d="M19 16l3 3l-3 3" />
    </svg>
  )
);

DatabaseExportOutlineLogo.displayName = "DatabaseExportOutlineLogo";

export const DatabaseExportOutlineLogoMetadata = {
  id: "database-export-outline",
  baseId: "database-export-outline",
  variant: "default",
  name: "Database Export Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DatabaseExportOutlineLogo;
