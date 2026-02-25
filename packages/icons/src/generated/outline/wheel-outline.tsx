/**
 * Auto-generated logo component: Wheel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WheelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WheelOutlineLogo = React.forwardRef<SVGSVGElement, WheelOutlineLogoProps>(
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
  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M3 12h6" />
  <path d="M15 12h6" />
  <path d="M13.6 9.4l3.4 -4.8" />
  <path d="M10.4 14.6l-3.4 4.8" />
  <path d="M7 4.6l3.4 4.8" />
  <path d="M13.6 14.6l3.4 4.8" />
    </svg>
  )
);

WheelOutlineLogo.displayName = "WheelOutlineLogo";

export const WheelOutlineLogoMetadata = {
  id: "wheel-outline",
  baseId: "wheel-outline",
  variant: "default",
  name: "Wheel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WheelOutlineLogo;
