/**
 * Auto-generated logo component: Brightness Half Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrightnessHalfOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrightnessHalfOutlineLogo = React.forwardRef<SVGSVGElement, BrightnessHalfOutlineLogoProps>(
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
      <path d="M12 9a3 3 0 0 0 0 6v-6" />
  <path d="M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5l0 -3.5" />
    </svg>
  )
);

BrightnessHalfOutlineLogo.displayName = "BrightnessHalfOutlineLogo";

export const BrightnessHalfOutlineLogoMetadata = {
  id: "brightness-half-outline",
  baseId: "brightness-half-outline",
  variant: "default",
  name: "Brightness Half Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrightnessHalfOutlineLogo;
