/**
 * Auto-generated logo component: Signal 4g Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Signal4gPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Signal4gPlusOutlineLogo = React.forwardRef<SVGSVGElement, Signal4gPlusOutlineLogoProps>(
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
      <path d="M17 12h4" />
  <path d="M3 8v3a1 1 0 0 0 1 1h3" />
  <path d="M7 8v8" />
  <path d="M19 10v4" />
  <path d="M14 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
    </svg>
  )
);

Signal4gPlusOutlineLogo.displayName = "Signal4gPlusOutlineLogo";

export const Signal4gPlusOutlineLogoMetadata = {
  id: "signal-4g-plus-outline",
  baseId: "signal-4g-plus-outline",
  variant: "default",
  name: "Signal 4g Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Signal4gPlusOutlineLogo;
