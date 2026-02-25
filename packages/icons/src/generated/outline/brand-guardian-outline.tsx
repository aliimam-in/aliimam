/**
 * Auto-generated logo component: Brand Guardian Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandGuardianOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandGuardianOutlineLogo = React.forwardRef<SVGSVGElement, BrandGuardianOutlineLogoProps>(
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
      <path d="M14 13h6" />
  <path d="M4 12c0 -9.296 9.5 -9 9.5 -9c-2.808 0 -4.5 4.373 -4.5 9s1.763 8.976 4.572 8.976c0 .023 -9.572 1.092 -9.572 -8.976" />
  <path d="M14.5 3c1.416 0 3.853 1.16 4.5 2v3.5" />
  <path d="M15 13v8s2.77 -.37 4 -2v-6" />
  <path d="M13.5 21h1.5" />
  <path d="M13.5 3h1" />
    </svg>
  )
);

BrandGuardianOutlineLogo.displayName = "BrandGuardianOutlineLogo";

export const BrandGuardianOutlineLogoMetadata = {
  id: "brand-guardian-outline",
  baseId: "brand-guardian-outline",
  variant: "default",
  name: "Brand Guardian Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandGuardianOutlineLogo;
