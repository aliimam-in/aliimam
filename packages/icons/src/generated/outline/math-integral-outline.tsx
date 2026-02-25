/**
 * Auto-generated logo component: Math Integral Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathIntegralOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathIntegralOutlineLogo = React.forwardRef<SVGSVGElement, MathIntegralOutlineLogoProps>(
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
      <path d="M7 19a2 2 0 0 0 2 2c2 0 2 -4 3 -9s1 -9 3 -9a2 2 0 0 1 2 2" />
    </svg>
  )
);

MathIntegralOutlineLogo.displayName = "MathIntegralOutlineLogo";

export const MathIntegralOutlineLogoMetadata = {
  id: "math-integral-outline",
  baseId: "math-integral-outline",
  variant: "default",
  name: "Math Integral Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathIntegralOutlineLogo;
