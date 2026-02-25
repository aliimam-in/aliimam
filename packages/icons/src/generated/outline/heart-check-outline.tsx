/**
 * Auto-generated logo component: Heart Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeartCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeartCheckOutlineLogo = React.forwardRef<SVGSVGElement, HeartCheckOutlineLogoProps>(
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
      <path d="M19.5 12.572l-3 2.928m-5.5 3.5a8916.99 8916.99 0 0 0 -6.5 -6.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

HeartCheckOutlineLogo.displayName = "HeartCheckOutlineLogo";

export const HeartCheckOutlineLogoMetadata = {
  id: "heart-check-outline",
  baseId: "heart-check-outline",
  variant: "default",
  name: "Heart Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeartCheckOutlineLogo;
