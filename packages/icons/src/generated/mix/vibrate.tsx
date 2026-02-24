/**
 * Auto-generated logo component: Vibrate (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VibrateLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VibrateLogo = React.forwardRef<SVGSVGElement, VibrateLogoProps>(
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
      <path d="m2 8 2 2-2 2 2 2-2 2" />
  <path d="m22 8-2 2 2 2-2 2 2 2" />
  <rect width="8" height="14" x="8" y="5" rx="1" />
    </svg>
  )
);

VibrateLogo.displayName = "VibrateLogo";

export const VibrateLogoMetadata = {
  id: "vibrate",
  baseId: "vibrate",
  variant: "default",
  name: "Vibrate",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VibrateLogo;
