/**
 * Auto-generated logo component: Clear All Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClearAllOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClearAllOutlineLogo = React.forwardRef<SVGSVGElement, ClearAllOutlineLogoProps>(
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
      <path d="M8 6h12" />
  <path d="M6 12h12" />
  <path d="M4 18h12" />
    </svg>
  )
);

ClearAllOutlineLogo.displayName = "ClearAllOutlineLogo";

export const ClearAllOutlineLogoMetadata = {
  id: "clear-all-outline",
  baseId: "clear-all-outline",
  variant: "default",
  name: "Clear All Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClearAllOutlineLogo;
