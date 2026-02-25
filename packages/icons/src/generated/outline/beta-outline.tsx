/**
 * Auto-generated logo component: Beta Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BetaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BetaOutlineLogo = React.forwardRef<SVGSVGElement, BetaOutlineLogoProps>(
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
      <path d="M8 22v-14a4 4 0 0 1 4 -4h.5a3.5 3.5 0 0 1 0 7h-.5h.5a4.5 4.5 0 1 1 -4.5 4.5v-.5" />
    </svg>
  )
);

BetaOutlineLogo.displayName = "BetaOutlineLogo";

export const BetaOutlineLogoMetadata = {
  id: "beta-outline",
  baseId: "beta-outline",
  variant: "default",
  name: "Beta Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BetaOutlineLogo;
