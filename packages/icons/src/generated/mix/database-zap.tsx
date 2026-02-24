/**
 * Auto-generated logo component: Database Zap (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DatabaseZapLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DatabaseZapLogo = React.forwardRef<SVGSVGElement, DatabaseZapLogoProps>(
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
  <path d="M3 5V19A9 3 0 0 0 15 21.84" />
  <path d="M21 5V8" />
  <path d="M21 12L18 17H22L19 22" />
  <path d="M3 12A9 3 0 0 0 14.59 14.87" />
    </svg>
  )
);

DatabaseZapLogo.displayName = "DatabaseZapLogo";

export const DatabaseZapLogoMetadata = {
  id: "database-zap",
  baseId: "database-zap",
  variant: "default",
  name: "Database Zap",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DatabaseZapLogo;
