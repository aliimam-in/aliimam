/**
 * Auto-generated logo component: Bucket Droplet Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BucketDropletOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BucketDropletOutlineLogo = React.forwardRef<SVGSVGElement, BucketDropletOutlineLogoProps>(
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
      <path d="M5 16l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737" />
  <path d="M13.737 9.737c2.299 -2.3 3.23 -5.095 2.081 -6.245c-1.15 -1.15 -3.945 -.217 -6.244 2.082c-2.3 2.299 -3.231 5.095 -2.082 6.244c1.15 1.15 3.946 .218 6.245 -2.081" />
  <path d="M7.492 11.818c.362 .362 .768 .676 1.208 .934l6.895 4.047c1.078 .557 2.255 -.075 3.692 -1.512c1.437 -1.437 2.07 -2.614 1.512 -3.692c-.372 -.718 -1.72 -3.017 -4.047 -6.895a6.015 6.015 0 0 0 -.934 -1.208" />
    </svg>
  )
);

BucketDropletOutlineLogo.displayName = "BucketDropletOutlineLogo";

export const BucketDropletOutlineLogoMetadata = {
  id: "bucket-droplet-outline",
  baseId: "bucket-droplet-outline",
  variant: "default",
  name: "Bucket Droplet Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BucketDropletOutlineLogo;
