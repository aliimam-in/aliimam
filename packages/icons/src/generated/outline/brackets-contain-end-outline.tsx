/**
 * Auto-generated logo component: Brackets Contain End Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BracketsContainEndOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BracketsContainEndOutlineLogo = React.forwardRef<SVGSVGElement, BracketsContainEndOutlineLogoProps>(
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
      <path d="M14 4h4v16h-4" />
  <path d="M5 16h.01" />
  <path d="M9 16h.01" />
  <path d="M13 16h.01" />
    </svg>
  )
);

BracketsContainEndOutlineLogo.displayName = "BracketsContainEndOutlineLogo";

export const BracketsContainEndOutlineLogoMetadata = {
  id: "brackets-contain-end-outline",
  baseId: "brackets-contain-end-outline",
  variant: "default",
  name: "Brackets Contain End Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BracketsContainEndOutlineLogo;
