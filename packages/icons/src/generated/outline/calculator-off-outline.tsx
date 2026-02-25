/**
 * Auto-generated logo component: Calculator Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalculatorOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalculatorOffOutlineLogo = React.forwardRef<SVGSVGElement, CalculatorOffOutlineLogoProps>(
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
      <path d="M19.823 19.824a2 2 0 0 1 -1.823 1.176h-12a2 2 0 0 1 -2 -2v-14c0 -.295 .064 -.575 .178 -.827m2.822 -1.173h11a2 2 0 0 1 2 2v11" />
  <path d="M10 10h-1a1 1 0 0 1 -1 -1v-1m3 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1" />
  <path d="M8 14v.01" />
  <path d="M12 14v.01" />
  <path d="M8 17v.01" />
  <path d="M12 17v.01" />
  <path d="M16 17v.01" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CalculatorOffOutlineLogo.displayName = "CalculatorOffOutlineLogo";

export const CalculatorOffOutlineLogoMetadata = {
  id: "calculator-off-outline",
  baseId: "calculator-off-outline",
  variant: "default",
  name: "Calculator Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalculatorOffOutlineLogo;
