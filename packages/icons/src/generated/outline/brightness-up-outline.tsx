/**
 * Auto-generated logo component: Brightness Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrightnessUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrightnessUpOutlineLogo = React.forwardRef<SVGSVGElement, BrightnessUpOutlineLogoProps>(
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
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M12 5l0 -2" />
  <path d="M17 7l1.4 -1.4" />
  <path d="M19 12l2 0" />
  <path d="M17 17l1.4 1.4" />
  <path d="M12 19l0 2" />
  <path d="M7 17l-1.4 1.4" />
  <path d="M6 12l-2 0" />
  <path d="M7 7l-1.4 -1.4" />
    </svg>
  )
);

BrightnessUpOutlineLogo.displayName = "BrightnessUpOutlineLogo";

export const BrightnessUpOutlineLogoMetadata = {
  id: "brightness-up-outline",
  baseId: "brightness-up-outline",
  variant: "default",
  name: "Brightness Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrightnessUpOutlineLogo;
