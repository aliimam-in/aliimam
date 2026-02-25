/**
 * Auto-generated logo component: Balloon Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BalloonOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BalloonOutlineLogo = React.forwardRef<SVGSVGElement, BalloonOutlineLogoProps>(
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
      <path d="M14 8a2 2 0 0 0 -2 -2" />
  <path d="M6 8a6 6 0 1 1 12 0c0 4.97 -2.686 9 -6 9s-6 -4.03 -6 -9" />
  <path d="M12 17v1a2 2 0 0 1 -2 2h-3a2 2 0 0 0 -2 2" />
    </svg>
  )
);

BalloonOutlineLogo.displayName = "BalloonOutlineLogo";

export const BalloonOutlineLogoMetadata = {
  id: "balloon-outline",
  baseId: "balloon-outline",
  variant: "default",
  name: "Balloon Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BalloonOutlineLogo;
