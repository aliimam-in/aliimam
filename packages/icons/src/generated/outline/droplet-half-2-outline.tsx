/**
 * Auto-generated logo component: Droplet Half 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DropletHalf2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DropletHalf2OutlineLogo = React.forwardRef<SVGSVGElement, DropletHalf2OutlineLogoProps>(
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
      <path d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546" />
  <path d="M5 14h14" />
    </svg>
  )
);

DropletHalf2OutlineLogo.displayName = "DropletHalf2OutlineLogo";

export const DropletHalf2OutlineLogoMetadata = {
  id: "droplet-half-2-outline",
  baseId: "droplet-half-2-outline",
  variant: "default",
  name: "Droplet Half 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DropletHalf2OutlineLogo;
