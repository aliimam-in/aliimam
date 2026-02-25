/**
 * Auto-generated logo component: Freeze Column Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FreezeColumnOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FreezeColumnOutlineLogo = React.forwardRef<SVGSVGElement, FreezeColumnOutlineLogoProps>(
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
      <path d="M9 9.5l-6 6" />
  <path d="M9 4l-6 6" />
  <path d="M9 15l-5 5" />
  <path d="M9 3v18" />
  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
    </svg>
  )
);

FreezeColumnOutlineLogo.displayName = "FreezeColumnOutlineLogo";

export const FreezeColumnOutlineLogoMetadata = {
  id: "freeze-column-outline",
  baseId: "freeze-column-outline",
  variant: "default",
  name: "Freeze Column Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FreezeColumnOutlineLogo;
