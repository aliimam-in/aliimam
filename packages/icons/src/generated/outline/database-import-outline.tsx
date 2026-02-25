/**
 * Auto-generated logo component: Database Import Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DatabaseImportOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DatabaseImportOutlineLogo = React.forwardRef<SVGSVGElement, DatabaseImportOutlineLogoProps>(
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
  <path d="M4 6v6c0 1.657 3.582 3 8 3c.856 0 1.68 -.05 2.454 -.144m5.546 -2.856v-6" />
  <path d="M4 12v6c0 1.657 3.582 3 8 3c.171 0 .341 -.002 .51 -.006" />
  <path d="M19 22v-6" />
  <path d="M22 19l-3 -3l-3 3" />
    </svg>
  )
);

DatabaseImportOutlineLogo.displayName = "DatabaseImportOutlineLogo";

export const DatabaseImportOutlineLogoMetadata = {
  id: "database-import-outline",
  baseId: "database-import-outline",
  variant: "default",
  name: "Database Import Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DatabaseImportOutlineLogo;
