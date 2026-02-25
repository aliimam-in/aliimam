/**
 * Auto-generated logo component: Category 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Category2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Category2OutlineLogo = React.forwardRef<SVGSVGElement, Category2OutlineLogoProps>(
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
      <path d="M14 4h6v6h-6l0 -6" />
  <path d="M4 14h6v6h-6l0 -6" />
  <path d="M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M4 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    </svg>
  )
);

Category2OutlineLogo.displayName = "Category2OutlineLogo";

export const Category2OutlineLogoMetadata = {
  id: "category-2-outline",
  baseId: "category-2-outline",
  variant: "default",
  name: "Category 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Category2OutlineLogo;
