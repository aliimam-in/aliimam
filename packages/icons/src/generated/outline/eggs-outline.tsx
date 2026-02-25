/**
 * Auto-generated logo component: Eggs Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EggsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EggsOutlineLogo = React.forwardRef<SVGSVGElement, EggsOutlineLogoProps>(
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
      <path d="M13 22c-3 0 -4.868 -2.118 -5 -5c0 -3 2 -5 5 -5c4 0 8.01 2.5 8 5c0 2.5 -4 5 -8 5" />
  <path d="M8 18c-3.03 -.196 -5 -2.309 -5 -5.38c0 -4.307 2.75 -8.625 5.5 -8.62c2.614 0 5.248 3.915 5.5 8" />
    </svg>
  )
);

EggsOutlineLogo.displayName = "EggsOutlineLogo";

export const EggsOutlineLogoMetadata = {
  id: "eggs-outline",
  baseId: "eggs-outline",
  variant: "default",
  name: "Eggs Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EggsOutlineLogo;
