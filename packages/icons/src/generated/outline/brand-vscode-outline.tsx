/**
 * Auto-generated logo component: Brand Vscode Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandVscodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandVscodeOutlineLogo = React.forwardRef<SVGSVGElement, BrandVscodeOutlineLogoProps>(
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
      <path d="M16 3v18l4 -2.5v-13l-4 -2.5" />
  <path d="M9.165 13.903l-4.165 3.597l-2 -1l4.333 -4.5m1.735 -1.802l6.932 -7.198v5l-4.795 4.141" />
  <path d="M16 16.5l-11 -10l-2 1l13 13.5" />
    </svg>
  )
);

BrandVscodeOutlineLogo.displayName = "BrandVscodeOutlineLogo";

export const BrandVscodeOutlineLogoMetadata = {
  id: "brand-vscode-outline",
  baseId: "brand-vscode-outline",
  variant: "default",
  name: "Brand Vscode Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandVscodeOutlineLogo;
