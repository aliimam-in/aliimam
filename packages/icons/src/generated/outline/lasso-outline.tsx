/**
 * Auto-generated logo component: Lasso Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LassoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LassoOutlineLogo = React.forwardRef<SVGSVGElement, LassoOutlineLogoProps>(
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
      <path d="M4.028 13.252c-.657 -.972 -1.028 -2.078 -1.028 -3.252c0 -3.866 4.03 -7 9 -7s9 3.134 9 7s-4.03 7 -9 7c-1.913 0 -3.686 -.464 -5.144 -1.255" />
  <path d="M3 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M5 17c0 1.42 .316 2.805 1 4" />
    </svg>
  )
);

LassoOutlineLogo.displayName = "LassoOutlineLogo";

export const LassoOutlineLogoMetadata = {
  id: "lasso-outline",
  baseId: "lasso-outline",
  variant: "default",
  name: "Lasso Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LassoOutlineLogo;
