/**
 * Auto-generated logo component: Brand Azure Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAzureOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAzureOutlineLogo = React.forwardRef<SVGSVGElement, BrandAzureOutlineLogoProps>(
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
      <path d="M6 7.5l-4 9.5h4l6 -15l-6 5.5" />
  <path d="M22 20l-7 -15l-3 7l4 5l-8 3l14 0" />
    </svg>
  )
);

BrandAzureOutlineLogo.displayName = "BrandAzureOutlineLogo";

export const BrandAzureOutlineLogoMetadata = {
  id: "brand-azure-outline",
  baseId: "brand-azure-outline",
  variant: "default",
  name: "Brand Azure Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAzureOutlineLogo;
