/**
 * Auto-generated logo component: Brackets Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BracketsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BracketsOutlineLogo = React.forwardRef<SVGSVGElement, BracketsOutlineLogoProps>(
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
      <path d="M8 4h-3v16h3" />
  <path d="M16 4h3v16h-3" />
    </svg>
  )
);

BracketsOutlineLogo.displayName = "BracketsOutlineLogo";

export const BracketsOutlineLogoMetadata = {
  id: "brackets-outline",
  baseId: "brackets-outline",
  variant: "default",
  name: "Brackets Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BracketsOutlineLogo;
