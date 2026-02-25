/**
 * Auto-generated logo component: Parentheses Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ParenthesesOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ParenthesesOffOutlineLogo = React.forwardRef<SVGSVGElement, ParenthesesOffOutlineLogoProps>(
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
      <path d="M5.743 5.745a12.253 12.253 0 0 0 1.257 14.255" />
  <path d="M17 4a12.25 12.25 0 0 1 2.474 11.467m-1.22 2.794a12.291 12.291 0 0 1 -1.254 1.739" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ParenthesesOffOutlineLogo.displayName = "ParenthesesOffOutlineLogo";

export const ParenthesesOffOutlineLogoMetadata = {
  id: "parentheses-off-outline",
  baseId: "parentheses-off-outline",
  variant: "default",
  name: "Parentheses Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ParenthesesOffOutlineLogo;
