/**
 * Auto-generated logo component: Droplet Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DropletOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DropletOutlineLogo = React.forwardRef<SVGSVGElement, DropletOutlineLogoProps>(
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
    </svg>
  )
);

DropletOutlineLogo.displayName = "DropletOutlineLogo";

export const DropletOutlineLogoMetadata = {
  id: "droplet-outline",
  baseId: "droplet-outline",
  variant: "default",
  name: "Droplet Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DropletOutlineLogo;
