/**
 * Auto-generated logo component: Copy Check (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CopyCheckLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CopyCheckLogo = React.forwardRef<SVGSVGElement, CopyCheckLogoProps>(
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
      <path d="m12 15 2 2 4-4" />
  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
);

CopyCheckLogo.displayName = "CopyCheckLogo";

export const CopyCheckLogoMetadata = {
  id: "copy-check",
  baseId: "copy-check",
  variant: "default",
  name: "Copy Check",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CopyCheckLogo;
