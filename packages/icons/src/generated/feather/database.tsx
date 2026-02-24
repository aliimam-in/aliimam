/**
 * Auto-generated logo component: Database (default)
 * Category: feather
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
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  )
);

DatabaseLogo.displayName = "DatabaseLogo";

export const DatabaseLogoMetadata = {
  id: "database",
  baseId: "database",
  variant: "default",
  name: "Database",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DatabaseLogo;
