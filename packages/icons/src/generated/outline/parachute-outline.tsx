/**
 * Auto-generated logo component: Parachute Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ParachuteOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ParachuteOutlineLogo = React.forwardRef<SVGSVGElement, ParachuteOutlineLogoProps>(
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
      <path d="M22 12a10 10 0 1 0 -20 0" />
  <path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
  <path d="M2 12l10 10l-3.5 -10" />
  <path d="M15.5 12l-3.5 10l10 -10" />
    </svg>
  )
);

ParachuteOutlineLogo.displayName = "ParachuteOutlineLogo";

export const ParachuteOutlineLogoMetadata = {
  id: "parachute-outline",
  baseId: "parachute-outline",
  variant: "default",
  name: "Parachute Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ParachuteOutlineLogo;
