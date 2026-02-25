/**
 * Auto-generated logo component: Color Swatch Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ColorSwatchOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ColorSwatchOffOutlineLogo = React.forwardRef<SVGSVGElement, ColorSwatchOffOutlineLogoProps>(
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
      <path d="M13 13v4a4 4 0 0 0 6.832 2.825m1.168 -2.825v-12a2 2 0 0 0 -2 -2h-4a2 2 0 0 0 -2 2v4" />
  <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.11 -.461m-2.13 1.874l-1.416 1.415a2 2 0 0 0 0 2.828l9 9" />
  <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
  <path d="M17 17v.01" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ColorSwatchOffOutlineLogo.displayName = "ColorSwatchOffOutlineLogo";

export const ColorSwatchOffOutlineLogoMetadata = {
  id: "color-swatch-off-outline",
  baseId: "color-swatch-off-outline",
  variant: "default",
  name: "Color Swatch Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ColorSwatchOffOutlineLogo;
