/**
 * Auto-generated logo component: Diabolo Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DiaboloOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DiaboloOutlineLogo = React.forwardRef<SVGSVGElement, DiaboloOutlineLogoProps>(
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
      <path d="M4 6a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
  <path d="M4 6v.143a1 1 0 0 0 .048 .307l1.952 5.55l-1.964 5.67a1 1 0 0 0 -.036 .265v.065c0 1.657 3.582 3 8 3s8 -1.343 8 -3v-.065a1 1 0 0 0 -.036 -.265l-1.964 -5.67l1.952 -5.55a1 1 0 0 0 .048 -.307v-.143" />
  <path d="M6 12c0 1.105 2.686 2 6 2s6 -.895 6 -2" />
    </svg>
  )
);

DiaboloOutlineLogo.displayName = "DiaboloOutlineLogo";

export const DiaboloOutlineLogoMetadata = {
  id: "diabolo-outline",
  baseId: "diabolo-outline",
  variant: "default",
  name: "Diabolo Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DiaboloOutlineLogo;
