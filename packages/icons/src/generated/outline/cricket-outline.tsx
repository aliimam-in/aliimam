/**
 * Auto-generated logo component: Cricket Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CricketOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CricketOutlineLogo = React.forwardRef<SVGSVGElement, CricketOutlineLogoProps>(
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
      <path d="M11.105 18.79l-1 .992a4.159 4.159 0 0 1 -6.038 -5.715l.157 -.166l8.282 -8.401l1.5 1.5l3.45 -3.391a2.08 2.08 0 0 1 3.057 2.815l-.116 .126l-3.391 3.45l1.5 1.5l-3.668 3.617" />
  <path d="M10.5 7.5l6 6" />
  <path d="M11 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    </svg>
  )
);

CricketOutlineLogo.displayName = "CricketOutlineLogo";

export const CricketOutlineLogoMetadata = {
  id: "cricket-outline",
  baseId: "cricket-outline",
  variant: "default",
  name: "Cricket Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CricketOutlineLogo;
