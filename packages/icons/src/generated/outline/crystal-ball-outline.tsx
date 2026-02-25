/**
 * Auto-generated logo component: Crystal Ball Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CrystalBallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CrystalBallOutlineLogo = React.forwardRef<SVGSVGElement, CrystalBallOutlineLogoProps>(
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
      <path d="M6.73 17.018a8 8 0 1 1 10.54 0" />
  <path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0 -4h-10a2 2 0 0 0 -2 2" />
  <path d="M11 7a3 3 0 0 0 -3 3" />
    </svg>
  )
);

CrystalBallOutlineLogo.displayName = "CrystalBallOutlineLogo";

export const CrystalBallOutlineLogoMetadata = {
  id: "crystal-ball-outline",
  baseId: "crystal-ball-outline",
  variant: "default",
  name: "Crystal Ball Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CrystalBallOutlineLogo;
