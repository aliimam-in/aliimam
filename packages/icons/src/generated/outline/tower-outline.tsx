/**
 * Auto-generated logo component: Tower Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TowerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TowerOutlineLogo = React.forwardRef<SVGSVGElement, TowerOutlineLogoProps>(
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
      <path d="M5 3h1a1 1 0 0 1 1 1v2h3v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2h3v-2a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1v4.394a2 2 0 0 1 -.336 1.11l-1.328 1.992a2 2 0 0 0 -.336 1.11v7.394a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-7.394a2 2 0 0 0 -.336 -1.11l-1.328 -1.992a2 2 0 0 1 -.336 -1.11v-4.394a1 1 0 0 1 1 -1" />
  <path d="M10 21v-5a2 2 0 1 1 4 0v5" />
    </svg>
  )
);

TowerOutlineLogo.displayName = "TowerOutlineLogo";

export const TowerOutlineLogoMetadata = {
  id: "tower-outline",
  baseId: "tower-outline",
  variant: "default",
  name: "Tower Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TowerOutlineLogo;
