/**
 * Auto-generated logo component: Square Centerline Dashed Vertical (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareCenterlineDashedVerticalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareCenterlineDashedVerticalLogo = React.forwardRef<SVGSVGElement, SquareCenterlineDashedVerticalLogoProps>(
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
      <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
  <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
  <path d="M4 12H2" />
  <path d="M10 12H8" />
  <path d="M16 12h-2" />
  <path d="M22 12h-2" />
    </svg>
  )
);

SquareCenterlineDashedVerticalLogo.displayName = "SquareCenterlineDashedVerticalLogo";

export const SquareCenterlineDashedVerticalLogoMetadata = {
  id: "square-centerline-dashed-vertical",
  baseId: "square-centerline-dashed-vertical",
  variant: "default",
  name: "Square Centerline Dashed Vertical",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareCenterlineDashedVerticalLogo;
