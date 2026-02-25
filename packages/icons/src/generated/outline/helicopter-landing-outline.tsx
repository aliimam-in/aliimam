/**
 * Auto-generated logo component: Helicopter Landing Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HelicopterLandingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HelicopterLandingOutlineLogo = React.forwardRef<SVGSVGElement, HelicopterLandingOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M9 8l0 8" />
  <path d="M9 12l6 0" />
  <path d="M15 8l0 8" />
    </svg>
  )
);

HelicopterLandingOutlineLogo.displayName = "HelicopterLandingOutlineLogo";

export const HelicopterLandingOutlineLogoMetadata = {
  id: "helicopter-landing-outline",
  baseId: "helicopter-landing-outline",
  variant: "default",
  name: "Helicopter Landing Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HelicopterLandingOutlineLogo;
