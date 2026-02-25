/**
 * Auto-generated logo component: Tractor Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TractorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TractorOutlineLogo = React.forwardRef<SVGSVGElement, TractorOutlineLogoProps>(
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
      <path d="M3 15a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M7 15l0 .01" />
  <path d="M17 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M10.5 17l6.5 0" />
  <path d="M20 15.2v-4.2a1 1 0 0 0 -1 -1h-6l-2 -5h-6v6.5" />
  <path d="M18 5h-1a1 1 0 0 0 -1 1v4" />
    </svg>
  )
);

TractorOutlineLogo.displayName = "TractorOutlineLogo";

export const TractorOutlineLogoMetadata = {
  id: "tractor-outline",
  baseId: "tractor-outline",
  variant: "default",
  name: "Tractor Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TractorOutlineLogo;
