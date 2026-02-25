/**
 * Auto-generated logo component: Droplet Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DropletDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DropletDownOutlineLogo = React.forwardRef<SVGSVGElement, DropletDownOutlineLogoProps>(
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
      <path d="M18.602 12.003a6.66 6.66 0 0 0 -.538 -1.126l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.159 7.159 0 0 0 4.972 1.564" />
  <path d="M19 16v6" />
  <path d="M22 19l-3 3l-3 -3" />
    </svg>
  )
);

DropletDownOutlineLogo.displayName = "DropletDownOutlineLogo";

export const DropletDownOutlineLogoMetadata = {
  id: "droplet-down-outline",
  baseId: "droplet-down-outline",
  variant: "default",
  name: "Droplet Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DropletDownOutlineLogo;
