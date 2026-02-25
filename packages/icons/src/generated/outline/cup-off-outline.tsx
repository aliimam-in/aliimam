/**
 * Auto-generated logo component: Cup Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CupOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CupOffOutlineLogo = React.forwardRef<SVGSVGElement, CupOffOutlineLogoProps>(
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
      <path d="M8 8h-3v3h6m4 0h4v-3h-7" />
  <path d="M17.5 11l-.323 2.154m-.525 3.497l-.652 4.349h-8l-1.5 -10" />
  <path d="M6 8v-1c0 -.296 .064 -.577 .18 -.83m2.82 -1.17h7a2 2 0 0 1 2 2v1" />
  <path d="M15 5v-2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CupOffOutlineLogo.displayName = "CupOffOutlineLogo";

export const CupOffOutlineLogoMetadata = {
  id: "cup-off-outline",
  baseId: "cup-off-outline",
  variant: "default",
  name: "Cup Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CupOffOutlineLogo;
