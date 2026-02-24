/**
 * Auto-generated logo component: Blinds (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BlindsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BlindsLogo = React.forwardRef<SVGSVGElement, BlindsLogoProps>(
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
      <path d="M3 3h18" />
  <path d="M20 7H8" />
  <path d="M20 11H8" />
  <path d="M10 19h10" />
  <path d="M8 15h12" />
  <path d="M4 3v14" />
  <circle cx="4" cy="19" r="2" />
    </svg>
  )
);

BlindsLogo.displayName = "BlindsLogo";

export const BlindsLogoMetadata = {
  id: "blinds",
  baseId: "blinds",
  variant: "default",
  name: "Blinds",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BlindsLogo;
