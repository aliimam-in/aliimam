/**
 * Auto-generated logo component: Brand Visual Studio Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandVisualStudioOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandVisualStudioOutlineLogo = React.forwardRef<SVGSVGElement, BrandVisualStudioOutlineLogoProps>(
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
      <path d="M4 8l2 -1l10 13l4 -2v-12l-4 -2l-10 13l-2 -1l0 -8" />
    </svg>
  )
);

BrandVisualStudioOutlineLogo.displayName = "BrandVisualStudioOutlineLogo";

export const BrandVisualStudioOutlineLogoMetadata = {
  id: "brand-visual-studio-outline",
  baseId: "brand-visual-studio-outline",
  variant: "default",
  name: "Brand Visual Studio Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandVisualStudioOutlineLogo;
