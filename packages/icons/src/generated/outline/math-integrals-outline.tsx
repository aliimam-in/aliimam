/**
 * Auto-generated logo component: Math Integrals Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathIntegralsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathIntegralsOutlineLogo = React.forwardRef<SVGSVGElement, MathIntegralsOutlineLogoProps>(
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
      <path d="M3 19a2 2 0 0 0 2 2c2 0 2 -4 3 -9s1 -9 3 -9a2 2 0 0 1 2 2" />
  <path d="M11 19a2 2 0 0 0 2 2c2 0 2 -4 3 -9s1 -9 3 -9a2 2 0 0 1 2 2" />
    </svg>
  )
);

MathIntegralsOutlineLogo.displayName = "MathIntegralsOutlineLogo";

export const MathIntegralsOutlineLogoMetadata = {
  id: "math-integrals-outline",
  baseId: "math-integrals-outline",
  variant: "default",
  name: "Math Integrals Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathIntegralsOutlineLogo;
