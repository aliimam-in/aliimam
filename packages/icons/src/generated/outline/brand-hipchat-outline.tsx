/**
 * Auto-generated logo component: Brand Hipchat Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandHipchatOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandHipchatOutlineLogo = React.forwardRef<SVGSVGElement, BrandHipchatOutlineLogoProps>(
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
      <path d="M17.802 17.292s.077 -.055 .2 -.149c1.843 -1.425 3 -3.49 3 -5.789c0 -4.286 -4.03 -7.764 -9 -7.764c-4.97 0 -9 3.478 -9 7.764c0 4.288 4.03 7.646 9 7.646c.424 0 1.12 -.028 2.088 -.084c1.262 .82 3.104 1.493 4.716 1.493c.499 0 .734 -.41 .414 -.828c-.486 -.596 -1.156 -1.551 -1.416 -2.29l-.002 .001" />
  <path d="M7.5 13.5c2.5 2.5 6.5 2.5 9 0" />
    </svg>
  )
);

BrandHipchatOutlineLogo.displayName = "BrandHipchatOutlineLogo";

export const BrandHipchatOutlineLogoMetadata = {
  id: "brand-hipchat-outline",
  baseId: "brand-hipchat-outline",
  variant: "default",
  name: "Brand Hipchat Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandHipchatOutlineLogo;
