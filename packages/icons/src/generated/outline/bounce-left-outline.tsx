/**
 * Auto-generated logo component: Bounce Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BounceLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BounceLeftOutlineLogo = React.forwardRef<SVGSVGElement, BounceLeftOutlineLogoProps>(
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
      <path d="M20 15.5c-3 -1 -5.5 -.5 -8 4.5c-.5 -3 -1.5 -5.5 -3 -8" />
  <path d="M6 9a2 2 0 1 1 0 -4a2 2 0 0 1 0 4" />
    </svg>
  )
);

BounceLeftOutlineLogo.displayName = "BounceLeftOutlineLogo";

export const BounceLeftOutlineLogoMetadata = {
  id: "bounce-left-outline",
  baseId: "bounce-left-outline",
  variant: "default",
  name: "Bounce Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BounceLeftOutlineLogo;
