/**
 * Auto-generated logo component: Droplet Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DropletCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DropletCheckOutlineLogo = React.forwardRef<SVGSVGElement, DropletCheckOutlineLogoProps>(
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
      <path d="M18.967 13.594a6.568 6.568 0 0 0 -.903 -2.717l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.125 7.125 0 0 0 4.04 1.565" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

DropletCheckOutlineLogo.displayName = "DropletCheckOutlineLogo";

export const DropletCheckOutlineLogoMetadata = {
  id: "droplet-check-outline",
  baseId: "droplet-check-outline",
  variant: "default",
  name: "Droplet Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DropletCheckOutlineLogo;
