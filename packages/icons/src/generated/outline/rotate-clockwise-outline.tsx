/**
 * Auto-generated logo component: Rotate Clockwise Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RotateClockwiseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RotateClockwiseOutlineLogo = React.forwardRef<SVGSVGElement, RotateClockwiseOutlineLogoProps>(
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
      <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
    </svg>
  )
);

RotateClockwiseOutlineLogo.displayName = "RotateClockwiseOutlineLogo";

export const RotateClockwiseOutlineLogoMetadata = {
  id: "rotate-clockwise-outline",
  baseId: "rotate-clockwise-outline",
  variant: "default",
  name: "Rotate Clockwise Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RotateClockwiseOutlineLogo;
