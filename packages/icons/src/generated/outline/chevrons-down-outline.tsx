/**
 * Auto-generated logo component: Chevrons Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronsDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronsDownOutlineLogo = React.forwardRef<SVGSVGElement, ChevronsDownOutlineLogoProps>(
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
      <path d="M7 7l5 5l5 -5" />
  <path d="M7 13l5 5l5 -5" />
    </svg>
  )
);

ChevronsDownOutlineLogo.displayName = "ChevronsDownOutlineLogo";

export const ChevronsDownOutlineLogoMetadata = {
  id: "chevrons-down-outline",
  baseId: "chevrons-down-outline",
  variant: "default",
  name: "Chevrons Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronsDownOutlineLogo;
