/**
 * Auto-generated logo component: Signal 6g Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Signal6gOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Signal6gOutlineLogo = React.forwardRef<SVGSVGElement, Signal6gOutlineLogoProps>(
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
      <path d="M18 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
  <path d="M10 9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3" />
    </svg>
  )
);

Signal6gOutlineLogo.displayName = "Signal6gOutlineLogo";

export const Signal6gOutlineLogoMetadata = {
  id: "signal-6g-outline",
  baseId: "signal-6g-outline",
  variant: "default",
  name: "Signal 6g Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Signal6gOutlineLogo;
