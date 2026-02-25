/**
 * Auto-generated logo component: Category Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CategoryOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CategoryOutlineLogo = React.forwardRef<SVGSVGElement, CategoryOutlineLogoProps>(
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
      <path d="M4 4h6v6h-6l0 -6" />
  <path d="M14 4h6v6h-6l0 -6" />
  <path d="M4 14h6v6h-6l0 -6" />
  <path d="M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    </svg>
  )
);

CategoryOutlineLogo.displayName = "CategoryOutlineLogo";

export const CategoryOutlineLogoMetadata = {
  id: "category-outline",
  baseId: "category-outline",
  variant: "default",
  name: "Category Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CategoryOutlineLogo;
