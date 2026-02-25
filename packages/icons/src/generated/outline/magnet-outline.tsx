/**
 * Auto-generated logo component: Magnet Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MagnetOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MagnetOutlineLogo = React.forwardRef<SVGSVGElement, MagnetOutlineLogoProps>(
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
      <path d="M4 13v-8a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v8a2 2 0 0 0 6 0v-8a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v8a8 8 0 0 1 -16 0" />
  <path d="M4 8l5 0" />
  <path d="M15 8l4 0" />
    </svg>
  )
);

MagnetOutlineLogo.displayName = "MagnetOutlineLogo";

export const MagnetOutlineLogoMetadata = {
  id: "magnet-outline",
  baseId: "magnet-outline",
  variant: "default",
  name: "Magnet Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MagnetOutlineLogo;
