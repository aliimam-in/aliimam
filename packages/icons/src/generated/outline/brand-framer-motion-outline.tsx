/**
 * Auto-generated logo component: Brand Framer Motion Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandFramerMotionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandFramerMotionOutlineLogo = React.forwardRef<SVGSVGElement, BrandFramerMotionOutlineLogoProps>(
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
      <path d="M12 12l-8 -8v16l16 -16v16l-4 -4" />
  <path d="M20 12l-8 8l-4 -4" />
    </svg>
  )
);

BrandFramerMotionOutlineLogo.displayName = "BrandFramerMotionOutlineLogo";

export const BrandFramerMotionOutlineLogoMetadata = {
  id: "brand-framer-motion-outline",
  baseId: "brand-framer-motion-outline",
  variant: "default",
  name: "Brand Framer Motion Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandFramerMotionOutlineLogo;
