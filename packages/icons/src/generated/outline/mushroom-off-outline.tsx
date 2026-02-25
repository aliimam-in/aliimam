/**
 * Auto-generated logo component: Mushroom Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MushroomOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MushroomOffOutlineLogo = React.forwardRef<SVGSVGElement, MushroomOffOutlineLogoProps>(
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
      <path d="M5.874 5.89a8.128 8.128 0 0 0 -1.874 5.21a.9 .9 0 0 0 .9 .9h7.1m4 0h3.1a.9 .9 0 0 0 .9 -.9c0 -4.474 -3.582 -8.1 -8 -8.1c-1.43 0 -2.774 .38 -3.936 1.047" />
  <path d="M10 12v7a2 2 0 1 0 4 0v-5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

MushroomOffOutlineLogo.displayName = "MushroomOffOutlineLogo";

export const MushroomOffOutlineLogoMetadata = {
  id: "mushroom-off-outline",
  baseId: "mushroom-off-outline",
  variant: "default",
  name: "Mushroom Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MushroomOffOutlineLogo;
