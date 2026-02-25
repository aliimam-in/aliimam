/**
 * Auto-generated logo component: Pointer Search Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PointerSearchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PointerSearchOutlineLogo = React.forwardRef<SVGSVGElement, PointerSearchOutlineLogoProps>(
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
      <path d="M14.778 12.222l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093" />
  <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M20.2 20.2l1.8 1.8" />
    </svg>
  )
);

PointerSearchOutlineLogo.displayName = "PointerSearchOutlineLogo";

export const PointerSearchOutlineLogoMetadata = {
  id: "pointer-search-outline",
  baseId: "pointer-search-outline",
  variant: "default",
  name: "Pointer Search Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PointerSearchOutlineLogo;
