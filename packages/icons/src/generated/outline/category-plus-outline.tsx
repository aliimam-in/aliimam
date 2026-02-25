/**
 * Auto-generated logo component: Category Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CategoryPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CategoryPlusOutlineLogo = React.forwardRef<SVGSVGElement, CategoryPlusOutlineLogoProps>(
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
      <path d="M4 4h6v6h-6v-6" />
  <path d="M14 4h6v6h-6v-6" />
  <path d="M4 14h6v6h-6v-6" />
  <path d="M14 17h6m-3 -3v6" />
    </svg>
  )
);

CategoryPlusOutlineLogo.displayName = "CategoryPlusOutlineLogo";

export const CategoryPlusOutlineLogoMetadata = {
  id: "category-plus-outline",
  baseId: "category-plus-outline",
  variant: "default",
  name: "Category Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CategoryPlusOutlineLogo;
