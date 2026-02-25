/**
 * Auto-generated logo component: Brightness Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrightnessOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrightnessOffOutlineLogo = React.forwardRef<SVGSVGElement, BrightnessOffOutlineLogoProps>(
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
      <path d="M12 3v5m0 4v9" />
  <path d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" />
  <path d="M12.5 8.5l4.15 -4.15" />
  <path d="M12 14l1.025 -.983m2.065 -1.981l4.28 -4.106" />
  <path d="M12 19.6l3.79 -3.79m2 -2l3.054 -3.054" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BrightnessOffOutlineLogo.displayName = "BrightnessOffOutlineLogo";

export const BrightnessOffOutlineLogoMetadata = {
  id: "brightness-off-outline",
  baseId: "brightness-off-outline",
  variant: "default",
  name: "Brightness Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrightnessOffOutlineLogo;
