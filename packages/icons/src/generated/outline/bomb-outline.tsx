/**
 * Auto-generated logo component: Bomb Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BombOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BombOutlineLogo = React.forwardRef<SVGSVGElement, BombOutlineLogoProps>(
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
      <path d="M15.349 5.349l3.301 3.301a1.2 1.2 0 0 1 0 1.698l-.972 .972a7.5 7.5 0 1 1 -5 -5l.972 -.972a1.2 1.2 0 0 1 1.698 0l.001 .001" />
  <path d="M17 7l1.293 -1.293a2.414 2.414 0 0 0 .707 -1.707a1 1 0 0 1 1 -1h1" />
  <path d="M7 13a3 3 0 0 1 3 -3" />
    </svg>
  )
);

BombOutlineLogo.displayName = "BombOutlineLogo";

export const BombOutlineLogoMetadata = {
  id: "bomb-outline",
  baseId: "bomb-outline",
  variant: "default",
  name: "Bomb Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BombOutlineLogo;
