/**
 * Auto-generated logo component: Brand Powershell Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandPowershellOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandPowershellOutlineLogo = React.forwardRef<SVGSVGElement, BrandPowershellOutlineLogoProps>(
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
      <path d="M4.887 20h11.868c.893 0 1.664 -.665 1.847 -1.592l2.358 -12c.212 -1.081 -.442 -2.14 -1.462 -2.366a1.784 1.784 0 0 0 -.385 -.042h-11.868c-.893 0 -1.664 .665 -1.847 1.592l-2.358 12c-.212 1.081 .442 2.14 1.462 2.366c.127 .028 .256 .042 .385 .042" />
  <path d="M9 8l4 4l-6 4" />
  <path d="M12 16h3" />
    </svg>
  )
);

BrandPowershellOutlineLogo.displayName = "BrandPowershellOutlineLogo";

export const BrandPowershellOutlineLogoMetadata = {
  id: "brand-powershell-outline",
  baseId: "brand-powershell-outline",
  variant: "default",
  name: "Brand Powershell Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandPowershellOutlineLogo;
