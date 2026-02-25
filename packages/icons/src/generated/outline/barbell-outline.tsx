/**
 * Auto-generated logo component: Barbell Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BarbellOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BarbellOutlineLogo = React.forwardRef<SVGSVGElement, BarbellOutlineLogoProps>(
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
      <path d="M2 12h1" />
  <path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" />
  <path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1" />
  <path d="M9 12h6" />
  <path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1" />
  <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" />
  <path d="M22 12h-1" />
    </svg>
  )
);

BarbellOutlineLogo.displayName = "BarbellOutlineLogo";

export const BarbellOutlineLogoMetadata = {
  id: "barbell-outline",
  baseId: "barbell-outline",
  variant: "default",
  name: "Barbell Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BarbellOutlineLogo;
