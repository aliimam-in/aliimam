/**
 * Auto-generated logo component: Brand Apple Arcade Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAppleArcadeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAppleArcadeOutlineLogo = React.forwardRef<SVGSVGElement, BrandAppleArcadeOutlineLogoProps>(
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
      <path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M20 12.5v4.75a.734 .734 0 0 1 -.055 .325a.704 .704 0 0 1 -.348 .366l-5.462 2.58a5 5 0 0 1 -4.27 0l-5.462 -2.58a.705 .705 0 0 1 -.401 -.691l0 -4.75" />
  <path d="M4.431 12.216l5.634 -2.332a5.065 5.065 0 0 1 3.87 0l5.634 2.332a.692 .692 0 0 1 .028 1.269l-5.462 2.543a5.064 5.064 0 0 1 -4.27 0l-5.462 -2.543a.691 .691 0 0 1 .028 -1.27" />
  <path d="M12 7l0 6" />
    </svg>
  )
);

BrandAppleArcadeOutlineLogo.displayName = "BrandAppleArcadeOutlineLogo";

export const BrandAppleArcadeOutlineLogoMetadata = {
  id: "brand-apple-arcade-outline",
  baseId: "brand-apple-arcade-outline",
  variant: "default",
  name: "Brand Apple Arcade Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAppleArcadeOutlineLogo;
