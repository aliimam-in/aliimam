/**
 * Auto-generated logo component: Math Integral X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathIntegralXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathIntegralXOutlineLogo = React.forwardRef<SVGSVGElement, MathIntegralXOutlineLogoProps>(
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
  <path d="M14 12l6 6" />
  <path d="M14 18l6 -6" />
    </svg>
  )
);

MathIntegralXOutlineLogo.displayName = "MathIntegralXOutlineLogo";

export const MathIntegralXOutlineLogoMetadata = {
  id: "math-integral-x-outline",
  baseId: "math-integral-x-outline",
  variant: "default",
  name: "Math Integral X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathIntegralXOutlineLogo;
