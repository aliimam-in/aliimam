/**
 * Auto-generated logo component: Fish Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FishOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FishOutlineLogo = React.forwardRef<SVGSVGElement, FishOutlineLogoProps>(
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
      <path d="M16.69 7.44a6.973 6.973 0 0 0 -1.69 4.56c0 1.747 .64 3.345 1.699 4.571" />
  <path d="M2 9.504c7.715 8.647 14.75 10.265 20 2.498c-5.25 -7.761 -12.285 -6.142 -20 2.504" />
  <path d="M18 11v.01" />
  <path d="M11.5 10.5c-.667 1 -.667 2 0 3" />
    </svg>
  )
);

FishOutlineLogo.displayName = "FishOutlineLogo";

export const FishOutlineLogoMetadata = {
  id: "fish-outline",
  baseId: "fish-outline",
  variant: "default",
  name: "Fish Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FishOutlineLogo;
