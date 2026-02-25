/**
 * Auto-generated logo component: Brand Topbuzz Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandTopbuzzOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandTopbuzzOutlineLogo = React.forwardRef<SVGSVGElement, BrandTopbuzzOutlineLogoProps>(
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
      <path d="M4.417 8.655a.524 .524 0 0 1 -.405 -.622l.986 -4.617a.524 .524 0 0 1 .626 -.404l14.958 3.162c.285 .06 .467 .339 .406 .622l-.987 4.618a.524 .524 0 0 1 -.625 .404l-4.345 -.92c-.198 -.04 -.315 .024 -.353 .197l-2.028 9.49a.527 .527 0 0 1 -.625 .404l-4.642 -.982a.527 .527 0 0 1 -.406 -.622l2.028 -9.493c.037 -.17 -.031 -.274 -.204 -.31l-4.384 -.927" />
    </svg>
  )
);

BrandTopbuzzOutlineLogo.displayName = "BrandTopbuzzOutlineLogo";

export const BrandTopbuzzOutlineLogoMetadata = {
  id: "brand-topbuzz-outline",
  baseId: "brand-topbuzz-outline",
  variant: "default",
  name: "Brand Topbuzz Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandTopbuzzOutlineLogo;
