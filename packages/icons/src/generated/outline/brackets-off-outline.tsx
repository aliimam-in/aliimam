/**
 * Auto-generated logo component: Brackets Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BracketsOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BracketsOffOutlineLogo = React.forwardRef<SVGSVGElement, BracketsOffOutlineLogoProps>(
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
      <path d="M5 5v15h3" />
  <path d="M16 4h3v11m0 4v1h-3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BracketsOffOutlineLogo.displayName = "BracketsOffOutlineLogo";

export const BracketsOffOutlineLogoMetadata = {
  id: "brackets-off-outline",
  baseId: "brackets-off-outline",
  variant: "default",
  name: "Brackets Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BracketsOffOutlineLogo;
