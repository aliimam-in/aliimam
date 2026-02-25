/**
 * Auto-generated logo component: Scissors Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScissorsOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScissorsOffOutlineLogo = React.forwardRef<SVGSVGElement, ScissorsOffOutlineLogoProps>(
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
      <path d="M4.432 4.442a3 3 0 1 0 4.114 4.146" />
  <path d="M3 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M8.6 15.4l3.4 -3.4m2 -2l5 -5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ScissorsOffOutlineLogo.displayName = "ScissorsOffOutlineLogo";

export const ScissorsOffOutlineLogoMetadata = {
  id: "scissors-off-outline",
  baseId: "scissors-off-outline",
  variant: "default",
  name: "Scissors Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScissorsOffOutlineLogo;
