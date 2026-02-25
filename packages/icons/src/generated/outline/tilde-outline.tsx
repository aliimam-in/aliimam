/**
 * Auto-generated logo component: Tilde Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TildeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TildeOutlineLogo = React.forwardRef<SVGSVGElement, TildeOutlineLogoProps>(
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
      <path d="M4 12c0 -1.657 1.592 -3 3.556 -3c1.963 0 3.11 1.5 4.444 3c1.333 1.5 2.48 3 4.444 3s3.556 -1.343 3.556 -3" />
    </svg>
  )
);

TildeOutlineLogo.displayName = "TildeOutlineLogo";

export const TildeOutlineLogoMetadata = {
  id: "tilde-outline",
  baseId: "tilde-outline",
  variant: "default",
  name: "Tilde Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TildeOutlineLogo;
