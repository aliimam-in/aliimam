/**
 * Auto-generated logo component: Signal 2g Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Signal2gOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Signal2gOutlineLogo = React.forwardRef<SVGSVGElement, Signal2gOutlineLogoProps>(
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
      <path d="M19 8h-3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3v-4h-1" />
  <path d="M5 8h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h4" />
    </svg>
  )
);

Signal2gOutlineLogo.displayName = "Signal2gOutlineLogo";

export const Signal2gOutlineLogoMetadata = {
  id: "signal-2g-outline",
  baseId: "signal-2g-outline",
  variant: "default",
  name: "Signal 2g Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Signal2gOutlineLogo;
