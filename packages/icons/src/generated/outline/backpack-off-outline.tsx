/**
 * Auto-generated logo component: Backpack Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BackpackOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BackpackOffOutlineLogo = React.forwardRef<SVGSVGElement, BackpackOffOutlineLogoProps>(
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
      <path d="M10 6h3a6 6 0 0 1 6 6v3m-.129 3.872a3 3 0 0 1 -2.871 2.128h-8a3 3 0 0 1 -3 -3v-6a5.99 5.99 0 0 1 2.285 -4.712" />
  <path d="M10 6v-1a2 2 0 1 1 4 0v1" />
  <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BackpackOffOutlineLogo.displayName = "BackpackOffOutlineLogo";

export const BackpackOffOutlineLogoMetadata = {
  id: "backpack-off-outline",
  baseId: "backpack-off-outline",
  variant: "default",
  name: "Backpack Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BackpackOffOutlineLogo;
