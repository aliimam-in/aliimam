/**
 * Auto-generated logo component: Brand Envato Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandEnvatoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandEnvatoOutlineLogo = React.forwardRef<SVGSVGElement, BrandEnvatoOutlineLogoProps>(
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
      <path d="M4.711 17.875c-.534 -1.339 -1.35 -4.178 .129 -6.47c1.415 -2.193 3.769 -3.608 5.099 -4.278l-5.229 10.748l.001 0" />
  <path d="M19.715 12.508c-.54 3.409 -2.094 6.156 -4.155 7.348c-4.069 2.353 -8.144 .45 -9.297 -.188c.877 -1.436 4.433 -7.22 6.882 -10.591c2.714 -3.737 5.864 -5.978 6.565 -6.077c0 .201 .03 .55 .071 1.03c.144 1.709 .443 5.264 -.066 8.478" />
    </svg>
  )
);

BrandEnvatoOutlineLogo.displayName = "BrandEnvatoOutlineLogo";

export const BrandEnvatoOutlineLogoMetadata = {
  id: "brand-envato-outline",
  baseId: "brand-envato-outline",
  variant: "default",
  name: "Brand Envato Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandEnvatoOutlineLogo;
