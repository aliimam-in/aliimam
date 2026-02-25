/**
 * Auto-generated logo component: Droplet Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DropletBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DropletBoltOutlineLogo = React.forwardRef<SVGSVGElement, DropletBoltOutlineLogoProps>(
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
      <path d="M18.628 12.076a6.653 6.653 0 0 0 -.564 -1.199l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546c1.7 1.375 3.906 1.852 5.958 1.431" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

DropletBoltOutlineLogo.displayName = "DropletBoltOutlineLogo";

export const DropletBoltOutlineLogoMetadata = {
  id: "droplet-bolt-outline",
  baseId: "droplet-bolt-outline",
  variant: "default",
  name: "Droplet Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DropletBoltOutlineLogo;
