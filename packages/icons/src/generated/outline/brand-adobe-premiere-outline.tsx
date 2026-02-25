/**
 * Auto-generated logo component: Brand Adobe Premiere Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAdobePremiereOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAdobePremiereOutlineLogo = React.forwardRef<SVGSVGElement, BrandAdobePremiereOutlineLogoProps>(
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
      <path d="M3 12c0 -4.243 0 -6.364 1.318 -7.682s3.44 -1.318 7.682 -1.318s6.364 0 7.682 1.318s1.318 3.44 1.318 7.682s0 6.364 -1.318 7.682s-3.44 1.318 -7.682 1.318s-6.364 0 -7.682 -1.318s-1.318 -3.44 -1.318 -7.682" />
  <path d="M7.263 15.79v-3.79m0 0v-3.248c0 -.335 .222 -.541 .542 -.541h1.353a1.895 1.895 0 1 1 0 3.789l-1.895 0" />
  <path d="M13.895 10.579v1.895m0 0v3.315m0 -3.315c.531 -.709 1.026 -1.592 1.894 -1.832q .22 -.062 .474 -.063" />
    </svg>
  )
);

BrandAdobePremiereOutlineLogo.displayName = "BrandAdobePremiereOutlineLogo";

export const BrandAdobePremiereOutlineLogoMetadata = {
  id: "brand-adobe-premiere-outline",
  baseId: "brand-adobe-premiere-outline",
  variant: "default",
  name: "Brand Adobe Premiere Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAdobePremiereOutlineLogo;
