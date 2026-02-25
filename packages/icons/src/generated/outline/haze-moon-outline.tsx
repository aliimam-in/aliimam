/**
 * Auto-generated logo component: Haze Moon Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HazeMoonOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HazeMoonOutlineLogo = React.forwardRef<SVGSVGElement, HazeMoonOutlineLogoProps>(
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
      <path d="M3 16h18" />
  <path d="M3 20h18" />
  <path d="M8.296 16c-2.268 -1.4 -3.598 -4.087 -3.237 -6.916c.443 -3.48 3.308 -6.083 6.698 -6.084v.006h.296c-1.991 1.916 -2.377 5.03 -.918 7.405c1.459 2.374 4.346 3.33 6.865 2.275a6.888 6.888 0 0 1 -2.777 3.314" />
    </svg>
  )
);

HazeMoonOutlineLogo.displayName = "HazeMoonOutlineLogo";

export const HazeMoonOutlineLogoMetadata = {
  id: "haze-moon-outline",
  baseId: "haze-moon-outline",
  variant: "default",
  name: "Haze Moon Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HazeMoonOutlineLogo;
