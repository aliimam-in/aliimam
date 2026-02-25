/**
 * Auto-generated logo component: Brush Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrushOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrushOffOutlineLogo = React.forwardRef<SVGSVGElement, BrushOffOutlineLogoProps>(
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
      <path d="M3 17a4 4 0 1 1 4 4h-4v-4" />
  <path d="M21 3a16 16 0 0 0 -9.309 4.704m-1.795 2.212a15.993 15.993 0 0 0 -1.696 3.284" />
  <path d="M21 3a16 16 0 0 1 -4.697 9.302m-2.195 1.786a15.993 15.993 0 0 1 -3.308 1.712" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BrushOffOutlineLogo.displayName = "BrushOffOutlineLogo";

export const BrushOffOutlineLogoMetadata = {
  id: "brush-off-outline",
  baseId: "brush-off-outline",
  variant: "default",
  name: "Brush Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrushOffOutlineLogo;
