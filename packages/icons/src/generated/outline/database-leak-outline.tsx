/**
 * Auto-generated logo component: Database Leak Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DatabaseLeakOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DatabaseLeakOutlineLogo = React.forwardRef<SVGSVGElement, DatabaseLeakOutlineLogoProps>(
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
  <path d="M4 6v12c0 1.657 3.582 3 8 3s8 -1.343 8 -3v-12" />
  <path d="M4 15a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1" />
    </svg>
  )
);

DatabaseLeakOutlineLogo.displayName = "DatabaseLeakOutlineLogo";

export const DatabaseLeakOutlineLogoMetadata = {
  id: "database-leak-outline",
  baseId: "database-leak-outline",
  variant: "default",
  name: "Database Leak Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DatabaseLeakOutlineLogo;
