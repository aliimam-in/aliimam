/**
 * Auto-generated logo component: Bucket Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BucketOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BucketOutlineLogo = React.forwardRef<SVGSVGElement, BucketOutlineLogoProps>(
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
      <path d="M4 7a8 4 0 1 0 16 0a8 4 0 1 0 -16 0" />
  <path d="M4 7c0 .664 .088 1.324 .263 1.965l2.737 10.035c.5 1.5 2.239 2 5 2s4.5 -.5 5 -2c.333 -1 1.246 -4.345 2.737 -10.035a7.45 7.45 0 0 0 .263 -1.965" />
    </svg>
  )
);

BucketOutlineLogo.displayName = "BucketOutlineLogo";

export const BucketOutlineLogoMetadata = {
  id: "bucket-outline",
  baseId: "bucket-outline",
  variant: "default",
  name: "Bucket Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BucketOutlineLogo;
