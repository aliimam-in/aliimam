/**
 * Auto-generated logo component: Palette (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PaletteLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PaletteLogo = React.forwardRef<SVGSVGElement, PaletteLogoProps>(
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
      <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  )
);

PaletteLogo.displayName = "PaletteLogo";

export const PaletteLogoMetadata = {
  id: "palette",
  baseId: "palette",
  variant: "default",
  name: "Palette",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PaletteLogo;
