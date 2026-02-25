/**
 * Auto-generated logo component: Signal 4g Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Signal4gOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Signal4gOutlineLogo = React.forwardRef<SVGSVGElement, Signal4gOutlineLogoProps>(
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
      <path d="M6 8v3a1 1 0 0 0 1 1h3" />
  <path d="M10 8v8" />
  <path d="M17 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
    </svg>
  )
);

Signal4gOutlineLogo.displayName = "Signal4gOutlineLogo";

export const Signal4gOutlineLogoMetadata = {
  id: "signal-4g-outline",
  baseId: "signal-4g-outline",
  variant: "default",
  name: "Signal 4g Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Signal4gOutlineLogo;
