/**
 * Auto-generated logo component: Pill Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PillOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PillOffOutlineLogo = React.forwardRef<SVGSVGElement, PillOffOutlineLogoProps>(
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
      <path d="M10.495 6.505l2 -2a4.95 4.95 0 0 1 7 7l-2 2m-2 2l-4 4a4.95 4.95 0 0 1 -7 -7l4 -4" />
  <path d="M8.5 8.5l7 7" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PillOffOutlineLogo.displayName = "PillOffOutlineLogo";

export const PillOffOutlineLogoMetadata = {
  id: "pill-off-outline",
  baseId: "pill-off-outline",
  variant: "default",
  name: "Pill Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PillOffOutlineLogo;
