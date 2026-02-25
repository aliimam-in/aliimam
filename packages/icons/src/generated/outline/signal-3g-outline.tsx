/**
 * Auto-generated logo component: Signal 3g Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Signal3gOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Signal3gOutlineLogo = React.forwardRef<SVGSVGElement, Signal3gOutlineLogoProps>(
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
      <path d="M17 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
  <path d="M6 8h2.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-2.5" />
    </svg>
  )
);

Signal3gOutlineLogo.displayName = "Signal3gOutlineLogo";

export const Signal3gOutlineLogoMetadata = {
  id: "signal-3g-outline",
  baseId: "signal-3g-outline",
  variant: "default",
  name: "Signal 3g Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Signal3gOutlineLogo;
