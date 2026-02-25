/**
 * Auto-generated logo component: Brand Databricks Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandDatabricksOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandDatabricksOutlineLogo = React.forwardRef<SVGSVGElement, BrandDatabricksOutlineLogoProps>(
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
      <path d="M3 17l9 5l9 -5v-3l-9 5l-9 -5v-3l9 5l9 -5v-3l-9 5l-9 -5l9 -5l5.418 3.01" />
    </svg>
  )
);

BrandDatabricksOutlineLogo.displayName = "BrandDatabricksOutlineLogo";

export const BrandDatabricksOutlineLogoMetadata = {
  id: "brand-databricks-outline",
  baseId: "brand-databricks-outline",
  variant: "default",
  name: "Brand Databricks Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandDatabricksOutlineLogo;
