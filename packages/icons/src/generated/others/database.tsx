/**
 * Auto-generated logo component: Database (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DatabaseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DatabaseLogo = React.forwardRef<SVGSVGElement, DatabaseLogoProps>(
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
  <path d="M3 5V19A9 3 0 0 0 21 19V5" />
  <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
);

DatabaseLogo.displayName = "DatabaseLogo";

export const DatabaseLogoMetadata = {
  id: "database",
  baseId: "database",
  variant: "default",
  name: "Database",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DatabaseLogo;
