/**
 * Auto-generated logo component: Brightness Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrightnessOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrightnessOutlineLogo = React.forwardRef<SVGSVGElement, BrightnessOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M12 3l0 18" />
  <path d="M12 9l4.65 -4.65" />
  <path d="M12 14.3l7.37 -7.37" />
  <path d="M12 19.6l8.85 -8.85" />
    </svg>
  )
);

BrightnessOutlineLogo.displayName = "BrightnessOutlineLogo";

export const BrightnessOutlineLogoMetadata = {
  id: "brightness-outline",
  baseId: "brightness-outline",
  variant: "default",
  name: "Brightness Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrightnessOutlineLogo;
