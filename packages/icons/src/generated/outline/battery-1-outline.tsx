/**
 * Auto-generated logo component: Battery 1 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Battery1OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Battery1OutlineLogo = React.forwardRef<SVGSVGElement, Battery1OutlineLogoProps>(
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
      <path d="M6 7h11a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2" />
  <path d="M7 10l0 4" />
    </svg>
  )
);

Battery1OutlineLogo.displayName = "Battery1OutlineLogo";

export const Battery1OutlineLogoMetadata = {
  id: "battery-1-outline",
  baseId: "battery-1-outline",
  variant: "default",
  name: "Battery 1 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Battery1OutlineLogo;
