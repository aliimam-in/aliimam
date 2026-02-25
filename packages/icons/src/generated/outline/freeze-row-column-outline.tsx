/**
 * Auto-generated logo component: Freeze Row Column Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FreezeRowColumnOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FreezeRowColumnOutlineLogo = React.forwardRef<SVGSVGElement, FreezeRowColumnOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M15 3l-12 12" />
  <path d="M9.5 3l-6 6" />
  <path d="M20 3.5l-5.5 5.5" />
  <path d="M9 15l-5 5" />
  <path d="M21 9h-12v12" />
    </svg>
  )
);

FreezeRowColumnOutlineLogo.displayName = "FreezeRowColumnOutlineLogo";

export const FreezeRowColumnOutlineLogoMetadata = {
  id: "freeze-row-column-outline",
  baseId: "freeze-row-column-outline",
  variant: "default",
  name: "Freeze Row Column Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FreezeRowColumnOutlineLogo;
