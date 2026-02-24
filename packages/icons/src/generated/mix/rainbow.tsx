/**
 * Auto-generated logo component: Rainbow (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RainbowLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RainbowLogo = React.forwardRef<SVGSVGElement, RainbowLogoProps>(
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
      <path d="M22 17a10 10 0 0 0-20 0" />
  <path d="M6 17a6 6 0 0 1 12 0" />
  <path d="M10 17a2 2 0 0 1 4 0" />
    </svg>
  )
);

RainbowLogo.displayName = "RainbowLogo";

export const RainbowLogoMetadata = {
  id: "rainbow",
  baseId: "rainbow",
  variant: "default",
  name: "Rainbow",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RainbowLogo;
