/**
 * Auto-generated logo component: Cat Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CatOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CatOutlineLogo = React.forwardRef<SVGSVGElement, CatOutlineLogoProps>(
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
      <path d="M20 3v10a8 8 0 1 1 -16 0v-10l3.432 3.432a7.963 7.963 0 0 1 4.568 -1.432c1.769 0 3.403 .574 4.728 1.546l3.272 -3.546" />
  <path d="M2 16h5l-4 4" />
  <path d="M22 16h-5l4 4" />
  <path d="M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M9 11v.01" />
  <path d="M15 11v.01" />
    </svg>
  )
);

CatOutlineLogo.displayName = "CatOutlineLogo";

export const CatOutlineLogoMetadata = {
  id: "cat-outline",
  baseId: "cat-outline",
  variant: "default",
  name: "Cat Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CatOutlineLogo;
