/**
 * Auto-generated logo component: Brightness Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrightnessDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrightnessDownOutlineLogo = React.forwardRef<SVGSVGElement, BrightnessDownOutlineLogoProps>(
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
  <path d="M12 5l0 .01" />
  <path d="M17 7l0 .01" />
  <path d="M19 12l0 .01" />
  <path d="M17 17l0 .01" />
  <path d="M12 19l0 .01" />
  <path d="M7 17l0 .01" />
  <path d="M5 12l0 .01" />
  <path d="M7 7l0 .01" />
    </svg>
  )
);

BrightnessDownOutlineLogo.displayName = "BrightnessDownOutlineLogo";

export const BrightnessDownOutlineLogoMetadata = {
  id: "brightness-down-outline",
  baseId: "brightness-down-outline",
  variant: "default",
  name: "Brightness Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrightnessDownOutlineLogo;
