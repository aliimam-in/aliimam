/**
 * Auto-generated logo component: Ballpen Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BallpenOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BallpenOutlineLogo = React.forwardRef<SVGSVGElement, BallpenOutlineLogoProps>(
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
      <path d="M14 6l7 7l-4 4" />
  <path d="M5.828 18.172a2.828 2.828 0 0 0 4 0l10.586 -10.586a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-10.586 10.586a2.828 2.828 0 0 0 0 4" />
  <path d="M4 20l1.768 -1.768" />
    </svg>
  )
);

BallpenOutlineLogo.displayName = "BallpenOutlineLogo";

export const BallpenOutlineLogoMetadata = {
  id: "ballpen-outline",
  baseId: "ballpen-outline",
  variant: "default",
  name: "Ballpen Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BallpenOutlineLogo;
