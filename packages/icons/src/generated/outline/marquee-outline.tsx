/**
 * Auto-generated logo component: Marquee Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MarqueeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MarqueeOutlineLogo = React.forwardRef<SVGSVGElement, MarqueeOutlineLogoProps>(
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
      <path d="M4 6a2 2 0 0 1 2 -2m3 0h1.5m3 0h1.5m3 0a2 2 0 0 1 2 2m0 3v1.5m0 3v1.5m0 3a2 2 0 0 1 -2 2m-3 0h-1.5m-3 0h-1.5m-3 0a2 2 0 0 1 -2 -2m0 -3v-1.5m0 -3v-1.5m0 -3" />
    </svg>
  )
);

MarqueeOutlineLogo.displayName = "MarqueeOutlineLogo";

export const MarqueeOutlineLogoMetadata = {
  id: "marquee-outline",
  baseId: "marquee-outline",
  variant: "default",
  name: "Marquee Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MarqueeOutlineLogo;
