/**
 * Auto-generated logo component: Fence Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FenceOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FenceOutlineLogo = React.forwardRef<SVGSVGElement, FenceOutlineLogoProps>(
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
      <path d="M4 12v4h16v-4l-16 0" />
  <path d="M6 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6" />
  <path d="M14 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6" />
    </svg>
  )
);

FenceOutlineLogo.displayName = "FenceOutlineLogo";

export const FenceOutlineLogoMetadata = {
  id: "fence-outline",
  baseId: "fence-outline",
  variant: "default",
  name: "Fence Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FenceOutlineLogo;
