/**
 * Auto-generated logo component: Brightness Auto Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrightnessAutoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrightnessAutoOutlineLogo = React.forwardRef<SVGSVGElement, BrightnessAutoOutlineLogoProps>(
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
      <path d="M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5l0 -3.5" />
  <path d="M10 14.5v-3.5a2 2 0 1 1 4 0v3.5" />
  <path d="M10 13h4" />
    </svg>
  )
);

BrightnessAutoOutlineLogo.displayName = "BrightnessAutoOutlineLogo";

export const BrightnessAutoOutlineLogoMetadata = {
  id: "brightness-auto-outline",
  baseId: "brightness-auto-outline",
  variant: "default",
  name: "Brightness Auto Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrightnessAutoOutlineLogo;
