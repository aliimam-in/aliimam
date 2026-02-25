/**
 * Auto-generated logo component: Fence Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FenceOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FenceOffOutlineLogo = React.forwardRef<SVGSVGElement, FenceOffOutlineLogoProps>(
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
      <path d="M12 12h-8v4h12m4 0v-4h-4" />
  <path d="M6 16v4h4v-4" />
  <path d="M10 12v-2m0 -4l-2 -2m-2 2v6" />
  <path d="M14 16v4h4v-2" />
  <path d="M18 12v-6l-2 -2l-2 2v4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

FenceOffOutlineLogo.displayName = "FenceOffOutlineLogo";

export const FenceOffOutlineLogoMetadata = {
  id: "fence-off-outline",
  baseId: "fence-off-outline",
  variant: "default",
  name: "Fence Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FenceOffOutlineLogo;
