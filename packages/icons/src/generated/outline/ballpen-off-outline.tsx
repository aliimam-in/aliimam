/**
 * Auto-generated logo component: Ballpen Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BallpenOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BallpenOffOutlineLogo = React.forwardRef<SVGSVGElement, BallpenOffOutlineLogoProps>(
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
      <path d="M14 6l7 7l-2 2" />
  <path d="M10 10l-4.172 4.172a2.828 2.828 0 1 0 4 4l4.172 -4.172" />
  <path d="M16 12l4.414 -4.414a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-4.414 4.414" />
  <path d="M4 20l1.768 -1.768" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BallpenOffOutlineLogo.displayName = "BallpenOffOutlineLogo";

export const BallpenOffOutlineLogoMetadata = {
  id: "ballpen-off-outline",
  baseId: "ballpen-off-outline",
  variant: "default",
  name: "Ballpen Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BallpenOffOutlineLogo;
