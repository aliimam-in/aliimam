/**
 * Auto-generated logo component: Axe Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AxeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AxeOutlineLogo = React.forwardRef<SVGSVGElement, AxeOutlineLogoProps>(
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
      <path d="M13 9l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385" />
  <path d="M6.66 15.66l-3.32 -3.32a1.25 1.25 0 0 1 .42 -2.044l3.24 -1.296l6 -6l3 3l-6 6l-1.296 3.24a1.25 1.25 0 0 1 -2.044 .42" />
    </svg>
  )
);

AxeOutlineLogo.displayName = "AxeOutlineLogo";

export const AxeOutlineLogoMetadata = {
  id: "axe-outline",
  baseId: "axe-outline",
  variant: "default",
  name: "Axe Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AxeOutlineLogo;
