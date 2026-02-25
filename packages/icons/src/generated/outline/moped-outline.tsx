/**
 * Auto-generated logo component: Moped Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MopedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MopedOutlineLogo = React.forwardRef<SVGSVGElement, MopedOutlineLogoProps>(
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
      <path d="M16 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M5 16v1a2 2 0 0 0 4 0v-5h-3a3 3 0 0 0 -3 3v1h10a6 6 0 0 1 5 -4v-5a2 2 0 0 0 -2 -2h-1" />
  <path d="M6 9l3 0" />
    </svg>
  )
);

MopedOutlineLogo.displayName = "MopedOutlineLogo";

export const MopedOutlineLogoMetadata = {
  id: "moped-outline",
  baseId: "moped-outline",
  variant: "default",
  name: "Moped Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MopedOutlineLogo;
