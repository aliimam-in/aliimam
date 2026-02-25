/**
 * Auto-generated logo component: Sun Low Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SunLowOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SunLowOutlineLogo = React.forwardRef<SVGSVGElement, SunLowOutlineLogoProps>(
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
      <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M4 12h.01" />
  <path d="M12 4v.01" />
  <path d="M20 12h.01" />
  <path d="M12 20v.01" />
  <path d="M6.31 6.31l-.01 -.01" />
  <path d="M17.71 6.31l-.01 -.01" />
  <path d="M17.7 17.7l.01 .01" />
  <path d="M6.3 17.7l.01 .01" />
    </svg>
  )
);

SunLowOutlineLogo.displayName = "SunLowOutlineLogo";

export const SunLowOutlineLogoMetadata = {
  id: "sun-low-outline",
  baseId: "sun-low-outline",
  variant: "default",
  name: "Sun Low Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SunLowOutlineLogo;
