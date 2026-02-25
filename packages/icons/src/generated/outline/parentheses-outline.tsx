/**
 * Auto-generated logo component: Parentheses Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ParenthesesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ParenthesesOutlineLogo = React.forwardRef<SVGSVGElement, ParenthesesOutlineLogoProps>(
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
      <path d="M7 4a12.25 12.25 0 0 0 0 16" />
  <path d="M17 4a12.25 12.25 0 0 1 0 16" />
    </svg>
  )
);

ParenthesesOutlineLogo.displayName = "ParenthesesOutlineLogo";

export const ParenthesesOutlineLogoMetadata = {
  id: "parentheses-outline",
  baseId: "parentheses-outline",
  variant: "default",
  name: "Parentheses Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ParenthesesOutlineLogo;
