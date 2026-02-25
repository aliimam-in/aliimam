/**
 * Auto-generated logo component: Pig Money Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PigMoneyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PigMoneyOutlineLogo = React.forwardRef<SVGSVGElement, PigMoneyOutlineLogoProps>(
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
      <path d="M15 11v.01" />
  <path d="M5.173 8.378a3 3 0 1 1 4.656 -1.377" />
  <path d="M16 4v3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342c-.336 .95 -.907 1.8 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1 -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3" />
    </svg>
  )
);

PigMoneyOutlineLogo.displayName = "PigMoneyOutlineLogo";

export const PigMoneyOutlineLogoMetadata = {
  id: "pig-money-outline",
  baseId: "pig-money-outline",
  variant: "default",
  name: "Pig Money Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PigMoneyOutlineLogo;
