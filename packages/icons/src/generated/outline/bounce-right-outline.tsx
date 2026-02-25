/**
 * Auto-generated logo component: Bounce Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BounceRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BounceRightOutlineLogo = React.forwardRef<SVGSVGElement, BounceRightOutlineLogoProps>(
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
      <path d="M4 15.5c3 -1 5.5 -.5 8 4.5c.5 -3 1.5 -5.5 3 -8" />
  <path d="M18 9a2 2 0 1 1 0 -4a2 2 0 0 1 0 4" />
    </svg>
  )
);

BounceRightOutlineLogo.displayName = "BounceRightOutlineLogo";

export const BounceRightOutlineLogoMetadata = {
  id: "bounce-right-outline",
  baseId: "bounce-right-outline",
  variant: "default",
  name: "Bounce Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BounceRightOutlineLogo;
