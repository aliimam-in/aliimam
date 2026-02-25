/**
 * Auto-generated logo component: Droplet Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DropletPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DropletPlusOutlineLogo = React.forwardRef<SVGSVGElement, DropletPlusOutlineLogoProps>(
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
      <path d="M18.602 12.004a6.66 6.66 0 0 0 -.538 -1.127l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.16 7.16 0 0 0 5.033 1.56" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

DropletPlusOutlineLogo.displayName = "DropletPlusOutlineLogo";

export const DropletPlusOutlineLogoMetadata = {
  id: "droplet-plus-outline",
  baseId: "droplet-plus-outline",
  variant: "default",
  name: "Droplet Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DropletPlusOutlineLogo;
