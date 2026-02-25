/**
 * Auto-generated logo component: Cake Roll Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CakeRollOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CakeRollOutlineLogo = React.forwardRef<SVGSVGElement, CakeRollOutlineLogoProps>(
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
      <path d="M12 15c-4.97 0 -9 -2.462 -9 -5.5s4.03 -5.5 9 -5.5s9 2.462 9 5.5s-4.03 5.5 -9 5.5" />
  <path d="M12 6.97c3 0 4 1.036 4 1.979c0 2.805 -8 2.969 -8 -.99c0 -2.11 1.5 -3.959 4 -3.959" />
  <path d="M21 9.333v5.334c0 2.945 -4.03 5.333 -9 5.333c-4.97 0 -9 -2.388 -9 -5.333v-5.334" />
    </svg>
  )
);

CakeRollOutlineLogo.displayName = "CakeRollOutlineLogo";

export const CakeRollOutlineLogoMetadata = {
  id: "cake-roll-outline",
  baseId: "cake-roll-outline",
  variant: "default",
  name: "Cake Roll Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CakeRollOutlineLogo;
