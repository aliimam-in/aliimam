/**
 * Auto-generated logo component: Bell Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BellOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BellOffOutlineLogo = React.forwardRef<SVGSVGElement, BellOffOutlineLogoProps>(
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
      <path d="M9.346 5.353c.21 -.129 .428 -.246 .654 -.353a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3m-1 3h-13a4 4 0 0 0 2 -3v-3a6.996 6.996 0 0 1 1.273 -3.707" />
  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BellOffOutlineLogo.displayName = "BellOffOutlineLogo";

export const BellOffOutlineLogoMetadata = {
  id: "bell-off-outline",
  baseId: "bell-off-outline",
  variant: "default",
  name: "Bell Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BellOffOutlineLogo;
