/**
 * Auto-generated logo component: Vinyl Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VinylOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VinylOutlineLogo = React.forwardRef<SVGSVGElement, VinylOutlineLogoProps>(
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
      <path d="M16 3.937a9 9 0 1 0 5 8.063" />
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M19 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M20 4l-3.5 10l-2.5 2" />
    </svg>
  )
);

VinylOutlineLogo.displayName = "VinylOutlineLogo";

export const VinylOutlineLogoMetadata = {
  id: "vinyl-outline",
  baseId: "vinyl-outline",
  variant: "default",
  name: "Vinyl Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VinylOutlineLogo;
