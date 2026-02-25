/**
 * Auto-generated logo component: Database Search Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DatabaseSearchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DatabaseSearchOutlineLogo = React.forwardRef<SVGSVGElement, DatabaseSearchOutlineLogoProps>(
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
  <path d="M4 6v6c0 1.657 3.582 3 8 3m8 -3.5v-5.5" />
  <path d="M4 12v6c0 1.657 3.582 3 8 3" />
  <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M20.2 20.2l1.8 1.8" />
    </svg>
  )
);

DatabaseSearchOutlineLogo.displayName = "DatabaseSearchOutlineLogo";

export const DatabaseSearchOutlineLogoMetadata = {
  id: "database-search-outline",
  baseId: "database-search-outline",
  variant: "default",
  name: "Database Search Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DatabaseSearchOutlineLogo;
