/**
 * Auto-generated logo component: Cup Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CupOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CupOutlineLogo = React.forwardRef<SVGSVGElement, CupOutlineLogoProps>(
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
      <path d="M5 11h14v-3h-14l0 3" />
  <path d="M17.5 11l-1.5 10h-8l-1.5 -10" />
  <path d="M6 8v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" />
  <path d="M15 5v-2" />
    </svg>
  )
);

CupOutlineLogo.displayName = "CupOutlineLogo";

export const CupOutlineLogoMetadata = {
  id: "cup-outline",
  baseId: "cup-outline",
  variant: "default",
  name: "Cup Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CupOutlineLogo;
