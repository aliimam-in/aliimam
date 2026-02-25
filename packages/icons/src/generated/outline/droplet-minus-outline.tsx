/**
 * Auto-generated logo component: Droplet Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DropletMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DropletMinusOutlineLogo = React.forwardRef<SVGSVGElement, DropletMinusOutlineLogoProps>(
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
      <path d="M18.946 15.083a6.538 6.538 0 0 0 -.882 -4.206l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.163 7.163 0 0 0 5.089 1.555" />
  <path d="M16 19h6" />
    </svg>
  )
);

DropletMinusOutlineLogo.displayName = "DropletMinusOutlineLogo";

export const DropletMinusOutlineLogoMetadata = {
  id: "droplet-minus-outline",
  baseId: "droplet-minus-outline",
  variant: "default",
  name: "Droplet Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DropletMinusOutlineLogo;
