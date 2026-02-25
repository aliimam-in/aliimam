/**
 * Auto-generated logo component: Treadmill Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TreadmillOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TreadmillOutlineLogo = React.forwardRef<SVGSVGElement, TreadmillOutlineLogoProps>(
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
      <path d="M10 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M3 14l4 1l.5 -.5" />
  <path d="M12 18v-3l-3 -2.923l.75 -5.077" />
  <path d="M6 10v-2l4 -1l2.5 2.5l2.5 .5" />
  <path d="M21 22a1 1 0 0 0 -1 -1h-16a1 1 0 0 0 -1 1" />
  <path d="M18 21l1 -11l2 -1" />
    </svg>
  )
);

TreadmillOutlineLogo.displayName = "TreadmillOutlineLogo";

export const TreadmillOutlineLogoMetadata = {
  id: "treadmill-outline",
  baseId: "treadmill-outline",
  variant: "default",
  name: "Treadmill Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TreadmillOutlineLogo;
