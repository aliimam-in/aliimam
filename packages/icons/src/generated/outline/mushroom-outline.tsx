/**
 * Auto-generated logo component: Mushroom Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MushroomOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MushroomOutlineLogo = React.forwardRef<SVGSVGElement, MushroomOutlineLogoProps>(
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
      <path d="M20 11.1c0 -4.474 -3.582 -8.1 -8 -8.1s-8 3.626 -8 8.1a.9 .9 0 0 0 .9 .9h14.2a.9 .9 0 0 0 .9 -.9" />
  <path d="M10 12v7a2 2 0 1 0 4 0v-7" />
    </svg>
  )
);

MushroomOutlineLogo.displayName = "MushroomOutlineLogo";

export const MushroomOutlineLogoMetadata = {
  id: "mushroom-outline",
  baseId: "mushroom-outline",
  variant: "default",
  name: "Mushroom Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MushroomOutlineLogo;
