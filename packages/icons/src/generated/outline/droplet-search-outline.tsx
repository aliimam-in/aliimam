/**
 * Auto-generated logo component: Droplet Search Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DropletSearchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DropletSearchOutlineLogo = React.forwardRef<SVGSVGElement, DropletSearchOutlineLogoProps>(
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
      <path d="M18.064 10.877l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.13 7.13 0 0 0 4.168 1.572" />
  <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M20.2 20.2l1.8 1.8" />
    </svg>
  )
);

DropletSearchOutlineLogo.displayName = "DropletSearchOutlineLogo";

export const DropletSearchOutlineLogoMetadata = {
  id: "droplet-search-outline",
  baseId: "droplet-search-outline",
  variant: "default",
  name: "Droplet Search Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DropletSearchOutlineLogo;
