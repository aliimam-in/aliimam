/**
 * Auto-generated logo component: Brackets Contain Start Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BracketsContainStartOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BracketsContainStartOutlineLogo = React.forwardRef<SVGSVGElement, BracketsContainStartOutlineLogoProps>(
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
      <path d="M9 4h-4v16h4" />
  <path d="M18 16h-.01" />
  <path d="M14 16h-.01" />
  <path d="M10 16h-.01" />
    </svg>
  )
);

BracketsContainStartOutlineLogo.displayName = "BracketsContainStartOutlineLogo";

export const BracketsContainStartOutlineLogoMetadata = {
  id: "brackets-contain-start-outline",
  baseId: "brackets-contain-start-outline",
  variant: "default",
  name: "Brackets Contain Start Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BracketsContainStartOutlineLogo;
