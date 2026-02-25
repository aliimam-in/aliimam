/**
 * Auto-generated logo component: Brackets Contain Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BracketsContainOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BracketsContainOutlineLogo = React.forwardRef<SVGSVGElement, BracketsContainOutlineLogoProps>(
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
      <path d="M7 4h-4v16h4" />
  <path d="M17 4h4v16h-4" />
  <path d="M8 16h.01" />
  <path d="M12 16h.01" />
  <path d="M16 16h.01" />
    </svg>
  )
);

BracketsContainOutlineLogo.displayName = "BracketsContainOutlineLogo";

export const BracketsContainOutlineLogoMetadata = {
  id: "brackets-contain-outline",
  baseId: "brackets-contain-outline",
  variant: "default",
  name: "Brackets Contain Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BracketsContainOutlineLogo;
