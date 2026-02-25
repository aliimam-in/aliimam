/**
 * Auto-generated logo component: Speedboat Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SpeedboatOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SpeedboatOutlineLogo = React.forwardRef<SVGSVGElement, SpeedboatOutlineLogoProps>(
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
      <path d="M2 17h14.4a3 3 0 0 0 2.5 -1.34l3.1 -4.66h-6.23a4 4 0 0 0 -1.49 .29l-3.56 1.42a4 4 0 0 1 -1.49 .29h-5.73l-1.5 4" />
  <path d="M6 13l1.5 -5" />
  <path d="M6 8h8l2 3" />
    </svg>
  )
);

SpeedboatOutlineLogo.displayName = "SpeedboatOutlineLogo";

export const SpeedboatOutlineLogoMetadata = {
  id: "speedboat-outline",
  baseId: "speedboat-outline",
  variant: "default",
  name: "Speedboat Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SpeedboatOutlineLogo;
